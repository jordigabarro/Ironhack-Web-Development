// Iteration 1: Names and Input
let hacker1 = "Jordi Gabarró Armengol";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Lara Gabarró Hernández";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
//Depending on which name is longer
if (hacker1.length > hacker2.length) {
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
//Print the characters of the driver's name, separated by space, and in capital letters,
let i = 0;
let nameInCaps = "";

do {
   if (hacker1[i] === " ") {
      i++;
      continue;
   } else {
      nameInCaps += hacker1[i].toUpperCase() + " ";
   }
   i++;
} while (i < hacker1.length);

console.log(nameInCaps.trim());

//Print all the characters of the navigator's name in reverse order
let j = hacker2.length - 1;
let nameReverse = "";

do {
   nameReverse += hacker2[j];
   j--;
} while (j >= 0);

console.log(nameReverse.trim());

//Depending on the lexicographic order
if (hacker1 > hacker2) {
   console.log(`The driver's name goes first.`);
} else if (hacker1 < hacker2) {
   console.log(`Yo, the navigator goes first, definitely.`);
} else {
   console.log(`What?! You both have the same name?`);
}


//Bonus 1
//Make your program count the number of words in the string.
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur magna quis augue varius, maximus placerat leo dictum. Etiam sed nisl sed orci pellentesque scelerisque eget non eros. Maecenas viverra in turpis quis dignissim. Quisque augue eros, posuere ut sodales at, posuere non mauris. Praesent placerat mollis ante, sed consequat mi lobortis eu. Maecenas in quam iaculis, consequat erat eu, volutpat odio. Fusce dapibus orci ac neque iaculis imperdiet eget malesuada diam. Vivamus et nunc interdum, lacinia nisi et, viverra odio. Nunc vulputate condimentum odio a tincidunt. Fusce dignissim leo purus, ac condimentum velit vulputate nec. Phasellus non mattis elit, eget vehicula metus. Sed quis dignissim urna. Curabitur id fringilla orci. Aliquam luctus feugiat metus, et ultrices neque egestas id. Mauris suscipit nibh vel dapibus congue. Nulla sagittis dolor in nulla convallis faucibus. Nunc auctor faucibus sem nec luctus. Nullam scelerisque pulvinar ornare. Nam consequat augue at massa rutrum mattis. Duis velit urna, convallis a cursus ac, ornare et nisi. Pellentesque malesuada enim et nisi commodo aliquet. Phasellus mollis eleifend vestibulum. Morbi lacinia fringilla elit at molestie. Nulla bibendum sagittis felis sit amet maximus. Aenean metus ligula, efficitur sagittis justo quis, dictum tempor leo. Duis quis dignissim nisi. Nam eu vulputate lorem, vitae fringilla nisi. Sed quis ipsum porttitor, gravida erat nec, fermentum ante. Aliquam vitae faucibus est, nec rutrum mauris. Donec feugiat nibh eu mauris condimentum sodales. Praesent varius tellus quis tellus vestibulum maximus. Sed a eleifend nulla, quis finibus arcu. Duis malesuada metus enim, sit amet rhoncus metus accumsan eu. Mauris laoreet odio a tincidunt molestie. Ut lobortis suscipit urna quis blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse a nibh felis et"
let k = 0;
let countWords = 1; //Comença per 1 perquè la última no la contarà perqué no té espai al final

do {
   if (longText[k] === " ") {
      countWords += 1;
   }
   k++;
} while (k < longText.length);

console.log(`${countWords}`);


//Make your program count the number of times the Latin word et appears.
let m = 0;
let countEt = 0;

while (m < longText.length) {
   if (longText[m] === "e" && longText[m + 1] === "t" && (m + 2 >= longText.length || !/[a-zA-Z]/.test(longText[m + 2])) && (m - 1 < 0 || !/[a-zA-Z]/.test(longText[m - 1]))) {
      countEt += 1;
   }
   m++;
}

console.log(`${countEt}`);


//Bonus 2
//Write a code to check if the value assigned to this variable is a Palindrome.
let phraseToCheck = "A man, a plan, a canal, Panama!";
let n = 0;
let string1 = "";
let string2 = "";

do {
   if (phraseToCheck[n] === " " || !/[a-zA-Z]/.test(phraseToCheck[n])) {
      n++;
      continue;
   } else {
      string1 += phraseToCheck[n].toLowerCase();
   }
   n++;
} while (n < phraseToCheck.length);

//console.log(`${string1}`);

let r = phraseToCheck.length - 1;
do {
   if (phraseToCheck[r] === " " || !/[a-zA-Z]/.test(phraseToCheck[r])) {
      r--;
      continue;
   } else {
      string2 += phraseToCheck[r].toLowerCase();
   }
   r--
} while (r >= 0);

//console.log(`${string2}`);

if (string1 === string2) {
   console.log(`${phraseToCheck} is a palindrome`);
} else {
   console.log(`${phraseToCheck} isn't a palindrome`);
}