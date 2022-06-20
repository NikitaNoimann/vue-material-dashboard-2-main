<template>
  <div
      class="page-header min-height-300 border-radius-xl mt-4"
      style="
        background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
      "
  >
    <span class="mask bg-gradient-success opacity-6"></span>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <!--              eslint-disable -->
              <div v-for="g in Group">
                <b-button v-b-toggle="g.Name" variant="primary">{{ g.Name }}</b-button>
                <b-collapse v-bind:id="g.Name" class="mt-2">
                  <b-card>
                    <b-table striped hover :items="g.Study" :fields="fields">
                      <template #cell()="data">
                        <div>
                          <b-button cv-b-modal.modal data-bs-toggle="modal" data-bs-target="#exampleModal">Открыть
                            модальное окно
                          </b-button>
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                               aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Карточка студента {{data.item.FIO }}</h5>

                                </div>
                                <div class="modal-body">
                                  <h5>Группа:</h5>
                                  <h5>Студент:</h5>
                                  <h5>Дата рождения:</h5>
                                  <h5>Зачетная книга:</h5>
                                  <h5>Состояние:</h5>
                                  <h5>Специальность:</h5>
                                  <h5>Форма обучения:</h5>
                                  <h5>Телефон:</h5>
                                  <h5>Адрес:</h5>
                                  <h5>Семья:</h5>
                                </div>
                                <b-tabs content-class="mt-3">
                                <b-tab title="Родители" active>
                                  <div style="padding: 10px">
                                  <b-form-input placeholder="ФИО" v-model="FioFamily"></b-form-input>
                                  <b-form-input placeholder="Является" v-model="StatusFamily"></b-form-input>
                                  <b-form-input placeholder="Телефон" v-model="PhoneFamily"></b-form-input>
                                  <b-form-input placeholder="Работа" v-model="WorkFamily"></b-form-input>
                                  <b-form-input placeholder="Адрес" v-model="AddressFamily"></b-form-input>
                                  </div>
                                  <b-button @click="getFamilyStudent">+ Добавить</b-button>
                                  <b-table striped hover :items="Family">

                                  </b-table>
                                </b-tab>
                                  <b-tab title="Звонки родителям">
                                    <div style="padding: 10px">
                                      <input
                                          type="date"
                                          :value="date"
                                          @input="event => date = event.target.value">
                                      <b-form-input placeholder="Основание" v-model="Base"></b-form-input>
                                      <b-form-checkbox placeholder="Звонок" v-model="Calls">Звонок</b-form-checkbox>
                                    </div>
                                    <b-button @click="getCallFamilyStudent">+ Добавить</b-button>
                                    <b-table striped hover :items="Call">
                                    </b-table>
                                  </b-tab>

                                  <b-tab title="Увлечения">
                                    <div style="padding: 10px">
                                      <b-form-input placeholder="Увлечение" v-model="Magnifications"></b-form-input>
                                    </div>
                                    <b-button @click="getMagnificationsStudent">+ Добавить</b-button>
                                    <b-table striped hover :items="MagnificationsStudent">

                                    </b-table>
                                  </b-tab>
                                  </b-tabs>
                                <div class="modal-footer">

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </b-table>
                  </b-card>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {BButton, BFormCheckbox, BFormInput, BTab, BTable, BTabs} from "bootstrap-vue-3";


export default {
  name: "profile-overview",
  components: {BFormCheckbox, BFormInput, BTabs, BTab, BTable, BButton},
  data() {
    return {
      fields: ["FIO", ""],
      Group: [{
        Name: "ИС-18",
        Study: [{
          FIO: "Костенко"
        }]
      }, {
        Name: "ИС-19",
        Study: []
      }],
      Family: [],
      FioFamily: '',
      StatusFamily:'',
      PhoneFamily:'',
      WorkFamily:'',
      AddressFamily:'',
      date: new Date(),
      Call: [],
      Base:'',
      Calls:'',
      MagnificationsStudent: [],
      Magnifications:''
    }


  },
  methods: {
    getFamilyStudent() {
      this.Family.push({
        FioFamily: this.FioFamily,
        StatusFamily: this.StatusFamily,
        PhoneFamily: this.PhoneFamily,
        WorkFamily: this.WorkFamily,
        AddressFamily: this.AddressFamily
      })
    },
    getCallFamilyStudent(){
      this.Call.push({
        Ddate: this.date,
        Base: this.Base,
        Calls: this.Calls
      })
    },
    getMagnificationsStudent(){
      this.MagnificationsStudent.push({
        Magnifications: this.Magnifications
      })
    }
  },
};
</script>
