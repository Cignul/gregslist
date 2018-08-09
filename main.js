import CarController from "./app/components/cars/CarController.js";
import HomeController from "./app/components/homes/HomeController.js"
export default class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      homeController: new HomeController()
    }
  }
}

//@ts-ignore
window.app = new App()