import { createRouter, createWebHistory } from "vue-router";
//import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Weekly from "@/views/components/Weekly";
import Month from "@/views/components/Month";
import GroupPage from "@/My components/GroupPage";
import GroupPageRed from "@/My components/GroupPageRed";
import start from "@/views/start";
const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/start",
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: Dashboard,
  // },
  {
    path: "/tables",
    name: "Посещаемость",
    component: Tables,
  },
  {
    path: "/start",
    name:"привет",
    component: start
  },
  {
    path: "/billing",
    name: "Документы",
    component: Billing,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/notifications",
    name: "Работа с любимыми студентами",
    component: Notifications,
  },
  {
    path: "/profile/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/weekly/:name",
    name: "Weekly",
    component: Weekly,
  },
  {
    path: "/month/:name",
    name: "Month",
    component: Month,
  },
  {
    path: "/:groupPage",
    name: "Groupe",
    component: GroupPage,
  },
  {
    path: "/Student/:GroupPageRed",
    name: "Groupered",
    component: GroupPageRed,
  }
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
