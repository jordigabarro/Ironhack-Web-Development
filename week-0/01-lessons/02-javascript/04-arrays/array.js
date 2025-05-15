const animalArray = ['dog', 'cat', 'fish']
console.log(` ${animalArray}`)
animalArray.push('lizard')
animalArray.push('dino')
console.log(` ${animalArray}`)
animalArray.splice(0, 2)
console.log(` ${animalArray}`)
animalArray.splice(animalArray.length - 1, 1, 'Something else')
console.log(` ${animalArray}`)

let foodArray = []
foodArray.push('mac')
foodArray.push('ovo')
foodArray.push('ili')
foodArray.push('uwu')
foodArray.push('xzx')
foodArray.push('ufo')
console.log(` ${foodArray}`)

for (let i = 0; i < foodArray.length; i++) {
   if (i % 2 !== 0) {
      console.log(`${foodArray[i]}`)
   }
}

let word = 'miami'
let arr = [
   'bcn',
   'mia',
   'sao',
   'mex',
   'par',
   'miami',
   'ams',
   'ber',
   'paris',
   'lis',
   'mad',
]
let i = 0

arr.forEach(() => {
   if (word === arr[i]) {
      console.log(`${word} = ${arr[i]}  Sameeeee worrrd`)
   } else {
      console.log(`${word} != ${arr[i]} Different woooord`)
   }
   i += 1
})

let prices = [10.99, 44.56, 112.79, 3, 5]
let sum = 0 // start value for the sum

for (let j = 0; j < prices.length; j++) {
   sum = sum + prices[j]
}

console.log(`${sum.toFixed(1)}`)
