let str1 = 'Jordi'
let str2 = 'Marta'

if (str1.length > str2.length) {
   console.log(`${str1} es más larga que ${str2}`)
} else if (str1.length < str2.length) {
   console.log(`${str2} es más larga que ${str1}`)
} else {
   console.log(`${str2} es igual de larga que ${str1}`)
}

let word = 'web'
let sentence = 'I enrolled Ironhack because I love web development.'

if (sentence.includes(word)) {
   console.log(`La palabra "${word}" se encuentra en la frase "${sentence}"`)
} else {
   console.log(`La palabra "${word}" no se encuentra en la frase "${sentence}"`)
}

let num = 219
if (num % 2 === 0) {
   console.log('El numero es par')
} else {
   console.log('El numero es impar')
}
