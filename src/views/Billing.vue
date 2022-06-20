<template>
  <div className="nav-wrapper position-relative end-0">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Материальная помощь" active>
            <MaterialAid></MaterialAid>
            <b-card-text></b-card-text>
            <b-table striped hover :items="store.stady"></b-table>
          </b-tab>
          <b-tab title="Поощрения">
            <Incentives></Incentives>
            <b-card-text></b-card-text>
            <b-table striped hover :items="store2.star"></b-table>
          </b-tab>
          <b-tab title="Отчет куратора">
            <b-card-text>Где-то записано</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import MaterialAid from "@/My components/MaterialAid";
import {store} from "@/My components/MarerialAidStore";
import Incentives from "@/My components/Incentives";
import {store2} from "@/My components/IncentivesMoney";

export default {
  name: "nav-pill",
  components: {MaterialAid, Incentives},
  mounted() {
    setNavPills();
  },
  data() {
    return {
      store,
      store2
    }
  }
};
</script>
