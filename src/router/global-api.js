const globalApiRoutes = [
  {
    path: "/global-api",
    name: "GlobalApi",
    children: [
      {
        path: "/extend",
        name: "Extend",
        component: () => import("@/views/global-api/extend/index.vue"),
      },
    ],
  },
];

export default globalApiRoutes;
