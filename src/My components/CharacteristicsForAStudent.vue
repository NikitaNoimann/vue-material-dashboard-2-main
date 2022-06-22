<template>
  <div>
    <b-form-input v-model="FIO" placeholder="ФИО студента"></b-form-input>
    <input
        type="date"
        :value="date"
        @input="event => date = event.target.value">
    <b-form-input v-model="FormOfEducation" placeholder="Форма обучения"></b-form-input>
    <input
        type="date"
        :value="datee"
        @input="event => datee = event.target.value">
    <b-form-input v-model="PerfomanceAndAttendance" placeholder="Успеваемость и посещаемость"></b-form-input>
    <b-form-input v-model="Hobbies" placeholder="Увлечения"></b-form-input>
    <b-form-input v-model="PublicLife" placeholder="Участие в общественной жизни"></b-form-input>
    <b-form-input v-model="Psychological" placeholder="Психологическая характеристика"></b-form-input>
    <b-form-input v-model="BadHabits" placeholder="Вредные привычки"></b-form-input>
    <b-form-select v-model="selected" :options="options" class="mb-3">
      <template #first>
        <b-form-select-option :value="null" disabled>Пожалуйста, выберете группу</b-form-select-option>
      </template>
    </b-form-select>
    <b-form-input v-model="Cause" placeholder="Комментарии"></b-form-input>
    <b-button @click="save">Сохранить</b-button>
  </div>
</template>

<script>
import {store4} from './CharacteristicsForASrudentStore'
import {BButton} from "bootstrap-vue-3";
export default {
  name: "CharacteristicsForAStudent",
  components: {BButton},
  data() {
    return {
      store4,
      FIO: '',
      FormOfEducation:'',
      PerfomanceAndAttendance:'',
      Hobbies:'',
      PublicLife:'',
      Psychological:'',
      BadHabits:'',
      date: new Date(),
      datee: new Date(),

      Group: '',
      Cause: '',
      selected: null,
      options: [
        { value: 'ИС-18', text: 'ИС-18' },
        { value: 'ИС-19', text: 'ИС-19' }
      ]
    }
  },
  methods: {
    save() {
      if (this.FIO && this.Cause) {
        store4.stady4.push({
          FIO: this.FIO,
          selected: this.selected,
          Cause: this.Cause,
          FormOfEducation: this.FormOfEducation,
          PerfomanceAndAttendance: this.PerfomanceAndAttendance,
          Hobbies: this.Hobbies,
          PublicLife: this.PublicLife,
          Psychological: this.Psychological,
          BadHabits: this.BadHabits,
          date: this.date,
          datee: this.datee
        })
        this.FIO = ''
        this.Cause = ''
        this.FormOfEducation = ''
        this.PerfomanceAndAttendance = ''
        this.Hobbies = ''
        this.PublicLife = ''
        this.BadHabits = ''
      }
    }
  }
}
</script>

<style scoped>

</style>