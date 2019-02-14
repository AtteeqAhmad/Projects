import carController from "./components/carcontroller.js";


class App {
   constructor() {
      this.controllers = {
         carController: new carController()
      }
   }
}


//this connects main to index.html
window.app = new App()