<template>
  <div className="nav-wrapper position-relative end-0">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Характеристика студента" active>
            <b-card-text>Спросить насчет вида характеристики</b-card-text>
          </b-tab>
          <b-tab title="Звонки родителям">
            <CallsFamily></CallsFamily>
            <b-card-text></b-card-text>
            <b-table striped hover :items="store3.stady3"></b-table>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import CallsFamily from "@/My components/CallsFamily";
import {store3} from "@/My components/CallsWithATablet";

export default {
  name: "nav-pill",
  components: {CallsFamily},
  mounted() {
    setNavPills();
  },
  data() {
    return {
      store3,
    }
  }
};
</script>
