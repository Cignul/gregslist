import JobsService from "./JobsService.js";

let jobsService = new JobsService()

function drawJobs() {
  let jobs = jobsService.getJobs()
  let template = ''

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Title:${job.title}</p>
        <p>Salary:${job.salary}</p>
        <p>Education years:${job.yearsEdReq}</p>
      
    </div>
    `
  }
  document.getElementById('jobs').innerHTML = template


}
export default class HomeController {

  constructor() {
    drawJobs()
  }
  addJob(triggeredEvent) {
    console.log("addjob")
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    jobsService.addJob(formData)
    formData.reset()
    drawJobs()
  }
}