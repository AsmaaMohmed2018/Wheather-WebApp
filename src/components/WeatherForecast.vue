<template >
<!-- Weather Form acc to tracked country due to ip or entered input field country -->
  <div class="app py-5">
    <h1 class="text-center heading">Just type the city name</h1>
    <p class="text-center note">you must spelling correctly</p>
    <form class="form-inline active-purple justify-content-center">
      <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="enter country"
        v-model="country">
      <button class="btn btn-sm btn-primary" type="button" v-on:click="findWeather">Find</button>
    </form>
    <!-- weather results div when click button -->
      <div v-if="results" class="city justify-content-center text-center py-2">
        <h4>{{ results.name }}, {{ results.sys.country }}</h4>
        <img v-bind:src="imgUrl">
        <h5>{{ results.weather[0].main }}</h5>
        <h3>{{ results.main.temp }}°c</h3>
        <ul>
          <li>{{ results.main.temp_max }}°c</li>
          <li>{{ results.main.temp_min }}°c</li>
        </ul>
        <h5>{{ results.weather[0].description }}</h5>
      </div> 
  </div> 
</template>

<script>
import axios from 'axios';  
export default {
  name: 'WeatherForecast',
  data () {
    return{
      country:'',
      results:'',
      imgIcon:'',
      imgUrl:'',
      ip:''
    }
    },
    // call api to get country according to tracked ip
    watch:{
      ip:function(){
        axios.get(`https://ipinfo.io/${this.ip}/json?token=1682e6cc695f57`).then((response)=>
        this.country = response.data.city)
      }
    },
    //get ip of my location by calling an api
  created () {
    axios.get("https://api.ipify.org/?format=json")
    .then(response => this.ip = response.data.ip) 
  },
  methods:{
    //get weather deatails of tracked country by calling openweather api & metric paramter to get in cellicious 
    findWeather:function(){
      console.log('ok');
      let url =  `http://api.openweathermap.org/data/2.5/weather?q=${this.country}&units=metric&APPID=4387055141a01ecfc7ba33a4391f3bd4`;
      axios.get(url)
      .then((response) =>this.results=response.data ).then((results)=>{
        this.imgIcon=results.weather[0].icon;
        this.imgUrl=`http://openweathermap.org/img/wn/${this.imgIcon}@2x.png`;
        console.log(this.ip);
      })      
    }
  }
}
</script>

<style scoped>
html,body{
  height: 100%;
}
.app{
  background-color: #00263b;
    height: 100%;
}
.heading{color:white}
.note{color:gray}
.button{width:30px;}
.btn {
    width:50px;
}
.active-purple input[type=text] {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-purple input[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-purple .fa, .active-purple-2 .fa {
  color: #ce93d8;
}
.city {
    color: white;
    align-content: center;
}
h4 {
  font-size: 30px;
  margin: 10px 0;
  color: white;
}
h3 {
  font-size: 36px;
  margin: 10px 0;
}
h5 {
  font-size: 24px;
  margin: 10px 0;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  margin: 10px;
  font-size: 20px;
}
</style>
