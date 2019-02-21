// private
import Car from "../../models/car.js";

let _api = axios.create({
   baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})

let _state = {
   cars:[]
}

let _subscribers = {
   cars: []
}
 
function setState(prop, data) {
   _state[prop] = data
   _subscribers[prop].forEach(fn => fn());
}


//public
export default class CarService {

   addSubscriber(prop, fn) {
      _subscribers[prop].push(fn)
   }

   get Cars() {
      return _state.cars.map(c => new Car(c))
   }

   //initialize or Gell all current cars
   getApiCars() {
      _api.get('cars')
      .then(res => {
         let carData = res.data.data.map(c => new Car(c))
         setState('cars', carData)
      })
   }

   addcar(rawCar) {
      let newcar = new Car(rawCar)
_api.post('cars', newCar)
.then(res => {
   this.getApiCars()
})
   }

   deleteCar(id) {
_api.delete('cars/' +id)
.then(res => {
   this.getApiCars()
})
   }

   bid(carTOFindId) {
      let car = _state.cars.find(c => c._id == carTOFindId)
      car.price = parseInt(car.price)
      car.price++
      _api.put('cars/' + car._id, car)
      .then(res => {
         this.getApiCars()
      })
   }
      }
