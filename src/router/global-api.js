const globalApiRoutes = [
  {
    path: "/global-api",
    name: "GlobalApi",
    component: () => import("@/App.vue"),
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
    ],
  },
];

export default globalApiRoutes;
