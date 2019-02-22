import HouseService from "./houseService.js";

//private
//  import HouseService from "../../House/houseService.js";

 let _hs = new HouseService()

 function draw() {
     let template = ''
     _hs.houses.forEach(h => {
         template += h.getTemplate()
     })
     document.getElementById('availabe-content').innerHTML = template
     document.getElementById('form-content').innerHTML = `
     <form onSubmit="app.controllers.houseController.addhouse(event)">
     <input type="number" name="beds" placeholder="Beds" required>
     <input type="number" name="bath" placeholder="Bath" required>
     <input type="number" name="levels" placeholder="Levels" required>
     <input type="number" name="year" placeholder="Beds" required>
     <input type="text" name="description" placeholder="description">
     <input type="number" name="price" placeholder="price" required>
     <input type="number" name="image" placeholder="image" required>
     <button type="submit">Submit</button>
     </form>
     `
     
 }

 //public
  export default class houseController {
      constructor() {
          _hs.addSubscriber('houses', draw)
      }
      getHouses() {
          _hs.getApiHouses()
      }
  }