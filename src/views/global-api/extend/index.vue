<template>
  <div id="extend">这是一个extends页面</div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ExtendView",
  methods: {
    init() {
      // const TemConstructor = Vue.extend({
      //   template: "{{firstName}} {{lastName}} aka {{alias}}",
      //   data() {
      //     return {
      //       firstName: "Walter",
      //       lastName: "White",
      //       alias: "Heisenberg",
      //     };
      //   },
      // });
      // new TemConstructor({ el: "extend" });
    },
  },
  mounted() {
    console.log("执行");
    var Profile = Vue.extend({
      template:
        "<p class='full-name'>{{firstName}} {{lastName}} aka {{alias}}</p>",
      data: function () {
        return {
          firstName: "Walter",
          lastName: "White",
          alias: "Heisenberg",
        };
      },
    });
    const el = new Profile().$mount().$el;
    console.log("el", el);
    document.getElementById("extend").appendChild(el);
    console.dir(Vue.extend);
    this.init();
  },
};
</script>

<style lang="less" scoped>
#extend {
  background-color: red;
}
</style>
