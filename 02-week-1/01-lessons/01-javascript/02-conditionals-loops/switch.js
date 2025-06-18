const characterName = prompt('Favorite Game of Thrones main character:');

let house = '';

switch (characterName) {
   case 'Khal Drogo':
      house = 'Dothraki Horselord';
      break;
   case 'Daenerys':
      house = 'Targaryen';
      break;
   case 'Jon Snow':
   case 'Sansa':
   case 'Arya':
      house = 'Stark';
      break;
   case 'Cersei':
   case 'Tyrion':
   case 'Ser Jaime':
      house = 'Lannister';
      break;
   default:
      house = 'Other'
}

console.log(`Your favorite character is from the house ${house}.`);

