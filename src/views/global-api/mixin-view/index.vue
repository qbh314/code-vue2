<template>
  <div>
    <button v-for="item in list" :key="item" @click="handleBtnClick">
      {{ item }}
    </button>
  </div>
</template>

<script>
import { mixinData } from "./mixin.js";

export default {
  name: "MixinView",
  mixins: [mixinData],
};
</script>

<style lang="scss" scoped>
</style>