<template>
  <div id="app">
    <Loader/>
    <p v-if="getRouteParams"> url param: {{ getRouteParams }}
    
    <div id="content">
      <img alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Caerte_van_Oostlant_4MB.jpg">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/input/23e">Input</router-link>
        <router-link to="/log/314hf">Log</router-link>
      </nav>
      <router-view v-on:inputChange="onInputChanges"></router-view>
      
      <MyOutput :msg="item" :input="msg" v-for="item in items" :urlParam="getRouteParams"/>

      <h3 @click="changeUrlParam">Change url param</h3> 
      <p v-if="$route.query.asd">query params: {{ $route.query.asd }}</p>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Loader from './components/Loader.vue'
import MyInput from './components/MyInput.vue'
import MyOutput from './components/MyOutput.vue'
import store from './store'

export default {
  name: 'app',
  components: {
    Loader,
    MyInput,
    MyOutput,
    Login
  },
  data() {
    return {
      msg: 'Eskere',
      list: [0,1,2],
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'Foo' },
        null
      ]
    }
  },
  computed: {
    getRouteParams() {
      return this.$route.params.id 
    }
  },
  methods: {
    onInputChanges(msgReceived) {
      this.msg = msgReceived;
    },
    changeUrlParam() {
      //this.$router.push({ params: { id: 123 }}) to add in History
      this.$router.replace({ params: { id: 123 }, query: { asd: "dsa" }})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 250px;
}

nav a {
  padding: 20px;
  background-color: light-grey;
}

nav {
  padding-bottom: 32px;
}

h3 {
  cursor: pointer;
}
</style>
