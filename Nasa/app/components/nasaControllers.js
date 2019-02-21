//private
import NasaService from "./nasaServices.js";

let _nasaService = new NasaService()

function drawApiplanet () {
    let template = ''
    let planet = _nasaService.drawApiplanets
    planets.forEach(h => {
        let button = `<button class ="btn btn-primary" onclick="app.controllers.nasaController.addToPlanet('${h.id}')">ADD TO PLANET</button>`
        template += h.getCard(button)
    })
document.querySelector('.myplanet').innerHTML = template
}

//public
export default class nasaController {
    constructor() {
        _nasaService.addSubscriber('apiplanet', drawApiPlanets)
        _nasaService.addSubscriber('myPlanet', drawMyplanet)

        //Initialize Data
        _nasaService.getNasaData()
        _nasaService.getMyPlanetData()
    }
    addToPlanet(id) {
        _nasaService.addToPlanet(id)
    }
    
    }