import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MaterialDashboard from "./material-dashboard";
import BootstrapVue3 from "bootstrap-vue-3"
import VCalendar from 'v-calendar'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(BootstrapVue3);
appInstance.use(MaterialDashboard);
appInstance.use(VCalendar)
appInstance.use(VueCal)
appInstance.mount("#app");
