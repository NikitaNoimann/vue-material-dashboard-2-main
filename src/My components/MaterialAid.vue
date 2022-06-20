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


      <b-form-input v-model="Cause" placeholder="Причина"></b-form-input>
      <b-button @click="save">Сохранить</b-button>
  </div>
</template>

<script>
import {store} from './MarerialAidStore'
import {BButton} from "bootstrap-vue-3";
export default {
  name: "MaterialAid",
  components: {BButton},
  data() {
    return {
        store,
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
        store.stady.push({
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