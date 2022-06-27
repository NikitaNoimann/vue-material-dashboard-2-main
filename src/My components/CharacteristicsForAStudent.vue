<template>
  <div>
    <b-form-select :options="stud"></b-form-select>

    <input
        class="e"
        type="date"
        :value="date"
        @input="event => date = event.target.value">Дата рождения
    <b-form-select v-model="selected2" :options="options2" class="ImputsBil">
      <template #first>
        <b-form-select-option class="ImputsBil" :value="null" disabled>Пожалуйста, выберете форму обучения</b-form-select-option>
      </template>
    </b-form-select>
    <input
        class="e"
        type="date"
        :value="datee"
        @input="event => datee = event.target.value">Дата поступления
    <b-form-input class="ImputsBil" v-model="PerfomanceAndAttendance" placeholder="Успеваемость и посещаемость"></b-form-input>
    <b-form-input class="ImputsBil" v-model="Hobbies" placeholder="Увлечения"></b-form-input>
    <b-form-input class="ImputsBil" v-model="PublicLife" placeholder="Участие в общественной жизни"></b-form-input>
    <b-form-input class="ImputsBil" v-model="Psychological" placeholder="Психологическая характеристика"></b-form-input>
    <b-form-input class="ImputsBil" v-model="BadHabits" placeholder="Вредные привычки"></b-form-input>
    <b-form-select v-model="selected" :options="options" class="ImputsBil">
      <template #first>
        <b-form-select-option class="ImputsBil" :value="null" disabled>Пожалуйста, выберете группу</b-form-select-option>
      </template>
    </b-form-select>
    <b-form-input class="ImputsBil" v-model="Cause" placeholder="Комментарии"></b-form-input>
    <b-button variant="success" @click="save">Сохранить Отчет</b-button>
  </div>
</template>

<script>
import {store4} from './CharacteristicsForASrudentStore'
import {BButton} from "bootstrap-vue-3";
import saveAs from 'file-saver';
// import docxtemplater from "docxtemplater";
import Docxtemplater from "docxtemplater"
import PizZipUtils from "pizzip/utils";
import PizZip from "pizzip";
import axios from "axios";
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
      selected2: null,
      selected: null,
      options: [
        { value: 'ИС-18', text: 'ИС-18' },
        { value: 'ИС-19', text: 'ИС-19' }
      ],
      options2:[
        { value: 'Очная', text: 'Очная' },
        { value: 'Заочная', text: 'Заочная' }
      ],
      stud:[]
    }
  },
  methods: {
    test(){
      function loadFile(url, callback) {
        PizZipUtils.getBinaryContent(url, callback);
      }
      loadFile("ReportTemplates/Xaracter.docx", function (
          error,
          content
      ){
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {paragraphLoop: true, linebreaks: true});
        doc.render();
        const out = doc.getZip().generate({
          type: "blob",
          mimeType:
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        // Output the document using Data-URI
        saveAs(out, "output.docx");
      });
    },
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
      this.test()
    },
    async test2(){
      let res = await axios.get("http://26.141.216.128:3000/studmapget")
      this.stud = res.data.map(e=>e.student+" "+e.groupe)
    },
  },
  mounted() {
    this.test2()
  }
}
</script>

<style scoped>
.ImputsBil{
  border: solid 1px #d2d6da;
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #adb5bd;
}
.ImputsBil:hover{
  border: solid 1px #d2d6da;
}
</style>