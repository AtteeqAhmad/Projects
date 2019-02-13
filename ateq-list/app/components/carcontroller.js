import CarService from "./carServices.js";

//private

let cs = new CarService()


function draw() {
   let cars = _cs.cars
   let template = ''
   car.forEach(car => {
      template += cars.getTemplate()
   });
   document.getElementById('available-cars').innerHTML = template
}

//public

exprot default class CarController {
   //any form submission  do not forget to prevent the default action
   get Car(event) {

      return _cars

   }
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
      draw()
   }
   deleteCar(id) {
      _cs.deleteCar(id)
      draw()
   }
}