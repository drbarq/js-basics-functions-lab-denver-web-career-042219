// Code your solution in this file!
const hq = 42 
const blockLength = 264

function distanceFromHqInBlocks(block){
    return Math.abs(hq - block)
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * blockLength
}

function distanceTravelledInFeet(beginBlock , endBlock){
    let numOfBlock = Math.abs(endBlock - beginBlock)

    return numOfBlock * blockLength
}

function calculatesFarePrice(beginBlock , endBlock) {
   let distance = distanceTravelledInFeet(beginBlock , endBlock);
   let result 
    
   if (distance <= 400) {
       result = 0
   }
   else if (distance > 400 && distance <= 2000) {
       let charge = distance - 400
       result = charge *.02
   }
   else if (distance > 2000 && distance < 2500) {
       result = 25
   }
   else if (distance > 2500) {
       result = 'cannot travel that far'
   }
   return result
}