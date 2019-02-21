import job from "../../models/job.js";


let _api = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})

let _state = {
    jobs: []
}

let _subscribers = {
    jobs: []
}

function setState(prop, value) {
    _state[prop] = value
    _subscribers[prop].forEach(fn => fn());
}

//public
 export default class JobService {

    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    
    }

    get houses() {
        return _state.job.map(h => new Job(h))

    }

    getApiJob() {
        _api.get('jobs')
        .then(res => {
            let data = res.data.data.map(h => new Jobs(h))
            setState('jobs', data)
        })
    }
 }