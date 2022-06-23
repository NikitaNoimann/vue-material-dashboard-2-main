<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
                class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">ИС-18</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <div className="nav-wrapper position-relative end-0">
                <div>
                  <b-table striped hover :items="Test" :fields="['fio','PropB','PropS', 'prop','pred','note']"></b-table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


/*import {BButton} from "bootstrap-vue-3";*/
import axios from "axios";
export default {

  name: "Weekly",
  /*components: {BButton},*/
  data() {
    return {
      Test: []
    }
  },
  methods: {

    async getPosehaimost() {
      try {

      const Test2 = await axios.get('http://26.141.216.128:3000/poseshget',)
      this.Test = Test2.data

    } catch (e) {
        console.log("ОШИБКА")
      }
      console.log(this.Test)
    }
    /*async findByStudy(group) {
      let allStudents = await axios.get("http://26.141.216.128:3000/findByStudy/" + group)
      /!*console.log(this.Group.find((e) => e.Name== group ).Name)*!/
      let we = this.Group.map((e) => {
        if (e.Name === group) {
          console.log(e)
          e.student = allStudents.data
          return (e)
        } else
          return (e)
      })
      let cloneA = [...we]
      console.log(cloneA)
      /!*      console.log(this.Group)*!/
      this.Group = we

    },*/
  },
  mounted() {
    this.getPosehaimost();
  },
}
</script>

<style scoped>

</style>