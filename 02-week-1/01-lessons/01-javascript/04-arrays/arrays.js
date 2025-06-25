//Write the function above using arrow function approach.
const raceResults = ['Helen', 'John', 'Peter', 'Merry'];

raceResults.forEach(function (elem, index) {
   console.log(elem + ' finished the race in ' + (index + 1) + ' position!');
});

['Helen', 'John', 'Peter', 'Merry'].forEach((elem, index) => console.log(elem + ' finished the race in ' + (index + 1) + ' position!'));


