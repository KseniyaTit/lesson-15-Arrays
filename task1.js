


function numbers (num1,num2){
    let arr = []
    for(num1; num1 > 0; num1--){
        arr.push(Math.floor(Math.random() * (num2+1)))
    }
    return arr
}
////
numbers(10,4)




