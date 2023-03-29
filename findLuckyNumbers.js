// Write your code below this line.

function luckyNumbers(n){
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let result = []
    for (let i=0; i<n; i++){
        let j = Math.floor(Math.random() * arr.length)
        result.push(arr[j])
        arr.splice(j, 1)
    }
    return result
}


console.log(luckyNumbers(4))