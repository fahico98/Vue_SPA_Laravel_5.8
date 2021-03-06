
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

require("./store/subscriber");

axios.defaults.baseURL = "http://homestead.test/api";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

store.dispatch("auth/attempt", localStorage.getItem("token"))
   .then(() => {
      new Vue({
         router,
         store,
         render: h => h(App)
      }).$mount('#app');
   });
