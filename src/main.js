import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import routes from './routes';
import WeatherForecast from "./components/WeatherForecast";


Vue.config.productionTip = false
Vue.use(vueRouter)
const router = new vueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
