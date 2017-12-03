class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi ${ this.name }.`
  }
  getDescription() {
    return `${ this.name } is ${ this.age } year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let desctiption = super.getDescription()

    if (this.hasMajor) {
    return desctiption += ` Their major is ${this.major}.`
    }
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  // hasLocation() {
  //   return !!this.homeLocation
  // }
  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation) {
      greeting += `I am from ${ this.homeLocation }.`
    }

    return greeting
  }
}

const me = new Traveler('Ken Kotch', 38, 'Boulder')
console.log(me.getGreeting())

const doe = new Traveler()
console.log(doe.getGreeting())
