<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
                class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">ИС-18</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <div className="nav-wrapper position-relative end-0">
                <div>
                  <b-button @click="getPosehaimost">ДАЙ ДАННЫЕ!!</b-button>
                  <b-table striped hover :items="Test" :fields="['Студент', 'Предмет','ПропущеноБезУв','ПропущеноПоУв','Пропущено','Отметка']"></b-table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {BButton} from "bootstrap-vue-3";
import axios from "axios";
export default {
  name: "Weekly",
  components: {BButton},
  data() {
    return {
      Test: []
    }

  },
  methods: {
    async getPosehaimost() {
      const Urlses = 'http://26.141.216.128:3000/posesh'

     this.Test = await (await axios.get(Urlses, {
       headers: {
         "Access-Control-Allow-Origin": "*"
       }

     })).data.value

    }
  }
}
</script>

<style scoped>

</style>