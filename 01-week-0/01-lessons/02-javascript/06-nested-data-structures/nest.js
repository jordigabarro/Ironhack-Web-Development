let products = [
   {
      name: 'iPhone',
      price: 799.99,
   },
   {
      name: 'Samsung Galaxy S10',
      price: 900.0,
   },
]

console.log(products[0].price)
console.log(products[0].name)
console.log(products[1].name)
let newPhone = {
   name: 'One Plus 5T',
   price: 399.0,
}
products.unshift(newPhone)
console.log(products)
products.pop()
console.log(products)

let course = {
   name: 'Web Development',
   type: ['full-time', 'part-time'],
   topics: [
      'HTML/CSS & Responsive Design',
      'JavaScript',
      'MongoDB',
      'Node',
      'Express',
      'React',
   ],
}
console.log(course.type[1])
console.log(course.topics[0])
console.log(course.topics[2])

let student = {
   firstName: 'Ana',
   lastName: 'Blair',
   course: {
      name: 'Web Development',
      type: 'part-time',
   },
   attendedIn: 'Madrid',
   address: {
      street: 'Happy Street',
      number: 123,
      city: 'Barcelona',
      zip: 28015,
      country: 'Spain',
   },
}

console.log(student.course.name) // => Web Development
console.log(student.address.street) // => Happy Street
console.log(
   `${student.firstName} moved from ${student.address.city} to ${student.attendedIn} to take ${student.course.type} ${student.course.name} course`,
)
// => Ana moved from Barcelona to Madrid to take part-time Web Development course.

const ironCampuses = [
   ['Mexico City', 'Miami', 'Sao Paulo'],
   ['Amsterdam', 'Barcelona', 'Berlin', 'Lisbon', 'Madrid', 'Paris'],
]

console.log(ironCampuses[0][1]) // => Miami
console.log(ironCampuses[1][0]) // => Amsterdam
console.log(ironCampuses[1][5]) // => Paris

let basic = {
   language: 'JavaScript',
   frameworks: [
      {
         end: 'back',
         list: [
            {
               name: 'ExpressJS',
               released: 2010,
            },
            {
               name: 'MeteorJS',
               released: 2012,
            },
         ],
      },
      {
         end: 'front',
         list: [
            {
               name: 'ReactJS',
               released: 2013,
            },
            {
               name: 'VueJS',
               released: 2014,
            },
         ],
      },
   ],
}

console.log(basic.frameworks[0].list[0].name) // => ExpressJS
console.log(
   `In Ironhack, I'll learn ${basic.frameworks[0].list[0].name} and ${basic.frameworks[1].list[0].name}`,
) // => In Ironhack, I'll learn ExpressJS and ReactJS.
