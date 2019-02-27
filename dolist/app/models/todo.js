export default class Todo {
    constructor(data){
    this.description= data.description
    this._id = data._id
    this.completed = data.completed
    }
      getTemplate(){
        return `
        <p>${this.description}</p>
        <button onclick="app.controllers.todoController.removeTodo('${this._id}')">delete </button>
        `
      }
    }