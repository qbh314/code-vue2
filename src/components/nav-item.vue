<template>
  <div>
    <div class="nav-item" v-for="item in list" :key="item.name">
      <router-link
        :class="[$route.path === item.path ? 'active' : '', 'nav-link']"
        :to="item.path"
      >
        {{ item.path }}
      </router-link>
      <nav-item :list="item.children"></nav-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-item",
  props: {
    list: Array,
  },
};
</script>

<style lang="less" scoped>
.nav-item {
  position: relative;
  padding-left: 15px;
  margin-top: 8px;
  font-size: 16px;
  cursor: pointer;

  .nav-link {
    color: rgb(79, 89, 89);
    text-decoration: none;
  }
  .nav-link:hover {
    text-decoration: underline;
    text-decoration-color: green;
    text-decoration-thickness: auto;
  }

  .nav-link:active {
    color: green;
  }

  .nav-link.active {
    color: green;
  }
}
</style>
