export default class job {
    constructor(data) {
        this.id = data.id
        this.job = data.job
this.coampany = data.coampany
this.jobtitle = data.jobtitle
 this.hours = data.hours
 this.rate = data.rate
 this.description = data.description
    }
    
    getTemplate() {
        return `
        <div class="card col-3">
        <h2>${this.company} ${this.jobtitle}</h2>
        <h3>${this.hours} ${this.rate}</h3>
        <h5>${this.description}</h5>
        </div>
        `
    }
}