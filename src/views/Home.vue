<template>
  <div class="home">
    <navBar></navBar>
    <van-tabs v-model="active" swipeable sticky>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.title"
      >
        <van-list
          v-model="item.loading"
          :immediate-check="false"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="detailparent">
            <detail
              class="detailitem"
              :detailitem="categoryitem"
              v-for="(categoryitem, categoryindex) in item.list"
              :key="categoryindex"
            />
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import Detail from "./Detail";
export default {
  components: {
    NavBar,
    Detail,
  },
  data() {
    return {
      //获取标签栏滚动数据
      category: [],
      //active为下标
      active: 0,
    };
  },
  methods: {
    //获取标签栏滚动数据
    async selectcategory() {
      const res = await this.$http.get("/category");
      // console.log(res);
      //赋值到category中
      // this.category = res.data;
      //传入res.data到changecategory中
      this.changecategory(res.data);
    },
    onLoad() {
      // console.log("已经到底部了");
      const categoryitem = this.categoryItem();
      setTimeout(() => {
        categoryitem.page += 1;
        this.selectArticle();
      }, 1000);
    },
    //改造数据：下拉加载更多时才加载当前数据
    changecategory(data) {
      // console.log(data);
      // map方法可以在已有的item上进行改造,此处添加list属性,表示每个分类里存储不同的文章数据
      const category1 = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = false;
        item.pagesize = 10;
        return item;
      });
      // console.log(category1);
      this.category = category1;
      this.selectArticle();
    },
    //获取文章数据
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      });
      categoryitem.list.push(...res.data);
      categoryitem.loading = false;
      if (res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true;
      }
    },
    categoryItem() {
      //this.active获取下标
      const categoryitem = this.category[this.active];
      // console.log(categoryitem);
      return categoryitem;
    },
  },
  watch: {
    //监听下标的点击事件
    active() {
      this.selectArticle();
    },
  },
  created() {
    this.selectcategory();
  },
};
</script>

<style lang="less">
.home {
  background-color: white;
}
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem {
    margin: 1.389vw 0;
    width: 45%;
  }
}
.categorytab {
  position: relative;
  .category-ico {
    position: absolute;
    z-index: 5;
    right: 0;
    top: 1.944vw;
    padding: 1.389vw 2.778vw;
    background-color: white;
  }
}
</style>