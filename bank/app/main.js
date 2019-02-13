import VendrController from "./components/vendrController.js"

class App {
   constructor() {
      this.controllers = {
         vendrController: new VendrController
      }
   }
}

window.app = new App()