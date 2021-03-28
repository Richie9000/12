// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
let counter = 0;
for(let i = 0; i < ar.length; i++){
    for(let j = i + 1; j < ar.length; j++){
        if(i === j){
            
        }
        else if(isDivisible(i + j, k)){
          console.log("sum",ar[i],ar[j])
          counter++
        
        }
        
    }
}
console.log(counter)
return counter 
}

function isDivisible (num,k){
    
    if(num % k == 0){
        console.log(num,k)
        return true
    }
    return false
}
