let id = 1


export default class Car {
   constructor(data) {
      this.id = data._id
      this.make = data.make
      this.model = data.model
      this.price = parseInt(data.price).toFixed(2)
      this.year = data.year
      this.imgURL = data.imgURL
      this.description = data.description || 'No Description Provided'
      id++
   }


   gettemplate() {
      return `
      <div class="card col-3">
         <img class="card-img-top" src="${this.imgURL}" alt="Card image cap">
         </img>
            <div class="card-body">
            <h5 class="card-title">${this.year} ${this.make} - ${this.model}</h5>
               <p class="card-text">${this.description} -- ${this.price}</p>
               <button onclick="app.controllers.carController.bid('${this._id}')">Bid</button>
               <button onclick="app.controllers.carController.deleteCar(${this.id})">Remove</button>
            </div>
      </div>`
   }
}