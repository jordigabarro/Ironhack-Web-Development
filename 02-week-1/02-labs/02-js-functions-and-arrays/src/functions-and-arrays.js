// Iteration #1: Find the maximum
//Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.
function maxOfTwoNumbers(num1, num2) {
   if (num1 > num2) {
      return num1;
   } else if (num1 < num2) {
      return num2;
   } else {
      return num1;
   }
}
console.log(maxOfTwoNumbers(5, 7));
console.log(maxOfTwoNumbers(1, 0));
console.log(maxOfTwoNumbers(3, 3));


// Iteration #2: Find longest word
//Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(miArray) {

   let longest = "";

   if (miArray.length === 0) {
      return null;
   }
   miArray.forEach(element => {
      if (element.length > longest.length) {
         longest = element;
      }
   });
   return longest;
}
console.log(findLongestWord(words));


// Iteration #3: Calculate the sum
//Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(miArray) {
   let suma = 0;

   miArray.forEach(element => suma += element);
   return suma;
}
console.log(sumNumbers(numbers));


// Iteration #3.1 Bonus:
//The function should add all the string lengths, numeric values, and numeric values of booleans to the total sum and return the sum.
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(miArray) {
   let suma = 0;


   if (miArray.length === 0) {
      return 0;
   }
   miArray.forEach(element => {
      if (typeof element === "number") {
         suma += element;
      } else if (typeof element === "string") {
         suma += element.length;
      } else if (element === true) {
         suma += 1;
      } else if (Array.isArray(element) || typeof element === "object") {
         throw new Error("Error -> Only accept numbers, strings, or booleans");
      }
   });
   return suma;
}
console.log(sum(mixedArr));


// Iteration #4: Calculate the average
// Level 1: Array of numbers
//Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(miArray) {
   if (miArray.length === 0) {
      return null;
   }
   return sumNumbers(miArray) / miArray.length;
}
console.log(averageNumbers(numbersAvg));


// Level 2: Array of strings
//Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words:
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(miArray) {
   if (miArray.length === 0) {
      return null;
   }
   return sum(miArray) / miArray.length;
}
console.log(averageWordLength(wordsArr));


// Bonus - Iteration #4.1
//Create function avg(arr) that receives any mixed array and calculates the average. For example, consider an array filled with numbers and/or strings and/or booleans as a mixed array.

function avg(miArray) {
   if (miArray.length === 0) {
      return null;
   }
   return sum(miArray) / miArray.length;
}

// Iteration #5: Unique arrays
//Take the following array, remove the duplicates, and return a new array.
const wordsUnique = [
   'crab',
   'poison',
   'contagious',
   'simple',
   'bring',
   'sharp',
   'playground',
   'poison',
   'communion',
   'simple',
   'bring'
];

function uniquifyArray(miArray) {
   let newArray = [];
   if (miArray.length === 0) {
      return null;
   }

   miArray.forEach(element => {
      if (!newArray.includes(element)) {
         newArray.push(element);
      }
   });
   return newArray;

}
console.log(uniquifyArray(wordsUnique));


// Iteration #6: Find elements
//Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(miArray, miWord) {
   if (miArray.length === 0) {
      return null;
   }
   for (let k = 0; k < miArray.length; k++) {
      if (miArray[k] === miWord) {
         return true;
      }
   }
   return false;
}
console.log(doesWordExist(wordsFind, 'eating'));


// Iteration #7: Count repetition
//Declare a function named howManyTimes that will take in an array of words as the first argument and a word to search for as the second argument. The function will return the number of times that word appears in the array.
const wordsCount = [
   'machine',
   'matter',
   'subset',
   'trouble',
   'starting',
   'matter',
   'eating',
   'matter',
   'truth',
   'disobedience',
   'matter'
];

function howManyTimes(miArray, miWord) {
   let count = 0;

   if (miArray.length === 0) {
      return count;
   }
   for (let k = 0; k < miArray.length; k++) {
      if (miArray[k] === miWord) {
         count += 1;
      }
   }
   return count;
}
console.log(howManyTimes(wordsCount, 'matter'));


// Iteration #8.1: Bonus
//Given multiple arrays, find the greatest product of four adjacent numbers.
//We consider adjacent any four numbers that are next to each other horizontally or vertically
const matrix = [
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function greatestProduct(matrix) {
   let maxProduct = 0;
   let numRows = matrix.length;
   let numCols = matrix[0].length;

   for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
         // Producte horitzontal (dreta)
         if (j + 3 < numCols) {
            let productH = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            if (productH > maxProduct) maxProduct = productH;
         }

         // Producte vertical (avall)
         if (i + 3 < numRows) {
            let productV = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
            if (productV > maxProduct) maxProduct = productV;
         }
      }
   }

   return maxProduct;
}

console.log(greatestProduct(matrix));


// Iteration #8.2: Bonus
//It takes a matrix as a parameter and returns the greatest product of any four values laid out diagonally, in either direction.
const matrix2 = [
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function greatestProductOfDiagonals(miArray) {
   let maxProduct = 0;
   const numRows = miArray.length;
   const numCols = miArray[0].length;

   for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
         // Diagonal dreta avall ↘
         if (i + 3 < numRows && j + 3 < numCols) {
            const product1 =
               miArray[i][j] *
               miArray[i + 1][j + 1] *
               miArray[i + 2][j + 2] *
               miArray[i + 3][j + 3];
            if (product1 > maxProduct) maxProduct = product1;
         }

         // Diagonal esquerra avall ↙
         if (i + 3 < numRows && j - 3 >= 0) {
            const product2 =
               miArray[i][j] *
               miArray[i + 1][j - 1] *
               miArray[i + 2][j - 2] *
               miArray[i + 3][j - 3];
            if (product2 > maxProduct) maxProduct = product2;
         }
      }
   }

   return maxProduct;
}
console.log(greatestProductOfDiagonals(matrix2));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
   module.exports = {
      maxOfTwoNumbers,
      findLongestWord,
      sumNumbers,
      sum,
      averageNumbers,
      averageWordLength,
      avg,
      uniquifyArray,
      doesWordExist,
      howManyTimes,
      greatestProduct
   };
}
