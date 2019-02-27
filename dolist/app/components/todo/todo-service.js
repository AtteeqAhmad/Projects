// @ts-ignore

import Todo from "../../models/todo.js"
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/atteeq/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: []
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	get Todos(){
		return _state.todos
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(t => new Todo(t))
				_setState('todos', data)
				// WHAT DO YOU DO WITH THE RESPONSE?
			})
			
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				this.getTodos()
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
			})
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL

		//DO YOU WANT TO DO ANYTHING WITH THIS?
		todoApi.put(todoId, todo)
			.then(res => {
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
		.then(res => {
			this.getTodos()
		})
		// This one is on you to write.... 
		// The http method is delete at the todoId
	}

}
