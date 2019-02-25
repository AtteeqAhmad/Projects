// @ts-ignore


//create the _state here
let _state = {
	image: ''
}
//create _subscribers here
let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 2000
});

export default class ImageService {

	get ImageUrl() {
		return _state.image
	}

	addSubscribers(prop, fn) {
		_subscribers[prop].push(fn)
	}
	getimage() {
		imgApi.get() 
		.then(res=>{
			console.log(res.data.url)
			//save this url to the _state
			_setState('image', res.data.url) 
			//have a getter that will provide the url from the state
			
			//complete the drawImage function in your image-controller
			
			//add the drawImage function to the subscribers of the image prop in the _state

		})
	}


}
