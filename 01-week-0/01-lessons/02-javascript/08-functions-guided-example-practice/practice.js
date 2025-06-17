function welcome(name) {
   console.log(`Hello ${name}`)
}

welcome('jordi')

let i = 0
function printToTwenty() {
   while (i <= 20) {
      console.log(i)
      i += 1
   }
}

printToTwenty()

let j = 0
function printNumbers(num) {
   while (j <= num) {
      console.log(j)
      j += 1
   }
}

printNumbers(15)

let ironCities = [
   'Amsterdam',
   'Barcelona',
   'Berlin',
   'Lisbon',
   'Madrid',
   'Mexico City',
   'Miami',
   'Paris',
   'Sao Paulo',
]

function printArrElements(someArr) {
   for (let w = 0; w < someArr.length; w++) {
      console.log(`${someArr[w]}`)
   }
}

printArrElements(ironCities)

function printEvens(someArr) {
   for (let w = 0; w < someArr.length; w++) {
      if (w % 2 === 0) {
         console.log(`${someArr[w]}`)
      }
   }
}

printEvens(ironCities)

function printSum(someArr) {
   let sum = 0
   for (let w = 0; w < someArr.length; w++) {
      sum = sum + someArr[w]
   }
   console.log(`$${sum}`)
}

const prices = [5, 7.99, 9.99, 0.99, 21]
printSum(prices)

function stringToLetters(string) {
   let newArray = []
   for (let w = 0; w < string.length; w++) {
      newArray.push(string[w])
   }
   console.log(newArray)
}

stringToLetters('Hello')

function checkNumber(num) {
   if (num === 31) {
      console.log(num + '!')
      return
   }
   if (num % 6 === 0 && num % 4 === 0) {
      console.log('Ironhack')
      return
   }

   if (num % 4 === 0) {
      console.log('Hey')
      return
   }
   if (num % 6 === 0) {
      console.log('There')
      return
   }
   if (num % 7 === 0) {
      return
   }
   console.log(num)
   return
}

function lastFunction() {
   for (let w = 1; w <= 100; w++) {
      checkNumber(w)
   }
}

lastFunction()
