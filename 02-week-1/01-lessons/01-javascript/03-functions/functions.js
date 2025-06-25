//Create a function that accepts 3 numbers as parameters, and returns their sum.
function getSum(num1, num2, num3) {

   return num1 + num2 + num3;
}

console.log(getSum(4, 6, 7));


//Create a function named isNameOddOrEven() that accepts a string as a parameter.
function isNameOddOrEven(string) {

   let countLetters = 0;
   let i = 0;

   while (i < string.length) {
      if (string[i] === " ") {
         i++;
         continue;
      } else {
         i++;
         countLetters += 1;
      }
      console.log(`${countLetters}`);
   }

   if (countLetters % 2 === 0) {
      return (`${string} has an even number of letters`)
   } else {
      return (`${string} has an odd number of letters`)
   }
}

console.log(isNameOddOrEven("Hola caracolar     r"));