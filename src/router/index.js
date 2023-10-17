import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      name: "history",
      path: "/order-history",
      component: () => import("../components/OrderHistory.vue"),
    },
    {
      name: "detail",
      path: "/order-detail",
      component: () => import("../components/OrderDetail.vue"),
    },
    {
      name: "home",
      path: "/",
      redirect: "/order-history",
    },
    {
      name: "404",
      path: "/404",
      component: () => import("../components/404.vue"),
    },
  ],
});

export default router;
