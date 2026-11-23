"use strict";
/*
 for (initialization; condition; increment/decrement){
   
 }
*/
function factorial() {
    let num = 5;
    let fact = 1;
    let i;
    for (i = num; i >= 1; i--) {
        //  fact = fact*i;
        fact *= i;
    }
    console.log(`factorial of ${num} is ${fact}`);
}
factorial();
