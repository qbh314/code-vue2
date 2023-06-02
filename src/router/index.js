import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = [];

const files = require.context("@/router", false, /\.js$/);
files.keys().forEach((key) => {
  if (key === "./index.js") return;
  const defaultList = files(key).default;
  routes = routes.concat(defaultList);
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
