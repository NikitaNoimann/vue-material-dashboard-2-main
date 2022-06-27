<template>
  <b-alert
      variant="info"
      dismissible
      fade
      :show="showDismissibleAlert"
      @dismissed="showDismissibleAlert=false"
      class="e"
  >
    Данные сохранены
  </b-alert>
  <div class="container-fluid py-4">

    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
                class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Посещаемость</h6>
            </div>
          </div>
          <div>
            <input class="e" type="date" placeholder="номер недели" @input="(e)=>faceWeek(e.target.value)"/>
            <button class="b" @click="e=> save(e)">сохранить</button>
          </div>
          <div class="d">
            <div v-for="s in students" :key="s" style="max-width: 20rem;">
              <div class="w">
                <h5> {{ s.student }}</h5>
                <b-card class="mb-2">
                  <div v-for="p in para" :key="p">
                    <div>
                      {{ p }}
                      <b-form-select v-model="selected"
                                     :options="['Был','Не был (уважительная)','Не был (не уважительная)']"></b-form-select>
                    </div>
                  </div>
                </b-card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
<!--    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
                class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Ежемесячный отчет о посещаемости</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table
                  class="table align-items-center justify-content-center mb-0"
              >
                <thead>
                <tr>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Группа
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Месяц
                  </th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div class="d-flex px-2">
                      <div class="my-auto">
                        <h6 class="mb-0 text-sm">ИС-18</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-sm font-weight-bold mb-0">Март</p>
                  </td>
                  <td>
                    <router-link to="/Month/ИС-18">Открыть</router-link>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>

</template>

<script>
import axios from "axios";
import {rule34} from "@/My components/CallsWithATablet";

export default {
  name: "tables",
  data() {
    return {
      rule34,
      students: [],
      numberWeek: 0,
      answer: [],
      para: [],
      showDismissibleAlert: false
    }
  },
  methods: {
    findStudy(group) {
      axios.get("http://26.141.216.128:3000/findByStudy/" + group).then((e) => {
        this.students = e.data
      })
    },
    faceWeek(e) {
      console.log(e)
      if (e == '2022-04-01') {
        this.para = ["1 Архитектура информационых систем", "2 Иформационные технологии", "3 Иформационные технологии", "4 Управление данными"]
      } else if (e == '2022-04-02') {
        this.para = ["2 Управление данными", "3 Нейронные сети",]
      } else {
        this.para = []
      }
    },
    save(e) {
      e.target.value = null
      this.numberWeek = 0
      this.showDismissibleAlert = true
    },
    test(e, s) {
      let list = this.answer.filter((it) => it.student === s.student)
      if (list.size > 0) {
        list.map((value) => {
          value.mondayRespect = e.target.value
        })
      } else {
        this.answer.push([
          {
            student: s.student,
            mondayRespect: e.target.value
          }
        ])
      }
    }
  },
  mounted() {
    this.findStudy(rule34.group)
  }
};


</script>
<style>
.d {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.w {
  padding: 5px;
  flex-direction: row;
}
.e{
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  background: #7a7f99;
  color: #ffffff;
  border: none;
}
.b{
  height: 40px;
  border-radius: 5px;
  background: #7a7f99;
  color: #ffffff;
  border: none;
}
</style>