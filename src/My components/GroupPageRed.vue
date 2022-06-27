<template>
  <div>Здеся Импутов добавить с автозаполнением !!! И прикрутить роутер красивый на прослойке!!!</div>
  <div>
    <b-alert variant="success" :show="isUpdate"  dismissed="showDismissibleAlert=false">Данные обновлены</b-alert>
    <input
        type="text"
        :value="groupe"
        @input="event => groupe = event.target.value">
    <input
        type="text"
        :value="student"
        @input="event => student = event.target.value">
    <input
        type="text"
        :value="studybook"
        @input="event => studybook = event.target.value">
    <input
        type="text"
        :value="state"
        @input="event => state = event.target.value">
    <input
        type="text"
        :value="speciality"
        @input="event => speciality = event.target.value">
    <b-form-input v-model="formstudy" placeholder="Форма обучения"></b-form-input>
    <b-form-input v-model="number" placeholder="Телефон"></b-form-input>
    <b-form-input v-model="address" placeholder="адрес"></b-form-input>
    <b-form-input v-model="famaly" placeholder="Фамали"></b-form-input>
    <b-tabs content-class="mt-3">
      <b-tab title="Родители" active>
        <div style="padding: 10px">
          <b-form-input placeholder="ФИО" v-model="FioFamily"></b-form-input>
          <b-form-input placeholder="Является" v-model="StatusFamily"></b-form-input>
          <b-form-input placeholder="Телефон" v-model="PhoneFamily"></b-form-input>
          <b-form-input placeholder="Работа" v-model="WorkFamily"></b-form-input>
          <b-form-input placeholder="Адрес" v-model="AddressFamily"></b-form-input>
        </div>
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
        <b-table striped hover :items="Call">
        </b-table>
      </b-tab>

      <b-tab title="Увлечения">
        <div style="padding: 10px">
          <b-form-input placeholder="Увлечение" v-model="Magnifications"></b-form-input>
        </div>
        <b-table striped hover :items="MagnificationsStudent">

        </b-table>
      </b-tab>

      <b-tab title="Мероприятия">
        <div style="padding: 10px">
          <input
              type="date"
              :value="datee"
              @input="event => datee = event.target.value">
          <b-form-input placeholder="Вид мероприятия" v-model="TypeEvents"></b-form-input>
          <b-form-input placeholder="Наименование" v-model="NameEvents"></b-form-input>
          <b-form-input placeholder="Роль" v-model="Role"></b-form-input>
          <b-form-input placeholder="Примечание" v-model="Note"></b-form-input>
        </div>
        <b-table striped hover :items="Events">
        </b-table>
      </b-tab>

      <b-tab title="Портфолио">
        <div style="padding: 10px">
          <b-form-input placeholder="Наименование" v-model="NamePortfolio"></b-form-input>
          <b-form-input placeholder="Вид мероприятия" v-model="TypeEventsPortfolio"></b-form-input>
          <b-form-input placeholder="Вид достижеения" v-model="TypeAchivement"></b-form-input>
          <b-form-input placeholder="Уровень достижения" v-model="LevelAchivement"></b-form-input>
          <b-form-input placeholder="Документ" v-model="Document"></b-form-input>
        </div>
        <b-table striped hover :items="Portfolio">
        </b-table>
      </b-tab>

    </b-tabs>

    <b-button @click="test(id)">Сохранить изменения</b-button>

</div>
</template>



<script>
import axios from "axios";
import {BButton, BFormInput, BAlert} from "bootstrap-vue-3";
export default {
  name: "GroupPageRed",
  components: { BFormInput, BButton, BAlert},
  data() {
    return {
      isUpdate:false,
      id: "",
      groupe: "",
      student: "",
      studybook: "",
      state: "",
      speciality: "",
      formstudy: "",
      number: "",
      address: "",
      famaly: ""
    };

  },
  methods: {
    async findByStudy(group) {
      /*console.log(this.Group.find((e) => e.Name== group ).Name)*/
      let Students = (await axios.get("http://26.141.216.128:3000/findById/" + group)).data
      console.log("===============")
      console.log(Students)
      this.id = Students._id
      this.groupe = Students.groupe
      this.student = Students.student
      this.studybook = Students.studybook
      this.state = Students.state
      this.speciality = Students.speciality
      this.formstudy = Students.formstudy
      this.number = Students.number
      this.address = Students.address
      this.famaly = Students.famaly
    },
    getFamilyStudent() {
      this.Family.push({
        FioFamily: this.FioFamily,
        StatusFamily: this.StatusFamily,
        PhoneFamily: this.PhoneFamily,
        WorkFamily: this.WorkFamily,
        AddressFamily: this.AddressFamily
      })
    },
    getCallFamilyStudent() {
      this.Call.push({
        Ddate: this.date,
        Base: this.Base,
        Calls: this.Calls
      })
    },
    getMagnificationsStudent() {
      this.MagnificationsStudent.push({
        Magnifications: this.Magnifications
      })
    },
    getEventsStudent() {
      this.Events.push({
        TypeEvents: this.TypeEvents,
        NameEvents: this.NameEvents,
        Role: this.Role,
        Note: this.Note,
        DDdate: this.datee
      })
    },
    getPortfolioStudent() {
      this.Portfolio.push({
        NamePortfolio: this.NamePortfolio,
        TypeEventsPortfolio: this.TypeEventsPortfolio,
        TypeAchivement: this.TypeAchivement,
        LevelAchivement: this.LevelAchivement,
        Document: this.Document
      })
    },
    async test(id) {
      console.log(this.studybook)
      axios.post("http://26.141.216.128:3000/upfindByStudy/"+id, {
        _id: this._id,
        groupe: this.groupe,
        student: this.student,
        studybook: this.studybook,
        state: this.state,
        speciality: this.speciality,
        formstudy: this.formstudy,
        number: this.number,
        address: this.address,
        famaly: this.famaly
      }).then((e)=>{
        console.log(e)
        this.id = e.data._id
        this.groupe = e.data.groupe
        this.student = e.data.student
        this.studybook = e.data.studybook
        this.state = e.data.state
        this.speciality = e.data.speciality
        this.formstudy = e.data.formstudy
        this.number = e.data.number
        this.address = e.data.address
        this.famaly = e.data.famaly
        this.isUpdate=true
      })
    },
  },

  mounted() {
    this.findByStudy(this.$route.params.GroupPageRed)
  }
}


</script>


<style scoped>
input{
  margin: 5px;
  padding:10px;
  background-color: rgba(57, 68, 46, 0.12);
  border-radius:5px;
  border-color: rgba(0, 0, 0, 0.42);
}
</style>