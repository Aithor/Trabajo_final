import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
//import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";



Vue.use(VueGtag, {

    config: { id: "SABANA" }

});


Vue.config.productionTip = false


new Vue({

    router,

    render: h => h(App)

}).$mount('#app')