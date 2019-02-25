export default class Todo {
    constructor(data){
    this.description= data.description
    this._id = data._id
    this.completed = data.completed
    }
      getTemplate(){
        return `
        <p>${this.description}</p>
        <button onclick="remove" app.controllers.todoController.remove>
        `
      }
    }