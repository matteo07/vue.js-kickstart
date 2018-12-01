<template>
  <div class="loginCompp" >
    <p v-if=" !logged " @click="login">Login</p>
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