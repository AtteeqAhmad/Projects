// private
// state is the object that contains all data
let _state = {
   cars: [

   ]
}

/// subscribers holds all functions to trigger on changes
// all properties on state will also be on subscribers
// subscribers are arrays fo functions
let _subscribers = {
   cars: []
}

function setState(dataName, Value) {
   _state[dataName] = Value
   //for Each function in the subscribrs envoke the function
   _subscribers[dataName].push(fn)
}

let _cars = [
   new Car(1000, "://https:car.image"),
   new Car(1500, 'A classic', ":https//:car.img"),
   new Car()
]

//public
export default class CarService {

   addSubscriber(dataName, fn) {
      _subscribers[dataName].push(fn)
   }

   get Cars() {
      return _cars
   }

   addcar(rawCar) {
      let newcar = new Car(rawCar)

   }
   constructor() {
      draw()
      get CarService() {
         return _cars
      }

   }

   addcar(rawCar) {
      let newCar = new Car(rawCar.price, rawCar.title, rawCar.)
   }
   deletecar(id) {
      //let cartoDelete = _cars.find(car => car.id == id)
      //let indextoRemove = _cars.indexOf(cartoDelete)
      //otherwise

      for (let i = 0; < _cars.length; i++) {
         let car = _cars[i];
         if (car.id == id) {
            _cars.splice(i, 1)
            break;
         }
      }
      _cars.splice(indextoRemove, 1)

   }
}
