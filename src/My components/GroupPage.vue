<template>
  <!--              eslint-disable -->
<div>
  <b-table striped hover :items="Students" :fields="['student','studybook','state','speciality','formstudy','number','address','famaly','']">
    <template #cell()="data">
      <b-button @click="goToPage(data.item._id)">{{ data._id }}Редактировать</b-button>
    </template>
  </b-table>
</div>
</template>

<script>
import axios from "axios";
import {BButton} from "bootstrap-vue-3";


export default {
  name: "GroupPage",
  components: {BButton},
  data() {
    return {
      Students:[]
    }
  },


  methods: {
    goToPage(Students){
      console.log(Students)
      this.$router.push("/Student/" + Students)
    },

    async findByStudy(group) {
      /*console.log(this.Group.find((e) => e.Name== group ).Name)*/
      this.Students= (await axios.get("http://26.141.216.128:3000/findByStudy/" + group)).data

    },
  },
  mounted() {
    this.findByStudy(this.$route.params.groupPage)
  }
}


</script>

<style scoped>

</style>