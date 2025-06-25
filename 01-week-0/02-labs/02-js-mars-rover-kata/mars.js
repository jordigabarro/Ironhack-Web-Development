// Rover object goes here:
const rover = {
   x: 5,
   y: 5,
   direction: 'N',
   travelLog: [{ x: 5, y: 5 }],
}
// ======================

function turnRight(rover) {
   console.log('turnRight was called!')
   switch (rover.direction) {
      case 'N':
         rover.direction = 'W'
         break

      case 'W':
         rover.direction = 'S'
         break

      case 'S':
         rover.direction = 'E'
         break

      case 'E':
         rover.direction = 'N'
         break
   }
   console.log(`Player has direction: ${rover.direction}`)
}

function turnLeft(rover) {
   console.log('turnLeft was called!')

   switch (rover.direction) {
      case 'N':
         rover.direction = 'E'
         break

      case 'E':
         rover.direction = 'S'
         break

      case 'S':
         rover.direction = 'W'
         break

      case 'W':
         rover.direction = 'N'
         break
   }
   console.log(`Player has direction: ${rover.direction}`)
}

function moveForward(rover) {
   console.log('moveForward was called')

   switch (rover.direction) {
      case 'N':
         if (rover.y === 0) {
            console.log("Youuuuu can't place player outside of the board!")
         } else {
            rover.y--
         }
         break

      case 'E':
         if (rover.x === 10) {
            console.log("Youuuuu can't place player outside of the board!")
         } else {
            rover.x++
         }
         break

      case 'S':
         if (rover.y === 10) {
            console.log("Youuuuu can't place player outside of the board!")
         } else {
            rover.y++
         }
         break

      case 'W':
         if (rover.x === 0) {
            console.log("Youuuuu can't place player outside of the board!")
         } else {
            rover.x--
         }
         break
   }

   let newPosition = { x: rover.x, y: rover.y }
   rover.travelLog.push(newPosition)

   console.log(`Player has position: x=${rover.x}, y=${rover.y}`)
}

function moveBackward(rover) {
   console.log('moveForward was called')

   switch (rover.direction) {
      case 'N':
         if (rover.y === 10) {
            console.log("Youuuuu can't place player outside of the board!")
         } else {
            rover.y++
         }
         break

      case 'E':
         if (rover.x === 0) {
            console.log("Youuuuu can't place player outside of the board!")
         } else {
            rover.x--
         }
         break

      case 'S':
         if (rover.y === 0) {
            console.log("Youuuuu can't place player outside of the board!")
         } else {
            rover.y--
         }
         break

      case 'W':
         if (rover.x === 10) {
            console.log("Youuuuu can't place player outside of the board!")
         } else {
            rover.x++
         }
         break
   }

   let newPosition = { x: rover.x, y: rover.y }
   rover.travelLog.push(newPosition)

   console.log(`Player has position: x=${rover.x}, y=${rover.y}`)
}

function command(rover, orders) {
   for (let i = 0; i < orders.length; i++) {
      let order = orders[i]

      switch (order) {
         case 'r': // left
            turnRight(rover, order)
            break

         case 'l': // right
            turnLeft(rover, order)
            break

         case 'f': // up
            moveForward(rover, order)
            break

         case 'b': // up
            moveBackward(rover, order)
            break

         default:
            console.log(`The letter ${order} is not an order`)
      }
   }
}

command(rover, 'rffrfnlfzflfbflfnrzffrrfflffzflnlbbffrf')

for (let i = 0; i < rover.travelLog.length; i++) {
   console.log(
      `Path ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`,
   )
}
