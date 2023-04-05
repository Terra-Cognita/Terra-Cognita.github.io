import { createRouter } from "vue-router";
import Landing from "../pages/LandingPage.vue";
import Codex from "../pages/CodexPage.vue";
import Login from "../pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Landing,
  },
  {
    path: "/codex",
    name: "codex",
    component: Codex,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      }
      return {
        top: 0,
        behavior: "smooth",
      };
    },
  });
}
