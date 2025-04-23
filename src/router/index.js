import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import CardView from "../views/cardView.vue";
import ProductView from "../views/ProductView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/home", redirect: "/" },
    { path: "/product", component: ProductView, name: "product" },
    {
      path: "/product/:id",
      component: ProductDetailView,
      name: "product-detail",
    },
    { path: "/cart", component: CardView },
    { path: "/about", component: AboutView },
    { path: "/contact", component: ContactView },
    { path: "/:notFound(.*)", component: NotFoundView },
  ],
});

export default router;
