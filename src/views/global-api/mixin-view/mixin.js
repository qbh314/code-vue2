export const mixinData = {
  data() {
    return {
      list: ["成员1", "成员2"],
    };
  },
  mounted() {
    console.log("挂载完成");
  },
  methods: {
    handleBtnClick() {
      console.log("完成点击");
    },
  },
};
