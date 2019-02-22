import JobService from "./jobService.js";

//private
let _jc = new JobService() 


function draw() {
    let jobs = _jc.Jobs
    let template = ''
    jobs.forEach(job => {
        template += job.getTemplate()
    });
    document.getElementById('available-content').innerHTML = template
    document.getElementById('form-content').innerHTML= `
    <form onsubmit="app.controllers.jobController.addjob(event)">
    <input type="text" name="job" placeholder="job">
    <input type="text" name="company" placeholder="company">
    <input type="text" name="jobTitle" placeholder="jobTitle">
    <input type="text" name="hours" placeholder="hours">
    <input type="text" name="rate" placeholder="rate">
    <input type="text" name="description" placeholder="description">
    <input type="detail">Details</button>
    </form>`
}
 
function logjobs() {
    console.log("jobs UPDATED!!!")
}

// PUBLIC
export default class jobController {
    constructor() {
        _jc.addSubscriber('Jobs', draw);
        _jc.getApiJobs()
    }


    addjob(event) {
        event.preventDefault();
        let form = event.target
        let newjob ={
            title: form.title.value,
            conmpany: form.company.value,
            jobtitle: form.jobtitle.value,
            hours: form.hours.value,
            rate: form.rate.value,
            description: form.description.value
        }

        _jc.addjob(newjob)
        form.reset()
    }
     
    deletejob(id) {
        _jc.deleteJob(id)
    }
    getjob() {
        _jc.getApijobs()
    }
}