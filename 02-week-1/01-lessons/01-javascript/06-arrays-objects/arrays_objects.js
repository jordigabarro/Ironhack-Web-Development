const students = [
   { name: "Bob", age: 17 },
   { name: "Susy", age: 18 },
   { name: "Ted", age: 18 },
   { name: "Sarah", age: 20 },
   { name: "Bill", age: 19 }
];

console.log(students[0].name);
console.log(students[3].age);


const classes = [
   [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
   ],
   [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
   ],
   [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
   ],
   [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
   ],
   [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
   ]
];

console.log(classes[1]);
console.log(classes[4][0].firstName);
console.log(classes[1][3].age);
console.log(classes[4][4].lastName);


const classRoom = {
   teacher: {
      firstName: 'Greg',
      lastName: 'Dach',
      age: 38,
      address: {
         street: "3085 Kelton Knolls",
         city: "Aldaside",
         state: "Maryland"
      }
   }
};

console.log(classRoom.teacher.age);


const schoolSystem = {
   schools: [
      {
         name: "Fake School 1",
         classRooms: [
            {
               teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
               students: [
                  { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                  { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                  { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                  { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                  { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
               ]
            },
            {
               teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
               students: [
                  { firstName: 'Manley', lastName: 'Doyle', age: 18 },
                  { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
                  { firstName: 'Sid', lastName: 'Rohan', age: 30 },
                  { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
                  { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
               ]
            }
         ]
      },
      {
         name: "Fake School 2",
         classRooms: [
            {
               teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
               students: [
                  { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
                  { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
                  { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
                  { firstName: 'Rickie', lastName: 'White', age: 22 },
                  { firstName: 'Rose', lastName: 'Collins', age: 30 },
               ]
            },
            {
               teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
               students: [
                  { firstName: 'Melany', lastName: 'Welch', age: 25 },
                  { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
                  { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
                  { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
                  { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
               ]
            }
         ]
      },
      {
         name: "Fake School 3",
         classRooms: [
            {
               teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
               students: [
                  { firstName: 'Christop', lastName: 'Hahn', age: 26 },
                  { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
                  { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
                  { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
                  { firstName: 'Maudie', lastName: 'Haley', age: 30 }
               ]
            },
            {
               teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
               students: [
                  { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
                  { firstName: 'Lois', lastName: 'Kulas', age: 28 },
                  { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
                  { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
                  { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
               ]
            }
         ]
      }
   ]
};

schoolSystem.schools[1].classRooms[0].students.push({firstName: 'Lucille', lastName: 'D. Lozano', age: 40});
console.log(schoolSystem.schools[1].classRooms[0].students);
console.log(schoolSystem.schools[2]);
console.log(schoolSystem.schools[2].classRooms[1].teacher.firstName);
console.log(schoolSystem.schools[2].classRooms[0].students[3].firstName);