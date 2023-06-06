<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "GlobalApi",
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
}
</style>