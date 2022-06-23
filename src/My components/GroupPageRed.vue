<template>
  <div>Здеся Импутов добавить с автозаполнением !!! И прикрутить роутер красивый на прослойке!!!</div>
  <div>
    <b-alert :show="isUpdate"  dismissed="showDismissibleAlert=false">Данные обновлены</b-alert>
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
    <b-form-input v-model="formstudy" placeholder="Форма обучения"></b-form-input>
    <b-form-input v-model="number" placeholder="Телефон"></b-form-input>
    <b-form-input v-model="address" placeholder="адрес"></b-form-input>
    <b-form-input v-model="famaly" placeholder="Фамали"></b-form-input>
    <button @click="test(id)">Сохранить изменения</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GroupPageRed",
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

    async test(id) {
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
    }
  },
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
  mounted() {
    this.findByStudy(this.$route.params.GroupPageRed)
  }
}


</script>


<style scoped>

</style>