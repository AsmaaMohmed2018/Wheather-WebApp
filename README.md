# Weather Web Application

## Used Framework
```
**vue/cli 4.1.2**
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
- open browser on local host on port 8080 (http://localhost:8080/)  
- cd project folder
- type ```npm run serve ``` in project terminal


### Compiles and minifies for production
```
npm run build
```

## Project structure

```
- App.vue file

- components Folder :
    
    1-Home component
    2-Wheather Forecast Component

- Routes.js file
```
## App.vue File
 
 using Side Nav Bar links to route between Home page(Home component) 
 & Weather page (WeatherForecast Components) as Following:

 ```javascript <div id="app" class="h-100">
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
  ```
  ---
  ## Home.vue File (/components/Home.vue)

  Header Containing Vue Logo & Greetings Page on root Rout (http://localhost:8080/) as Following:

  ```javascript <div class="header mh-100 text-center">
    <div class="d-flex text-center justify-content-center ">
      <img src="../assets/logo.png" />
    </div>
    <div class="d-flex text-center justify-content-center">
      <h2>Hello I am Asmaa</h2>
    </div>
</div>
```
---
## WeatherForecast.vue File (component)

- using https://ipinfo.io/${this.ip}/json?token=1682e6cc695f57 Api to get the Current user IP as follows :

```javascript

    watch:{
      ip:function(){
        axios.get(`https://ipinfo.io/${this.ip}/json?token=1682e6cc695f57`).then((response)=>
        this.country = response.data.city)
      }
    }
```

- using the https://api.ipify.org/?format=json Api to get the current country by the current tracked id get before as follows :

```javascript

   created () {
    axios.get("https://api.ipify.org/?format=json")
    .then(response => this.ip = response.data.ip) 
   }
  ```
- using open weather Api to get the weather according to the current Country get before with **country** & **Metric units** (cellisious temp) query string parameter as follows :

```javascript

  methods:{
    
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
  ```
- Render all weather details when click button Find as follows :
```javascript
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
  ```