<template>
  <div className="nav-wrapper position-relative end-0">
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Материальная помощь" active v-if="rule34.rule === 'Admin' || rule34.rule === 'Куратор'">
            <MaterialAid></MaterialAid>
            <b-card-text></b-card-text>
            <b-table striped hover :items="store.stady"></b-table>
          </b-tab>
          <b-tab title="Поощрения">
            <Incentives></Incentives>
            <b-card-text></b-card-text>
            <b-table striped hover :items="store2.star"></b-table>
          </b-tab>
          <b-tab title="Характеристика на студента">
            <CharacteristicsForAStudent></CharacteristicsForAStudent>
            <b-card-text></b-card-text>
            <b-table striped hover :items="store4.stady4"></b-table>
          </b-tab>
          <b-tab title="Отчет куратора" v-if="rule34.rule === 'Admin' || rule34.rule === 'Куратор'">
            <CuratorOtchet></CuratorOtchet>
          </b-tab>
          <b-tab title="Посещаемость" >
            <Poseshyaemost></Poseshyaemost>
          </b-tab>
          <b-tab title="Приказ о воспитательной работе" v-if="rule34.rule === 'Admin' || rule34.rule === 'Декан'">
            <PrikazVospit></PrikazVospit>
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
import {store4} from "@/My components/CharacteristicsForASrudentStore";
import CharacteristicsForAStudent from "@/My components/CharacteristicsForAStudent";
import {rule34} from "@/My components/CallsWithATablet";
import Poseshyaemost from "@/My components/Poseshyaemost";
import CuratorOtchet from "@/My components/CuratorOtchet";
import PrikazVospit from "@/My components/PrikazVospit";
export default {
  name: "nav-pill",
  components: {CharacteristicsForAStudent, MaterialAid, Incentives, Poseshyaemost , CuratorOtchet, PrikazVospit},
  mounted() {
    setNavPills();
  },
  data() {
    return {
      rule34,
      store,
      store2,
      store4
    }
  }
};
</script>

<style>
.ImputsBil{
  border: solid 1px #d2d6da;
}
</style>
