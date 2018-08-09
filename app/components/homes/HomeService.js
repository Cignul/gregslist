import Home from '../../models/Home.js'

let homes = []

export default class HomeService {
  constructor() {

  }
  getHomes() {
    let homesCopy = []
    homes.forEach(homes => {
      homesCopy.push(new Home(
        homes.bedrooms,
        homes.bathrooms,
        homes.year,
        homes.price,
        homes.imgUrl
      ))
    })
    return homesCopy
  }
  addHome(formData) {
    let newHome = new Home(
      formData.bedrooms.value,
      formData.bathrooms.value,
      formData.year.value,
      formData.price.value,
      formData.imgUrl.value
    )
    homes.push(newHome)
    console.log(homes)

  }
}
