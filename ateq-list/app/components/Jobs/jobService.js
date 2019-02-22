import Job from "../../models/job.js";


let _api = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})

let _state = {
    Jobs: []
}

let _subscribers = {
    Jobs: []
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

    get Jobs() {
        return _state.Jobs.map(j => new Job(j))

    }

    getApiJobs() {
        _api.get('jobs')
        .then(res => {
            let data = res.data.data.map(h => new Job(h))
            setState('Jobs', data)
        })
    }
 }