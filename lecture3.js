
// for (let index = 0; index <= 10; index++) {
//   //  console.log(index);  
// }

// for (let index = 0; index <= 10; index++) {
//   //  console.log("i love js");  
// }

// // Calculate the sum 

// let sum = 0;

// for (let index = 0; index <= 10; index++) {
//     sum = sum +  index;
// }
// // console.log("Sum " + sum); 
// // console.log("Loop Ended");

// // for of loop use arrays or strings ke liye hota hai, for in loop objects ke liye hota hai.

// let str = "Ziyad Ahmed";

// for(let i of str) {
//  //   console.log("i = " + i);
// }

// // for in loop use object ke liye hota hai, aur ye keys ko iterate karta hai.

// let student = {
//     name: "Ziyad",
//     age: 20,
//     city: "Karachi"
// }

// for(let i in student) {
//     // console.log(i + " = " + student[i]);
// }


// //practice Q1:

// for (let index = 0; index <= 100; index++) {
// if (index % 2 == 0 ) {
//     // console.log(index);   
// }
// }

//Practice Q2:

let num = 13;

let guessNum = Number(prompt("Guess the Number 1 to 20"));

while (num !== guessNum) {

    guessNum = Number(prompt("Wrong! Guess again:"));

}

console.log("Congratulations! You Win!");

// 1. while loop

// while mein pehle condition check hoti hai, phir code execute hota hai.

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// Output:

// 1
// 2
// 3
// 4
// 5

// Flow:

// Condition check
//      ↓
//    true?
//    /   \
//  yes    no
//  ↓       ↓
// Code    Stop
//  ↓
// i++
//  ↓
// Condition check again

// Agar condition starting mein hi false ho:

// let i = 10;

// while (i <= 5) {
//     console.log(i);
// }

// Kuch bhi print nahi hoga, kyunki condition pehle check hui aur 10 <= 5 false hai.

// 2. do...while loop

// do...while mein pehle code execute hota hai, phir condition check hoti hai.

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// Output:

// 1
// 2
// 3
// 4
// 5

// Agar starting mein condition false bhi ho:

// let i = 10;

// do {
//     console.log(i);
// } while (i <= 5);

// Output:

// 10

// Kyunki do...while kam az kam ek baar zaroor execute hota hai.