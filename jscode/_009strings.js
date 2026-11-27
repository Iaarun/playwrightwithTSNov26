/*
 String: sequence of characters  test khihji   k
 string are immutable
 there are two ways of creating a string - using literals, using constructor
*/

function stringbasics(){
    //using literals
    let s1 = "I love learning js."
    console.log(typeof s1)
    let s2 = 'this is string 2 ${s1}'
    let s3 = `this is 
            multi line 
            string data ${s2}`

    console.log(s1)
    console.log(s2)
    console.log(s3)
    let s4 = new String("Created using constructor")
    let s5 = new String("Created using constructor")

}

function stringexample(){

}
stringbasics()