/*
 Arrays:  its an ordered list of data. 
 data storage assigned a numeric location to each element, it is called index
*/

function arraybasics(){
    //empty array
    let num =[];
    console.log(num)
    //creation and initialization of array
    let num1 = [12,87,646,54,35,48]
    console.log(typeof num1)
    console.log(num1)
    // create array using array constructor
    let num2 = new Array(15,94,34,94,8)
    console.log(num2)

    // access array element
    console.log(num2[0])
    console.log("length of array "+num2.length)
    console.log(num2[5])

    //store data in array
    num2[5]=10
    console.log(num2[5])
    num2[10]=120
    console.log(num2)
    console.log("length of array "+num2.length)

    console.log(num2[num2.length-1])

}

function arraypart2(){
    let num2 = new Array(15,94,34,94,8)
    console.log(num2)

    num2[1]=150
    console.log(num2)

    // push() function : always add data in the end os the array
    num2.push(325)
    console.log(num2)
    // unshift(): always add data in the begining of the array
    num2.unshift(412)
    console.log(num2)
    //splice() function
    num2.splice(2,0,175) 
    console.log(num2)

    // remove the data
    // pop() : remove the last element  of the array 
    num2.pop()
    console.log(num2)
    // shift() : remove the  first element of the array
     num2.shift()
    console.log(num2)
   // splice()
   num2.splice(2,4)
   console.log(num2)
  // create an array of 10 elements and remove 5 elements, starting from index 2  and display remaining elements
}

function arraysearch(){
    let num2 = new Array(15,105,34,94,8)
    console.log(num2)
    //indexOf()
   // console.log(num2.indexOf(94))
    console.log(num2.lastIndexOf(94))
    console.log(num2.lastIndexOf(94,4)) // search in the backward direction , starting from the specifed index
   //include(): return boolean
   console.log(num2.includes(131))
  
}

function arraySorting(){
    // let num2 = new Array(15,105,34,94,8,41,32)
    let num2=[15,105,34,94,8,41,32]
    console.log(`original array is: ${num2}`)
    // need to implement the comparison fucntion as sort function convertsnumber element to string
    //sort() modifies the origial array
    num2.sort((a,b)=> a-b) // numeric sort
    console.log(num2)
    // inreverse order
    num2.sort((a,b)=> b-a)
    console.log(num2)

    
    
    //tosorted()
   let num3=[15,105,34,94,8,41,32]
   let sortedarray=  num3.toSorted((a,b)=>a-b)
    console.log(num3)
    console.log(sortedarray)

    let fruits = ["Banana","Apple","Oranges","kiwi","Guava"]
    fruits.sort()
    console.log(`sorted fruits array ${fruits}`)
    fruits.reverse()
    console.log(`reverse sorted fruits array ${fruits}`)

    let fruits1 = ["Banana","Apple","Oranges","kiwi","Guava"]
    let reversefruits= fruits1.toReversed()
    console.log(fruits1)
    console.log(reversefruits)

    // impliment the reverse function in number array
    // sort the fruits array in reverse order
    // sort the array in random order

}
function combinearrays(){
    let num1 = [10,20,30]
    let num2 = [50,60,70]

    // using concat function
    let combinedarray = num1.concat(num2)
    console.log(combinedarray)
    // using spread operator
    let botharray = [...num1, ...num2]
    console.log(botharray)
}
 
function iterateoverarrays(){
    let cars = ["BMW","Audi","BYD","Volvo"]
    console.log("Normal for loop")
   // normal for loop works on indexes
    for(let i=0; i<cars.length; i++){
          console.log(cars[i])
    }
    // iterate overs ccars array using normal while loop

    console.log("=====While loop=====")
    let i=0;
    while(i<cars.length){
        console.log(cars[i])
        i++;
    }
    console.log("=====for ..of=====")
    // for.of works on the array elements
    for(let car of cars){
        console.log(car)
    }

    console.log("=====for in =====")
    // for ..in loop works to array index
    for(let car in cars){
        console.log(`${car}=> ${cars[car]}`)
    }
    
    console.log("=====for each =====")
    // in foreach loop it works on each element of array. index is the optional parameter
    cars.forEach((car, index) =>{
        console.log(`${index} => ${car}`)
    })
}

function arrayfunctions(){
    //map filter and reduce
    let numbers= [12,24,35,67,24,18,37,95]
     // print all event numbers from array
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2==0){
            console.log(numbers[i])
        }
    }
   
    console.log("-----using map function --------")
    numbers.map(num=>{
        if(num%2==0){
            console.log(num)
        }
    })

    let cars = ['bmw','toyota','byd','hyundai','maruti']
    let car1=  cars.map(car=>car.toUpperCase())
    console.log(car1)

    console.log("-----using filter function --------")
    numbers.filter(num=>{
        if(num%2 !=0){
            console.log(num)
        }
    })

   let arr= [-1,5,3,-5,5] // program to calculate the square of positive number
   let words =['lion','tiger','elephant','fox','giraffe']
   // convert the words with more tha 4 letter , into uppercase 

}
arrayfunctions()
