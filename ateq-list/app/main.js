import carController from "./components/car/carcontroller.js";
import HouseController from "./components/House/houseController.js";
import jobController from "./components/Jobs/jobController.js";




class App {
   constructor() {
      this.controllers = {
         carController: new carController(),
         houseController: new HouseController(),
         jobController: new jobController()
      }
   }
}


//this connects main to index.html
window.app = new App()