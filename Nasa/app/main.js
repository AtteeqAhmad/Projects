import nasaControllers from "./components/nasaControllers.js";


class App {
    constructor() {
        this.controllers = {
            nasaController: new nasaController(_)
        }
    }
}

window['app'] = new App()