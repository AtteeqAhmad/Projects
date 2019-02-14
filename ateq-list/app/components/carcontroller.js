import CarService from "./carServices.js";

//private
//INSTANTIATES CARSERVICE
let cs = new CarService()


function draw() {
   let cars = _cs.Cars
   let template = ''
   car.forEach(car => {
      template += cars.getTemplate()
   });
   document.getElementById('available-cars').innerHTML = template
}

//public

export default class CarController {
   constructor() {
      _cs.addSubscriber('cars', draw)
      _cs.addSubscriber('cars', logCars)
      draw()
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
      debugger
      _cs.addCar(newcar)
      //clears the form
      form.reset()
   }
   deleteCar(id) {
      _cs.deleteCar(id)
   }
}