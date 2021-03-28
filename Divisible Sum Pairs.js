function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    for(let i = 0; i < ar.length; i++){
        for(let j = i + 1; j < ar.length; j++){
            console.log(i, j);
            if(isDivisible(ar[i] + ar[j], k)){ //aqui teniamos (isDivisible(i + j, k) !!!
                                                //estabamos sumando los indices en vez de los valores                                                
            console.log("sum",ar[i],ar[j])
            counter++
            
            }
            
        }
    }
    console.log(counter)
    return counter 
}

function isDivisible (num,k){
    
    if(num % k === 0){
        return true
    }
    return false
}
