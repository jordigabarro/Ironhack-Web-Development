function printInput(theInput) {
   console.log(`Passed input is: ${theInput}`)
}

printInput(2) // => Passed input is: 2
printInput('Ironhack is the best!')
// => Passed input is: Ironhack is the best!

// declare the function-define two parameters:
function printInput2(theInput, numberOfTimes) {
   for (let i = 0; i < numberOfTimes; i++) {
      console.log(`Inputted: ${theInput}`)
   }
}

// invoke the function - pass two arguments:
printInput2(2, 3)
printInput('Ironhack is the best!', 2)

// declare the function-array as parameters:
function printElements(someArray) {
   for (let i = 0; i < someArray.length; i++) {
      console.log(`Element: ${someArray[i]}`)
   }
}

// example 1:
// invoke the function - pass an array as the parameter:
printElements(['hello', 'kitty', 'pizza', 3, 78, false])
// Element: hello
// Element: kitty
// Element: pizza
// Element: 3
// Element: 78
// Element: false

// example 2:
const funnyArray = ['dog', 4, 'miami', true]
printElements(funnyArray)
// Element: dog
// Element: 4
// Element: miami
// Element: true

// STEP 1:
function calculateSum(num1, num2) {
   return num1 + num2
}

function multiplyNumbers(a, b) {
   return a * b
}

function printResult() {
   calculateSum(3, 6)
   const resultado = multiplyNumbers(3, 6)
   console.log(`The result is ${resultado}.`)
}

printResult()
