import VendrService from "./vendrService.js";

// private 

let vendrService = new VendrService()

function draw() {
   console.log();
   let v = vendrService.charge
}

//public
export default class VendrController {

   charge(amount) {
      console.log(amount)

      vendrService.charge()
   }
}