import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let template = ''
	let weather = _weatherService.Weather
	weather.forEach(w =>{
		template += w.getTemplate()
	})
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
