import { createWebHistory, createRouter } from "vue-router";
import DealsList from "./views/DealsList.vue"
import TableRSI from "./views/TableRSI.vue"
import LoginPage from "./views/LoginPage.vue"

const routes = [
  {
    path: "/",
    name: "TableRSI",
    component: TableRSI,
  },
  {
    path: "/deals/",
    name: "DealsList",
    component: DealsList,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;