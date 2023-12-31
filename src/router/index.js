
import { createRouter, createWebHistory } from "vue-router";
import MyOrders from "../views/MyOrders.vue";
import Mycart from "../views/MyCart.vue";
import ProductList1 from "../components/ProductList1.vue";
import ProductDetail from "../components/ProductDetail.vue";


// import LoginParent from "../components/LoginParent.vue"
import about from "../views/AboutPage.vue";
import OrderPage from "../components/OrderPage.vue";

import fbLogin from "../components/FbLogin.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: ProductList1,
  },
  {
    path: "/myorder",
    name: "order",
    component: MyOrders,
  },
  {
    path: "/mycart",
    name: "cart",
    component: Mycart,
  },
  {
    path: "/login",
    name: "login",
    component: fbLogin,
  },
  {
    path: "/productDetail",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/order",
    name: "order",
    component: OrderPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
