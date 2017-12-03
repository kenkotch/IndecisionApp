// const add = (a, b) => {
//   // console.log(arguments)
//   return a + b
// }
//
// console.log(add(55,1))
//
// const user = {
//   name: 'Ken',
//   cities: ['bos', 'nyc', 'other places'],
//   printPlacesLived () {
//     return this.cities.map(city => this.name + 'has been to ' + city + '.')
//   }
// }

// console.log(user.printPlacesLived())

const multiplier = {
  numbers: [4, 3, 2, 1],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
