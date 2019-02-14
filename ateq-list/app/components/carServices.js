// private
// state is the object that contains all data
let _state = {
   cars: [
      new Car({ price: 1000, title: 'A Stealthy Car', img: 'https://images-na.ssl-images-amazon.com/images/I/410jkSdCl0L._SL500_AC_SS350_.jpg', description: 'cops and robbers both hate him' }),
      new Car({ price: 1500, title: 'A Classic' img: 'https://media.npr.org/assets/img/2011/05/31/FordPinto_wide-aa4b7f14f4dde2bc2b9fd16e77003fb01626dee2-s800-c85.jpg', description: 'Just don\'t hit it from behind' }),
      new Car({ price: 100, title: 'just it' img: 'https://media.npr.org/assets/img/2011/05/31/FordPinto_wide-aa4b7f14f4dde2bc2b9fd16e77003fb01626dee2-s800-c85.jpg', description: 'Just don\'t hit it from behind' })
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
   _subscribers[dataName].forEach(fn => fn());
}

//public
export default class CarService {

   addSubscriber(dataName, fn) {
      _subscribers[dataName].push(fn)
   }

   get Cars() {
      return _state.cars
   }

   addcar(rawCar) {
      let newcar = new Car(rawCar)
      _state.cars.push(newCar)
      setState('cars', _state.cars)
   }

   deletecar(id) {
      //let cartoDelete = _cars.find(car => car.id == id)
      //let indextoRemove = _cars.indexOf(cartoDelete)
      //otherwise
      for (let i = 0; i < _state.cars.length; i++) {
         let car = _state.cars[i];
         if (car.id == id) {
            _state.cars.splice(i, 1)
            break;
         }
      }
      setState('cars', _state.cars)
   }
}
