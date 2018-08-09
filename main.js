import CarController from "./app/components/cars/CarController.js";
import HomeController from "./app/components/homes/HomeController.js";
import JobsController from "./app/components/jobs/JobsController.js";
export default class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      homeController: new HomeController(),
      jobsController: new JobsController()
    }
  }
}

//@ts-ignore
window.app = new App()