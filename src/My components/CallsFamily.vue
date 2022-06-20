<template>
  <div>
    <b-form-input v-model="FIO" placeholder="ФИО студента"></b-form-input>

    <b-form-select v-model="selected" :options="options" class="mb-3">
      <template #first>
        <b-form-select-option :value="null" disabled>Пожалуйста, выберете группу</b-form-select-option>
      </template>
    </b-form-select>


    <b-form-input v-model="Cause" placeholder="Причина"></b-form-input>
    <b-form-select v-model="secel" :options="options1" class="mb-3">
      <template #first>
        <b-form-select-option :value="null" disabled>Пожалуйста, выберете</b-form-select-option>
      </template>
    </b-form-select>
    <b-button @click="save">Сохранить</b-button>
  </div>
</template>

<script>
import {store3} from "@/My components/CallsWithATablet";
import {BButton} from "bootstrap-vue-3";
export default {
  name: "MaterialAid",
  components: {BButton},
  data() {
    return {
      store3,
      FIO: '',
      Group: '',
      Cause: '',
      selected: null,
      options: [
        { value: 'ИС-18', text: 'ИС-18' },
        { value: 'ИС-19', text: 'ИС-19' }
      ],
      secel:null,
      options1: [
        { value: 'Был звонок', text: 'Был звонок' },
        { value: 'В процессе', text: 'В процессе' }
      ]
    }
  },
  methods: {
    save() {
      if (this.FIO && this.Cause) {
        store3.stady3.push({
          FIO: this.FIO,
          selected: this.selected,
          Cause: this.Cause,
          secel: this.secel
        })
        this.FIO = ''
        this.Cause = ''
      }
    }
  }
}
</script>

<style scoped>

</style>