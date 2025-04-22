import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/home", redirect: "/" },
    { path: "/:notFound(.*)", component: NotFoundView },
  ],
});

export default router;
