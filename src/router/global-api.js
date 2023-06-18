const globalApiRoutes = [
  {
    path: '/',
    name: 'GlobalApi',
    redirect: '/extend',
    component: () => import('@/views/global-api/index.vue'),
    children: [
      {
        path: '/extend',
        name: 'Extend',
        meta: {
          root: 'GlobalApi',
        },
        component: () => import('@/views/global-api/extend-view/index.vue'),
      },
      {
        path: '/slot-view',
        name: 'SlotView',
        meta: {
          root: 'GlobalApi',
        },
        component: () => import('@/views/global-api/slot-view/index.vue'),
      },
      {
        path: '/mixin-view',
        name: 'MixinView',
        meta: {
          root: 'GlobalApi',
        },
        component: () => import('@/views/global-api/mixin-view/index.vue'),
      },
      {
        path: '/web-worker-view',
        name: 'WebWorkerView',
        meta: {
          root: 'GlobalApi',
        },
        component: () => import('@/views/global-api/web-worker-view/index.vue'),
      },
    ],
  },
];

export default globalApiRoutes;
