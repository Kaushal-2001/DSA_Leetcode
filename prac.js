var summ = function (n) {
    let sum = 0
    for(let i = n; i=0; i--){
    sum = sum + n
    n = n -1
    summ(n)
    }
    return sum
} 
console.log(summ(5))