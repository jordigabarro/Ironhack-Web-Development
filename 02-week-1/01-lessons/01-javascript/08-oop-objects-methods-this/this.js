// TODO: write the methods getAge, addJoke and getRandomJoke

const chuck = {
   firstName: 'Chuck',
   lastName: 'Norris',
   birthDate: new Date('1940-03-10'),
   jokes: ['Chuck Norris counted to infinity... Twice.', 'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'],
   displayInfo() {
      console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
   },
   getAge() {
      // TODO
      // Hint: to get the current time, you can do: new Date()
      // Hint: to get the birthDate, you can do: this.birthDate
      // Hint: you can subtract 2 dates and you get the number of milliseconds
      let today = new Date();
      const diffInMilliseconds = today.getTime() - this.birthDate.getTime();
      const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Accounts for leap years
      const age = Math.floor(diffInMilliseconds / millisecondsPerYear);

      return age;

   },
   addJoke(joke) {
      // TODO (don't use return statement)
      this.jokes.push(joke);
   },
   getRandomJoke() {
      // TODO
      let random =  Math.floor(this.jokes.length * Math.random());

      return this.jokes[random];
   }
};

chuck.displayInfo();

console.log('getAge', chuck.getAge()); // Should return 85 if you are in 2025

chuck.addJoke('Chuck Norris can divide by zero.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris kills flies with his gun.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
console.log('getRandomJoke', chuck.getRandomJoke());

chuck.displayInfo();