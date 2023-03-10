import {createRouter} from 'vue-router';
import Home from '../sections/HomeSection.vue';
import Introduction from '../sections/IntroductionSection.vue';
import Welcome from '../sections/WelcomeSection.vue'
import Gameplay from '../sections/GameplaySection.vue';
import Team from '../sections/TeamSection.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/intro",
    name: "intro",
    component: Introduction,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/gameplay",
    name: "gameplay",
    component: Gameplay,
  },
  {
    path: "/team",
    name: "team",
    component: Team,
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