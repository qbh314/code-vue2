<template>
  <div>
    <div>
      <label for="">数字1:</label>
      <input id="input1" />
    </div>
    <div>
      <label for="">数字2:</label>
      <input id="input2" />
    </div>
    <h1>{{ result }}</h1>
  </div>
</template>

<script>
export default {
  name: 'WebWorkerView',
  data() {
    return {
      myWork: null,
      result: 0,
    };
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const myWork = new Worker('work.js');
    myWork.onmessage = (e) => {
      this.result = e.data;
    };

    this.myWork = myWork;
  },
  methods: {
    handleInput1() {
      this.myWork.possMessage([1, 2]);
    },
    handleInput2() {
      this.myWork.possMessage([3, 4]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
