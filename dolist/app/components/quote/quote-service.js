import Quote from '../../models/quote.js'
let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}
// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 2000
});


export default class QuoteService {

	get Quote() {
		return _state.quote
	}

	addSubscriber(prop, fn) {
	_subscribers[prop].push(fn)
	}

	getquote() {
		_quoteApi.get()
		.then(res=>{
			//ALWAYS DO THIS
			console.log(res.data.quote)
			//create a quote class and then create an instance of a quote with the information from the response/res
			let quote = new Quote(res.data.quote)
			//setState of quote equal to the instance of the quote
			_setState('quote', quote)
		})
	}
}
