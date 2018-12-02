import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import MyInput from './components/MyInput.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: null },
  { path: '/input/:id', component: MyInput },
  { name: "log", path: '/log/:id', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: createEl => createEl(App),
}).$mount('#app')

