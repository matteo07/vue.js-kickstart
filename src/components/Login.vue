<template>
  <div class="loginCompp" >
    <p class="green" v-if=" !logged " @click="login">Login</p>
    <p v-if=" logged " @click="logout">Logout</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from './../store'

export default {
  name: 'Login',
  computed: {
    logged: () => {
      return store.state.myModule.logged}
  },
  methods: {
    ...mapActions(['login','logout']),
    onLogout() {
      this.logout()
    }
  }
}
</script>

<style scoped>
  .loginCompp {
    background-color: red
  }

  .green {
    background-color: green
    }
</style>