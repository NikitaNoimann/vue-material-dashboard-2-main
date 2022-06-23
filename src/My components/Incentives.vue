<template>
  <div>
    <b-form-input v-model="FIO" placeholder="ФИО студента"></b-form-input>

    <b-form-select v-model="selected" :options="options" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template #first>
        <b-form-select-option :value="null" disabled>Пожалуйста, выберете группу</b-form-select-option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <!--      <b-form-select-option value="C">Option C</b-form-select-option>-->
      <!--      <b-form-select-option value="D">Option D</b-form-select-option>-->
    </b-form-select>


    <b-form-input v-model="Cause" placeholder="Род деятельности"></b-form-input>
    <b-button variant="success" @click="save">Сохранить</b-button>
  </div>
</template>

<script>
import {store2} from "@/My components/IncentivesMoney";
import {BButton} from "bootstrap-vue-3";
export default {
  name: "Incentives",
  components: {BButton},
  data() {
    return {
      store2,
      FIO: '',
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
        store2.star.push({
          FIO: this.FIO,
          selected: this.selected,
          Cause: this.Cause
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