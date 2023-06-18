<template>
  <div class="content-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'GlobalApi',
};
</script>

<style lang="less" scoped>
.content-container {
  width: 100%;
  height: 100%;
}
</style>
