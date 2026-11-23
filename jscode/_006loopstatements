/*
loops: to repeat the code execution to know number of times
for 
while 
do-while
for.. of 
for .. in

for(counter initialization; condition; increment/decrement){
  code block
}

*/

function forloop(){
    for(let i=1; i<=5; i++){
        console.log("Hello world!!!")
    }
}


// nested for loop - outer loop is for rows and inner for loop is for columns
 function nestedforloop(){
  for(let i=1; i<=5; i++){
    let pattern =""
    for(let j = 1; j<=4; j++){
        pattern += "* " // * * * * 
    }

    console.log(pattern)
  }

 }
// print table of any number taking input from the user

function nestedforloop2(){
  for(let i=1; i<=5; i++){
    let pattern =""
    for(let j = 1; j<=i; j++){
        pattern += "* " // * * * * 
    }
    console.log(pattern)
  }

 }
function nestedforloop3(){
    let num=5;
  for(let i=1; i<=5; i++){
    let pattern =""
    for(let j = 0; j<=num-i; j++){
        pattern += "* " // * * * * 
    }

    console.log(pattern)
  }

 }
function nestedforloop4(){
    let num=5;
  for(let i=1; i<=5; i++){
    let pattern =""
    for(let j = 1; j<=num-i; j++){
        pattern += " " // adding white space
    }
    for(let k=1; k<=i; k++){
        pattern +="*"
    }

    console.log(pattern)
  }

 }
/*
 while loop: -  use when no of iteration are unknown

 initialization;
 while(condition){
   code
   increment/decrement
 }
*/

function whileloop(){
    let i=1;
    while(i<=5){
        console.log("Hello world!!!")
        i--;
    }
}
const prompt= require("prompt-sync")()

function guessThenumber(){
    let secretNumber=5;
    let guessNumber = Number(prompt("Say your number 1-10 "))
    while(guessNumber !== secretNumber){
        if(guessNumber>secretNumber){
            guessNumber = Number(prompt("Number is high Try again"))
        }else{
             guessNumber = Number(prompt("Number is low Try again"))
        }
    }
    console.log("You guessed the correct number")
}

function dowhile(){
    let i=1
    do{
        console.log("Hello World!!");
        i++;
    }while(i>=5)
}

// for ...of and for ...in

function forinloop(){
    let num = "svkjhfkdv"
     const user = {
        name:'Arun',
        age:'35',
        city:'Bengaluru'
     }
     for(let key in user){
      //  console.log(key +":"+user[key])
      console.log(`${key} : ${user[key]}`)
     }
}

function forofloop(){
    const user = {
        name:'Arun',
        age:'35',
        city:'Bengaluru'
     }
     for(let [key, value] of Object.entries(user)){
      //  console.log(key +":"+user[key])
      console.log(`${key} : ${value}`)
     }
}

function foreachloop(){
   const user = {
        name:'Arun',
        age:'35',
        city:'Bengaluru'
     }
     Object.entries(user).forEach(([key, value])=>{
        console.log(`${key} : ${value}`)
     }) 
}

foreachloop()