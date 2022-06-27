<template>
  <div>
    <div for="text" v-for="guest in guests" v-bind:key="guest" class="fles">

      <b-form-select :options="stud"></b-form-select>
      <b-form-input class="ImputsBil" placeholder="Род деятельности"></b-form-input>
    </div>

    <button class="btn btn-primary" @click="addInput">+</button>
    <b-button variant="success" @click="renderDoc">Сохранить Отчет</b-button>
  </div>
</template>

<script>
import {store2} from "@/My components/IncentivesMoney";
import {BButton} from "bootstrap-vue-3";
import axios from "axios";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import  saveAs  from 'file-saver';
import PizZipUtils from "pizzip/utils";
function loadFile(url, callback)
{
  PizZipUtils.getBinaryContent(url, callback);
}
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
      ],
      guests: [],
      stud:[]
    }
  },
  methods: {
    addInput(){
      this.guests.push({})
    },
    async test2(){
      let res = await axios.get("http://26.141.216.128:3000/studmapget")
      this.stud = res.data.map(e=>e.student+" "+e.groupe)
    },
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
    },
    renderDoc() {
      let a = this.FIO
      let b = this.selected
      let c = this.Cause
      loadFile("ReportTemplates/Pooshren.docx", function (
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
        saveAs(out, "Pooshren.docx");
      });
    }
  },
  mounted() {
    this.test2()
  }
}
</script>

<style scoped>
.ImputsBil{
  border: solid 1px #d2d6da;
}
.ImputsBil:hover{
  border: solid 1px #d2d6da;
}
</style>