const globalApiRoutes = [
  {
    path: "/",
    name: "GlobalApi",
    redirect: "/extend",
    component: () => import("@/views/global-api/index.vue"),
    children: [
      {
        path: "/extend",
        name: "Extend",
        meta: {
          root: "GlobalApi",
        },
        component: () => import("@/views/global-api/extend/index.vue"),
      },
      {
        path: "/slot-view",
        name: "SlotView",
        meta: {
          root: "GlobalApi",
        },
        component: () => import("@/views/global-api/slot-view/index.vue"),
      },
      {
        path: "/mixin-view",
        name: "MixinView",
        meta: {
          root: "GlobalApi",
        },
        component: () => import("@/views/global-api/mixin-view/index.vue"),
      },
    ],
  },
];

export default globalApiRoutes;
