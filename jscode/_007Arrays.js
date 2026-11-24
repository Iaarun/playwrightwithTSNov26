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
    console.log(num2.lastIndexOf(94,4))
}


arraysearch()