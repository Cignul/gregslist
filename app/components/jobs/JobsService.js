import Job from '../../models/Jobs.js'

let jobs = []

export default class JobsService {
  constructor() {

  }
  getJobs() {
    let jobsCopy = []
    jobs.forEach(jobs => {
      jobsCopy.push(new Job(
        jobs.title,
        jobs.salary,
        jobs.yearsEdReq
      ))
    });
    return jobsCopy

  }
  addJob(formData) {
    let newJob = new Job(
      formData.title.value,
      formData.salary.value,
      formData.yearsEdReq.value
    )
    jobs.push(newJob)
    console.log(jobs)
  }
}