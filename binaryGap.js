function binaryGap(n){
  let binary = n.toString(2)
  let curGap = 0
  let maxGap = 0
  if (n == 0){
    maxGap = 0
  }else{
    for (let i = 1; i<binary.length; i++){
      if (binary[i]== 0){
        curGap++
      }else{
        curGap = 0
      }
      maxGap = Math.max(maxGap, curGap)
  }
  return maxGap 
  }
}
  
console.log(binaryGap(529))


/*
function binaryGap(n){
  let binary = n.toString(2)
  let curGap = 0
  let maxGap = 0
  let oneFound = false
  
  if (n == 0){
    maxGap = 0
  }else{
    for (let i = 0; i<binary.length; i++){
      if (binary[i] == 1){
        oneFound = true
        for (let j = i+1; j<binary.length; j++){
          if (binary[j] == 1){
            curGap = j-i-1
          }
        }  
      }
    maxGap = Math.max(maxGap, curGap)
    }
   }
  return maxGap
}

console.log(binaryGap(529))*/

/*function binaryGap(n){
    let binary = n.toString(2)
    let oneFound = false
    let curGap = 0
    let maxGap = 0
    for (let i = 0; i<binary.length; i++){
      if(!oneFound){
        if(binary[i] == 1){
          oneFound = true
        }
      }else{
        if (binary[i]== 0){
          curGap++
        }else{
          curGap = 0
        }
        maxGap = Math.max(maxGap, curGap)
    }
    }
    return maxGap 
  }
    
console.log(binaryGap(20))


    
    let state = "findZero"
    for (let i =0; i<binary.length; i++){
      let input = binary[i]
      switch (state) {
        case "findZero":
          if (input == 0){
            state = "zeroFound"
          } else {
            state = "findZero"
          }
          break;
        case "zeroFound":
          state = "zeroFound"
          break;
      }
    }
    return state == "zeroFound"
}

function binaryContainsZero2(n){
  let binary = n.toString(2)
  let zeroFound = false
  for (let i =0; i<binary.length; i++){
    let input = binary[i]
    if (!zeroFound) {
      if (input == 0){
        console.log("findZero: " + input + " -> zeroFound")
        zeroFound = true
      } else {
        console.log("findZero: " + input + " -> findZero")
      }
    } else {
      console.log("zeroFound: " + input + " -> zeroFound")
    }
  }
  return zeroFound
}
*/
// console.log(binaryContainsZero(1)) // false 1
// console.log(binaryContainsZero(3)) // false 11
//console.log(binaryContainsZero2(5)) // true 101

// FindZero
//  +0 -> ZeroFound
//  +1 -> FindZero
// ZeroFound
//  +0 -> ZeroFound
//  +1 -> ZeroFound

// binaryContainsZero(5)
// step, state, input, outState   
// 0     findZero  1    findZero
// 1     findZero  0    zeroFound
// 2     zeroFound 1    zeroFound
 
// countGap(n)
// FindOne
//  +0 -> state->FindOne
//  +1 -> state->OneFound
// OneFound
//  +0 -> state->OneFound, curGap->curGap++, maxGap->maxGap
//  +1 -> state->OneFound, curGap->0, maxGap->curGap

// step, state, curGap, maxGap, input, outState}