import Home from'./components/Home';
import WeatherForecast from './components/WeatherForecast';
const routes = [
    { path: '/', component: Home },
    { path: '/weather', component: WeatherForecast }    
];
export default routes;