// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const directors = moviesArray.map(movie => movie.director);
   //console.log(directors);

   return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   if (moviesArray.length === 0) return 0;
   const numSpielberg = moviesArray.filter(movie => movie.director === 'Steven Spielberg');
   //console.log(numSpielberg);

   const dramaSpielberg = numSpielberg.filter(movie => movie.genre.includes('Drama'));
   //console.log(dramaSpielberg);

   return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if (moviesArray.length === 0) return 0;
   const average = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0) / moviesArray.length;
   //console.log((Math.round(average * 100) / 100).toFixed(2));

   return parseFloat((Math.round(average * 100) / 100).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   if (moviesArray.length === 0) return 0;
   const dramaArray = moviesArray.filter(movie => movie.genre.includes('Drama'));

   if (dramaArray.length === 0) return 0;
   const average = dramaArray.reduce((sum, movie) => sum + (movie.score || 0), 0) / dramaArray.length;
   //console.log((Math.round(average * 100) / 100).toFixed(2));

   return parseFloat((Math.round(average * 100) / 100).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   const sortedArray = [...moviesArray].sort((a, b) => {
      if (a.year === b.year) {
         return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
   });
   //console.log(sortedArray);
   return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   const sortedArray = [...moviesArray].sort((a, b) => a.title.localeCompare(b.title)).map(movie => movie.title);
   //console.log(sortedArray);
   return sortedArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   return moviesArray.map(movie => {
      const duration = movie.duration;
      let totalMinutes = 0;

      // Si la durada conté hores (per exemple, "2h")
      if (duration.includes('h')) {
         const hours = parseInt(duration.split('h')[0]); // Extreu les hores
         totalMinutes += hours * 60; // Converteix hores a minuts
      }

      // Si la durada conté minuts (per exemple, "30min")
      if (duration.includes('min')) {
         const minutes = parseInt(duration.split(' ')[1]?.replace('min', '')); // Extreu els minuts
         totalMinutes += minutes; // Afegeix els minuts
      }

      // Retorna una nova pel·lícula amb la durada convertida
      return {
         ...movie,
         duration: totalMinutes
      };
   });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
   // Si l'array està buit, retornem null
   if (moviesArray.length === 0) return null;

   // Obtenim tots els anys únics de les pel·lícules
   const years = [...new Set(moviesArray.map(movie => movie.year))];
   
   let bestYear = {
      year: null,
      score: -Infinity
   };

   // Iterem per cada any
   years.forEach(year => {
      // Filtrem les pel·lícules d'aquest any
      const moviesThisYear = moviesArray.filter(movie => movie.year === year);
      
      // Calculem la mitjana de puntuació per aquest any
      const yearAvg = moviesThisYear.reduce((sum, movie) => sum + (movie.score || 0), 0) / moviesThisYear.length;

      // Actualitzem el millor any si la puntuació és més alta
      // (o si és igual però l'any és menor)
      if (yearAvg > bestYear.score || (yearAvg === bestYear.score && year < bestYear.year)) {
         bestYear = {
            year: year,
            score: yearAvg
         };
      }
   });

   return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`;
}

