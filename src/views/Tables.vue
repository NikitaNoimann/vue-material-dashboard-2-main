<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
                class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Еженедельный отчет о посещаемости</h6>
            </div>
          </div>
          <div>
            <input type="number" placeholder="номер недели"/>
            <button @click="save">сохранить</button>
          </div>
          <div>
            <table
                class="table align-items-center justify-content-center mb-0"
            >
              <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ФИО</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Пн</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Вт</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ср</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Чт</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Пт</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Суб</th>
              </tr>
              </thead>
              <tbody v-for="s in students" :key="s">
              <tr>
                <td>{{ s.student }}</td>
                <td><input @input="event =>test(event,s)" type="number" placeholder="ув"/>
                  <b-form-input type="number" placeholder="не ув"/>
                </td>
                <td>
                  <b-form-input type="number" placeholder=""/>
                  <b-form-input type="number" placeholder="не ув"/>
                </td>
                <td>
                  <b-form-input type="number" placeholder=""/>
                  <b-form-input type="number" placeholder="не ув"/>
                </td>
                <td>
                  <b-form-input type="number" placeholder=""/>
                  <b-form-input type="number" placeholder="не ув"/>
                </td>
                <td>
                  <b-form-input type="number" placeholder=""/>
                  <b-form-input type="number" placeholder="не ув"/>
                </td>
                <td>
                  <b-form-input type="number" placeholder=""/>
                  <b-form-input type="number" placeholder="не ув"/>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
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
    </div>
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
      answer: []
    }
  },
  methods: {
    findStudy(group) {
      axios.get("http://26.141.216.128:3000/findByStudy/" + group).then((e) => {
        this.students = e.data
      })
    },
    save() {
      let a = {
        group: rule34.group,
        numberWeek: this.numberWeek,
        students: this.answer
      }
      a
      console.log(this.answer)
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
