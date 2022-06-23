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
      <b-button @click="renderDoc">Download Word Document</b-button>
  </div>
</template>

<script>
import {store} from './MarerialAidStore'
import {BButton} from "bootstrap-vue-3";

import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";

// import JSZip from 'jszip';
// import JSzipUtils from 'jszip-utils';
import  saveAs  from 'file-saver';
// import docxtemplater from "docxtemplater";
import Docxtemplater from  "docxtemplater"
function loadFile(url, callback)
{
  PizZipUtils.getBinaryContent(url, callback);
}
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
        {value: 'ИС-18', text: 'ИС-18'},
        {value: 'ИС-19', text: 'ИС-19'}
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
    },

    // getDoc() {
    //   this.createAndSaveDocument();
    // },
    // loadFile(url, callback) {
    //   JSzipUtils.getBinaryContent(url, callback);
    // },
    // createAndSaveDocument() {
    //   this.loadFile('ReportTemplates/ServesMaterialAid.docx', function (error, content) {
    //     if (error) {
    //       throw error
    //     };
    //     let zip = new JSZip(content);
    //     console.log(content)
    //     let doc = new docxtemplater().loadZip(zip)
    //
    //     doc.render()
    //     doc.setData({
    //       FIO: this.FIO,
    //       Group: "fdgdg",
    //       Cause: "dfgdgf"
    //     })
    //
    //     let out = doc.getZip().generate({
    //       type:"blob",
    //       mineType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //
    //     })
    //     saveAs(out,`MyDocument.docx`);
    //   })
    //
    // }


    renderDoc() {
      let a = this.FIO
      let b = this.selected
      let c = this.Cause
      loadFile("ReportTemplates/ServesMaterialAid.docx", function (
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
        saveAs(out, "output.docx");
      });
    }
  }
}

</script>

<style scoped>

</style>