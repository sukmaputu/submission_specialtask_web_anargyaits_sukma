import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../Views/HomeView.vue";
import AboutView from "../Views/AboutView.vue";
import ShopView from "../Views/ShopView.vue";
import CourseView from "../Views/CourseView.vue";
import AchievementView from "../Views/AchievementView.vue";
import MemberView from "../Views/MemberView.vue";
import TeamView from "../Views/TeamView.vue";
import AppCheckout from "../components/AppCheckout.vue";
import { isLoading } from "../store/loading";

const router = createRouter({
  history: createWebHistory("/submission_specialtask_web_anargyaits_sukma/"),
  routes: [
    { path: "/", component: HomeView },
    { path: "/shop", component: ShopView },
    { path: "/about", component: AboutView },
    { path: "/:catchAll(.*)", redirect: "/" },
    { path: "/course", component: CourseView},
    { path: "/achievement", component: AchievementView },
    { path: "/member", component: MemberView },
    { path: "/team", component: TeamView },
    { path: "/checkout", component: AppCheckout },
  ],
});

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  // kasih delay sedikit biar animasinya halus
  setTimeout(() => {
    isLoading.value = false;
  }, 700);
});

router.onError(() => {
  isLoading.value = false;
});

export default router;
