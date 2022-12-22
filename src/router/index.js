import {createRouter} from 'vue-router';
import Home from '../pages/Home.vue';
import Dev from '../pages/Development.vue';
import Lore from '../pages/Lore.vue';
import Team from '../pages/Team.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/team",
    name: "team",
    component: Team,
  },
  {
    path: "/dev",
    name: "dev",
    component: Dev,
  },
  {
    path: "/lore",
    name: "lore",
    component: Lore,
  },
]

export default function (history) {
  return createRouter({
    history,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } 
    }
  })
}