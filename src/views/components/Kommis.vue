<template>
<!--  <div for="text" v-for="guest in guests" v-bind:key="guest" class="fles">
    <b-form-select :options="stud"></b-form-select>
    <input placeholder="причина" @input="event => elastic(event.target.value)"/>
  </div>
  <button class="btn btn-primary" @click="addInput">+</button>
  <a href="http://localhost:3001/">"http://localhost:3001/"</a>-->
  <b-button class="lol" variant="success" onclick="document.location='http://localhost:3001/'">Запуск модуля</b-button>
</template>

<script>
import axios from "axios";

export default {
  name: "Kommis",
  data() {
    return {
      guests: [],
      stud:[],
      chip:[]
    }
  },

  methods: {
    addInput(){
      this.guests.push({})
    },
    async test(){
      let res = await axios.get("http://26.141.216.128:3000/studmapget")
      this.stud = res.data.map(e=>e.student+" "+e.groupe)
    },
    async elastic(text){
      axios.post("http://localhost:3001/prichin/_search",{
        _source: ["key"],
        size: 10,
        query: {
          simple_query_string: {
            query: text,
            flags: "FUZZY|WHITESPACE"
          }
        }
      },{
        headers:{
          'Access-Control-Allow-Origin':"*",
          "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Methods": "GET, POST, PUT",

        }
      }).then(v=>{
        let res = [...new Set(v.data.hits.hits.map(e=>(
            e._source.key
        )))]
        this.chip =res
      })
    }
  },
  mounted() {
    this.test()
  }
}
</script>

<style scoped>
.lol{
  margin-left: 30px;
}
</style>