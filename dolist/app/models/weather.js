export default class Weather {
  constructor(data) {
    this.description = data.description
    this._id = data._id
    //console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.farenheit = this.getFarhn(data.main.temp)


  }

  getTemplate() {
    return `
    <div id="weather">
    <div class="weather">
    <div class="weather-template">
    <h1 class="this-city">${this.city}</h1>
    <h3 class="this-temp">${this.farenheit}</h3>
    </div>
    </div>
    </div>
    `
  }

  getFarhn(kelvin) {
    let farenheit = Math.floor((kelvin - 273)* 1.8) + 32;
    return farenheit
  }
}