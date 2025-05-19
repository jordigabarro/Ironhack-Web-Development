function loopArray(someArr) {
   someArr.forEach((element) => {
      let theType = typeof element
      console.log(`The variable ${element} is   type of ${theType}.`)
   })
}

const someArr = [
   'max',
   34,
   true,
   { name: 'sandra', student: true },
   ['javascript', 'mongodb', 'react'],
]

loopArray(someArr)

function getCredentials(obj) {
   console.log(`Username is: ${obj.username} and the psw is: ${obj.password}`)
}

let user = {
   username: 'ironhacker',
   password: '123iron345',
}

getCredentials(user)
// => expected output:
// Username is: ironhacker and the password is: 123iron345.

let property = {
   owner: {
      firstName: 'John',
      lastName: 'Doe',
      age: 44,
   },
   isForSale: true,
   sqrm: 120,
   address: {
      street: 'Happy St',
      number: 123,
      city: 'Miami',
      state: 'FL',
      country: 'US',
   },
   amenities: ['pool', 'tennis court', 'private parking', 'yard'],
}

// YOUR CODE HERE
function checkProperty(obj) {
   if (obj.isForSale) {
      console.log(
         `The owner, ${obj.owner.firstName} ${obj.owner.lastName} put the home for sale! The property has ${obj.amenities.length} amenities.`,
      )
   } else {
      console.log(
         `The home in ${obj.address.street} no. ${obj.address.number} is not for sale.`,
      )
   }
}

checkProperty(property)

//The owner, John Doe put the home for sale! The property has 4 amenities.
//The home in Happy St no. 123 is not for sale.
