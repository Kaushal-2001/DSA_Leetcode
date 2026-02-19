var SelectionSort = function (arr) {
    let n = arr.length
    for(let i=0; i<n - 1; i++){
        let min = i ;
        for(let j=i+1; j<n; j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }
        if(arr[min]!= arr[i]){
            let temp
            temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(SelectionSort([10,3,2,1,8,6]))