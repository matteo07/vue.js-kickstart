<template>
  <div id="app">
    <Loader/>
    
    <div id="content">
      <img alt="Vue logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Caerte_van_Oostlant_4MB.jpg">
      <Login/>
      
      <MyInput v-on:inputChange="onInputChanges"/>
      <MyOutput v-bind:msg="item" v-bind:input="msg" v-for="item in items" />

      <h3>{{ "Yo "  + msg}}</h3> 
    </div>
  </div>
</template>

<script>
import Loader from './components/Loader.vue'
import MyInput from './components/MyInput.vue'
import MyOutput from './components/MyOutput.vue'
import Login from './components/Login.vue'

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
  methods: {
    onInputChanges(msgReceived) {
      this.msg = msgReceived;
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
</style>
