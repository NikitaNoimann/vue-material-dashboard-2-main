<template>
  <div>
    <div for="text" v-for="guest in guests" v-bind:key="guest" class="fles">

      <b-form-select :options="stud"></b-form-select>
      <b-form-input  placeholder="Причина"/>
    </div>
    <button class="btn btn-primary" @click="addInput">+</button>
    <b-button variant="success" @click="renderDoc">Сохранить Отчет</b-button>
  </div>
</template>

<script>
import {store} from './MarerialAidStore'
import {BButton, BFormInput,} from "bootstrap-vue-3";

import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";

// import JSZip from 'jszip';
// import JSzipUtils from 'jszip-utils';
import saveAs from 'file-saver';
// import docxtemplater from "docxtemplater";
import Docxtemplater from "docxtemplater"
import axios from "axios";

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

export default {
  name: "MaterialAid",
  components: {BFormInput, BButton},
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
      ],
      guests: [],
      stud:[]
    }
  },
  methods: {
    async test(){
      let res = await axios.get("http://26.141.216.128:3000/studmapget")
      this.stud = res.data.map(e=>e.student+" "+e.groupe)
    },
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
      loadFile("ReportTemplates/Matpomosh.docx", function (
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
        saveAs(out, "MatPomosh.docx");
      });
    },
    addInput(){
      this.guests.push({})
    },
    async test2(){
      let res = await axios.get("http://26.141.216.128:3000/studmapget")
      this.stud = res.data.map(e=>e.student+" "+e.groupe)
    }
  },
  mounted() {
    this.test()
    this.test2()
  }
}

</script>

<style scoped>
.ImputsBil {
  border: solid 1px #d2d6da;

}
.ImputsBil:hover{
  border: solid 1px #d2d6da;
}
</style>