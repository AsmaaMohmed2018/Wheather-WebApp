<template>
<!-- Navbar -->
  <div id="app" class="h-100">
    <ul class="nav flex-column float-right ">
      <li class="nav-item py-4 my-2 rotate">
        <!-- Home Route -->
      <router-link class="nav-link h-100" to="/">Home</router-link>
      </li>
      <li class="nav-item py-4 rotate">
        <!-- weather Route -->
      <router-link class="nav-link h-100" to="/weather">Weather</router-link>
      </li>
    </ul>
    <router-view />    
  </div>
</template>

<script>
import Home from './components/Home';
import VueRouter from 'vue-router';
import WeatherForecast from './components/WeatherForecast';

export default {
  name: "App",
  data() {
    return {
      page:'Home'
    };
  },
  components: {
    Home,
    WeatherForecast    
  }  
}
</script>


<style >

/* to make the component full height */
html,body{
  height:100%;
}
.rotate{
transform: rotate(-90deg);
}
#app{
  background-color: #222831;
  height: 100%;
}

</style>