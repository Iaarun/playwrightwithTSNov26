/*
find the max  value from an array[45,34,87,15,34,29,54] / 87
find the second max value of an array = [45,34,87,15,34,29,54,34] /54
remove the duplicates from the sorted array 
 find the frquencies of a number in sorted array
 reverse an array
*/

function maxvalue(){
    let arr = [45,34,87,15,101,34,29,54]
    let maxnum=arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxnum){
            maxnum=arr[i]
        }
    }
    console.log(`Max number is ${maxnum}`)
}

function secondmax(){
    let arr = [45,34,87,15,34,29,54,34]
    let max = -Infinity
    let secondMax = -Infinity
    for(let num of arr){

        if(num>max){
            secondMax=max
            max=num
        }
        else if(num > secondMax && num !== max){
            secondMax = num
    }
}
 console.log(`Second max num is ${secondMax}`)
}
secondmax()