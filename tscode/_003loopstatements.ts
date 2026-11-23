/*
 for (initialization; condition; increment/decrement){
   
 }
*/

 function factorial(){
    let num: number =5
    let fact: number =1;
    let i:number;
    for(i=num; i>=1;i--){
      //  fact = fact*i;
       fact *=i;
    }
    console.log(`factorial of ${num} is ${fact}`)
 }

 factorial()