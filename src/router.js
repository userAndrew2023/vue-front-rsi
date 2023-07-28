import { createWebHistory, createRouter } from "vue-router";
import DealsList from "./views/DealsList.vue"
import TableRSI from "./views/TableRSI.vue"

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;