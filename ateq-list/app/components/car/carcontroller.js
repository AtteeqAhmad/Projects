import CarService from "./carServices.js";

//private
//INSTANTIATES CARSERVICE
let _cs = new CarService()


function draw() {
   let car = _cs.Cars
   let template = ''
   car.forEach(cars => {
      template += cars.getTemplate()
   });
   document.getElementById('available-content').innerHTML = template
   document.getElementById('form-content').innerHTML= `
   <form onsubmit="app.controllers.carController.addCar(event)">
   <input type="text" name="make" placeholder="Make" required>
   <input type="text" name="model" placeholder="Model" required>
   <input type="decimal" name="year" placeholder="Year" required>
   <input type="text" name="description" placeholder="Description">
   <input type="number" name="price" placeholder="price" required>
   <input type="url" name="imgUrl" placeholder="Price" required>
   <input type="submit">Submit</button>
   </form>`
}

function logCars() {
   console.log("cars UPDATED!!!")
}

//public

export default class CarController {
   constructor() {
      _cs.addSubscriber('cars', draw)
      _cs.getApiCars()
   }
   //any form submission  do not forget to prevent the default action
   addCar(event) {
      event.preventDefault();
      let form = event.target
      let newcar = {
         title: form.title.value,
         price: form.price.value,
         description: form.description.value,
         img: form.img.value
      }
      
      _cs.addCar(newcar)
      //clears the form
      form.reset()
   }

   deleteCar(id) {
      _cs.deleteCar(id)
   }
   bid(id) {
      _cs.bid(id)
   }

   getCars() {
      _cs.getApiCars()
   }
}