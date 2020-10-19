<template>
  <div class="home" v-if="category">
    <nav-bar></nav-bar>
    <div class="categorytab">
      <div class="category-ico" @click="$router.push('/editcategory')">
        <van-icon name="setting-o" />
      </div>
      <van-tabs v-model="active" swipeable sticky animated>
        <van-tab
          v-for="(item, index) in category"
          :key="index"
          :title="item.title"
        >
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    async selectCategory() {
      if (localStorage.getItem("newCat")) {
        return;
      }
      const res = await this.$http.get("/category");
      this.category = this.changeCategory(res.data);
      this.selectArticle();
    },
    changeCategory(data) {
      const category1 = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = true;
        item.pagesize = 10;
        return item;
      });
      return category1;
    },
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      });
    },

    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    },
  },
  watch: {
    active() {
      const categoryitem = this.categoryItem();
      if (!categoryitem.list.length) {
        this.selectArticle();
      }
    },
  },
  created() {
    this.selectCategory();
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