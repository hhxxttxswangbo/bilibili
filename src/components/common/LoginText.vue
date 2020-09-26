<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "type", "placeholder", "rule"],
};
</script>

<style>
</style>