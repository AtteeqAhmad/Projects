import VendrService from "./vendrService.js";

// private 

let VendrController = new VendrService

//public
export default class VendrController {

   charge(amount) {
      console.log(amount)
   }
}