var nameVar = 'Ken'
console.log('nameVar', nameVar)

let nameLet = 'Bob'
nameLet = 'Jen'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

const fullName = 'Ken Kotch'
let firstName

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)
