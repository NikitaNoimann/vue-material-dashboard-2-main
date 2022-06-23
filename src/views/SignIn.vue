<template>
  <navbar btnBackground="bg-gradient-success"/>
  <div
      class="page-header align-items-start min-vh-100"
      style="
      background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
    "
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Sign in
                </h4>
                <div class="row mt-3">
                </div>
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3">
                <div class="mb-3">
                  <b-form-input id="input-live" :state="nameState" placeholder="Логин" v-model="login" trim></b-form-input>
                </div>
                <div class="mb-3">
                  <b-form-input :state="passState" placeholder="Пароль" v-model="password"></b-form-input>
                </div>
                <div class="text-center">
                  <b-button v-on:click=fun2 variant="success">Войти</b-button>
                </div>
                <!--                <p class="mt-4 text-sm text-center">
                                  Don't have an account?
                                  <router-link
                                      :to="{ name: 'SignUp' }"
                                      class="text-success text-gradient font-weight-bold"
                                  >Sign up
                                  </router-link
                                  >
                                </p>-->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import {mapMutations} from "vuex";
import {BButton} from "bootstrap-vue-3";
import axios from "axios";
import {rule34} from "@/My components/CallsWithATablet";

export default {
  computed: {
    nameState() {
      return this.login.length > 2 ? true : false
    },

    passState() {
      return this.password.length > 3 ? true : false
    }
  },
  name: "sign-in",
  components: {
    BButton,
    Navbar,
  },
  data() {
    return {
      login: "",
      password: "",
      rule34,
    }
  },

  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    fun2() {
      axios.post("http://26.141.216.128:3000/auth/AuthControl", {
        login: this.login,
        password: this.password
      }).then((e) => {
        this.rule34.rule = e.data.rule
        this.rule34.group = e.data.group
        localStorage.setItem('Role',e.data.rule)
        localStorage.setItem('Group',e.data.group)
        console.log(e)
      })
      this.$router.push("/")
    }

  },
};
</script>
