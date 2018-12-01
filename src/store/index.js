import VueX from 'vuex'
import Vue from 'vue'
import myModule from './modules/myModule'

Vue.use(VueX);

export default new VueX.Store({
    modules: {
        myModule
    }
})