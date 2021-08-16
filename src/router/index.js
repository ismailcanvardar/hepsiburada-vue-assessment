import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import AddLink from "../views/AddLink";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-link",
    name: "Add Link",
    component: AddLink,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
