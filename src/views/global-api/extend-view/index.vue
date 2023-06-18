<template>
  <div id="extend">
    <h2>用extend创建一个Profile组件</h2>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'ExtendView',
  methods: {},
  mounted() {
    const Profile = Vue.extend({
      template:
        "<p class='full-name'>{{firstName}} {{lastName}} aka {{alias}}</p>",
      data() {
        return {
          firstName: 'Walter',
          lastName: 'White',
          alias: 'Heisenberg',
        };
      },
    });
    const el = new Profile().$mount().$el;
    document.getElementById('extend').appendChild(el);
  },
};
</script>

<style lang="less" scoped>
#extend {
  min-height: 300px;
  padding: 24px;
  border-radius: 2px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;

  h2 {
    padding-bottom: 24px;
  }
}
</style>
