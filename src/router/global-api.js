const globalApiRoutes = [
  {
    path: "/",
    name: "ExtendView",
    component: () => import("@/views/global-api/extend/index.vue"),
  },
];

export default globalApiRoutes;
