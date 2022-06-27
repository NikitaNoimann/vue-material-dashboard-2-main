<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
<!--      <li class="nav-item">-->
<!--        <sidenav-collapse-->
<!--          url="#"-->
<!--          :aria-controls="''"-->
<!--          v-bind:collapse="false"-->
<!--          collapseRef="dashboard"-->
<!--          navText="Dashboard"-->
<!--        >-->
<!--          <template v-slot:icon>-->
<!--            <i class="material-icons-round opacity-10 fs-5">dashboard</i>-->
<!--          </template>-->
<!--        </sidenav-collapse>-->
<!--      </li>-->
      <template v-if="rule34.rule === 'Admin' || rule34.rule === 'Староста' ">
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="/tables"
          navText="Посещаемость"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">table_view</i>
          </template>
        </sidenav-collapse>
      </li>
      </template>
      <template v-if="rule34.rule === 'Admin' || rule34.rule === 'Куратор' || rule34.rule === 'Декан'">
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="/billing"
          navText="Документы"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">receipt_long</i>
          </template>
        </sidenav-collapse>
      </li>
      </template>
<!--      <li class="nav-item">-->
<!--        <sidenav-collapse-->
<!--          url="#"-->
<!--          :aria-controls="''"-->
<!--          v-bind:collapse="false"-->
<!--          collapseRef="notifications"-->
<!--          navText="Работа со студентами"-->
<!--        >-->
<!--          <template v-slot:icon>-->
<!--            <i class="material-icons-round opacity-10 fs-5">notifications</i>-->
<!--          </template>-->
<!--        </sidenav-collapse>-->
<!--      </li>-->
      <template v-if="rule34.rule === 'Admin' || rule34.rule === 'Куратор' || rule34.rule === 'Декан'">
      <li class="nav-item">
        <sidenav-collapse
            url="#"
            :aria-controls="''"
            v-bind:collapse="false"
            collapseRef="/profile"
            navText="Карточки студентов"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">person</i>
          </template>
        </sidenav-collapse>
      </li>
      </template>
      <template v-if="rule34.rule === 'Admin' || rule34.rule === 'Декан'">
        <li class="nav-item">
          <sidenav-collapse
              url="#"
              :aria-controls="''"
              v-bind:collapse="false"
              collapseRef="/kommis"
              navText="Стип. коммисия"
          >
            <template v-slot:icon>
              <i class="material-icons-round opacity-10 fs-5">receipt_long</i>
            </template>
          </sidenav-collapse>
        </li>
      </template>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder text-white"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Авторизация
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="/sign-in"
          navText="Войти"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">login</i>
          </template>
        </sidenav-collapse>
      </li>
<!--      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="sign-up"
          navText="SignUp"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">assignment</i>
          </template>
        </sidenav-collapse>
      </li>-->
    </ul>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import {rule34} from "@/My components/CallsWithATablet";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
      rule34
    };
  },
  components: {
    SidenavCollapse
  }
};
</script>
