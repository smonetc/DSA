
// Sheep 

const sheepCount = function(sheep) {
   // Base case
   if (sheep === 0) {
       console.log(`All sheep jumped over the fence`)
     return
   }
   // General case
   console.log( sheep + ':Another sheep jumps over the fence')
   return sheepCount(sheep - 1)
}

sheepCount(3)


// Power calculator

function powerCalculator(base, expo){
   return Math.pow(base,expo)
 }
 
 powerCalculator(5,3)
 