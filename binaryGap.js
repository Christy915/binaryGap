function binaryGap(n){
    let binary = n.toString(2)
    let curGap = 0
    let maxGap = 0
    let firstFound = false
    for (let i = 0; i < binary.length; i++){
      if(binary[i]===1){
        firstFound = true
      }
      while (firstFound){
        if (binary[i]=== 0){
              curGap++
              maxGap = max(maxGap, curGap)
            } else {
            curGap = 0
            }
      }
    }
 return maxGap
}

console.log(binaryGap(20))
