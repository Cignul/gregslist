import Car from '../../models/Car.js'

let cars = []

//creates a new HTTP request object
const carsApi = axios.create({
  //base connection url
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars',
  //only wait 3seconds for a response
  timeout: 3000
})

export default class CarService {
  constructor() {

  }

  getCars(draw) {
    carsApi.get()
      .then(res => {
        //converts each raw car data into Car class objects
        res.data.data.map(rawCar => {
          return new Car(rawCar)
        })
        //callback function to draw cars
        draw(cars)
      })
    // let carsCopy = []

    //same as below
    // for (let i = 0; i < cars.length; i++) {
    //   const car = cars[i];

    // }

    // this is just saying for each 'car'
    //  in the whole cars array do whatever is in the code block 
    //     cars.forEach(car => {
    //       carsCopy.push(new Car(
    //         car.make,
    //         car.model,
    //         car.year,
    //         car.price,
    //         car.color,
    //         car.imgUrl
    //       ))
    //     })
    //     return carsCopy
    //   }

    //   addCar(formData) {
    //     let newCar = new Car(
    //       formData.make.value,
    //       formData.model.value,
    //       formData.year.value,
    //       formData.price.value,
    //       formData.color.value,
    //       formData.imgUrl.value
    //     )
    //     cars.push(newCar)
    //     console.log(cars)

  }
}