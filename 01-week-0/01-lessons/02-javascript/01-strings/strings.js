const str1 = 'Web Dev is amazing!';
// => look for each of these separately:
// - "development",
console.log(str1.includes("development"));
// - "Development",
console.log(str1.includes("Development"));
// - "web",
console.log(str1.includes("web"));
// - "ing",
console.log(str1.includes("ing"));
// - "Web"
console.log(str1.includes("Web"));


let str2 = "Hey!";
let str3 = " How are you?";
// end result: "Hey! How are you?"
console.log(str2 + str3);

let str4 = "10";
let str5 = "99";
// end result: 1099
console.log(str4 + str5);

let sentence = 'This is one meaningless sentence which needs to be cut in half.';
let sentenceLength = sentence.length;
console.log(sentenceLength);
// end result: This is one meaningless sentence
console.log(sentence.slice(0, 32));
// ***hint: first calculate the length of the sentence so you can calculate its half


//Capitalize:
//a) the whole name of the city where you are now
let city = "barcelona";
let uppercased = city.toUpperCase();
console.log(uppercased);

//b) the first letter of the city
let uppercasedFirstLetter = city[0].toUpperCase();
let uppercasedName = uppercasedFirstLetter + city.slice(1);
console.log(uppercasedName);
//c) capitalize the middle letter if the city has an odd number of letters or two middle letters if the city has even number of letters (hint: you can use .charAt() and .slice())
let uppercasedMidLetter = city[4].toUpperCase();
let upperName = city.slice(0, 4) +
    uppercasedMidLetter + city.slice(5, 9);
console.log(upperName);
