<template>
  <br>
  <div for="text" v-for="guest in guests" v-bind:key="guest" class="fles">

    <b-form-select :options="stud"></b-form-select>
    <b-form-select  :options="options2" class="ImputsBil">
      <template #first>
        <b-form-select-option class="ImputsBil" :value="null" disabled>Пожалуйста, выберете форму дисциплинарного взыскания</b-form-select-option>
      </template>
    </b-form-select>
  </div>
  <button class="btn btn-primary" @click="addInput">+</button>
  <b-button variant="success" @click="renderDoc" >Сохранить</b-button>
</template>

<script>



import axios from "axios";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import  saveAs  from 'file-saver';
import PizZipUtils from "pizzip/utils";
import { BFormSelect} from "bootstrap-vue-3";
function loadFile(url, callback)
{
  PizZipUtils.getBinaryContent(url, callback);
}
export default {
  name: "PrikazVospit",
  components: {BFormSelect},
  data() {
    return {
      selected2: null,
      guests: [],
      stud:[],
      options2: [
        { value: 'Выговор', text: 'Выговор' },
        { value: 'Замечание', text: 'Замечание' }
      ]
    }
  },

  methods: {
    addInput() {
      this.guests.push({})
    },
    async test() {
      let res = await axios.get("http://26.141.216.128:3000/studmapget")
      this.stud = res.data.map(e => e.student + " " + e.groupe)
    },
    renderDoc() {
      let a = this.FIO
      let b = this.selected
      let c = this.Cause
      loadFile("ReportTemplates/pricazVospit.docx", function (
          error,
          content
      ) {
        if (error) {
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {paragraphLoop: true, linebreaks: true});

        doc.setData({
          FIO: a,
          Group: b,
          Cause: c
        });
        doc.render();
        const out = doc.getZip().generate({
          type: "blob",
          mimeType:
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        // Output the document using Data-URI
        saveAs(out, "Приказ по воспитательной работе.docx");
      });
    },
  },
  mounted() {
    this.test()
  }
}
</script>

<style scoped>
.fles{
  display: flex;
}
.row{
  margin: 5px;
  border-radius: 5px;
  /*border: none;*/
  /*border-bottom: solid 2px #000000;*/
}
</style>