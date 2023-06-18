<template>
  <div>
    <div class="nav-item" v-for="item in list" :key="item.name">
      <router-link
        :class="['nav-link', { active: $route.path === item.path }]"
        :to="item.path"
      >
        {{ item.name }}
      </router-link>
      <nav-item v-if="item.children?.length" :list="item.children"></nav-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-item',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
      validator(value) {
        return Array.isArray(value);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.nav-item {
  position: relative;
  margin-top: 8px;
  padding-left: 15px;
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
