function binaryGap(n){
  let binary = n.toString(2)
  console.log(binary)
  let curGap = 0
  let maxGap = 0
  if (n == 0){
    maxGap = 0
  }else{
    for (let i = 1; i<binary.length; i++){
      if (binary[i]== 0){
        curGap++
      }else{
        maxGap = Math.max(maxGap, curGap)
        curGap = 0
      }
    }
  return maxGap 
  }
}
  
console.log(binaryGap(16))
