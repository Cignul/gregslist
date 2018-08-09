import HomeService from "./HomeService.js";

let homeService = new HomeService()

function drawHomes() {
  let homes = homeService.getHomes()
  let template = ''
  for (let i = 0; i < homes.length; i++) {
    const home = homes[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${home.make}</p>
        <p>${home.model}</p>
        <p>${home.price}</p>
        <p>${home.year}</p>
        <p>${home.color}</p>
        <img src="${home.imgUrl}" alt="somethingelse">
    </div>
    `
  }

  document.getElementById('homes').innerHTML = template


}
export default class HomeController {

  constructor() {
    drawHomes()
  }
  addHome(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    homeService.addHome(formData)
    formData.reset()
    drawHomes()
  }
}