// function

function myfunction() {
    console.log("Hello my name is Ziyad: ");
    console.log("hola Amigo mi nombre es Ziyad");

}
// myfunction();


function vowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
            count++;
    }
    console.log(count);

}

// vowels("abcd");


const vow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
            count++;
    }
    console.log(count);
}

// vow("ziyadahmed")


// foreach loop 

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val * val);

});


let arra = ["Ziyad", "ali", "abdullah", "Zabit"];
arra.forEach((val) => {
    // console.log(val.toUpperCase());

})



//////////////////////////////////// MAP METHOD ///////////////////////////////////////////// 

// map() is a JavaScript array method that creates a new array by applying a function to each
// element.



//////////////////////////////////// FILTER METHOD ////////////////////////////////////////////

// filter() is a JavaScript array method that creates a new array containing elements that satisfy
// a condition.

// reduce() is a JavaScript array method that reduces all elements to a single value.




// Q1 
let marks = [67, 82, 45, 91, 73, 58, 99, 64, 76, 95];

let top = marks.filter((val) => {
    return val > 90;
})
console.log(top);


// Q2

let n = prompt("Enter a Number: ");

let array = [];

for (let i = 0; i <= n; i++) {
    array[i - 1] = i;

}

console.log(array);



// Higher-Order Function wo function hota hai jo:

// Kisi function ko argument ke طور پر receive kare, ya
// Kisi function ko return kare

// Yani:

// Function ko value ki tarah use karna.

// Example: forEach()
// let numbers = [10, 20, 30];

// numbers.forEach((num) => {
//     console.log(num);
// });

// Yahan forEach() ek Higher-Order Function hai, kyunki hum usko ek function de rahe hain:

// (num) => {
//     console.log(num);
// }

// Ye jo function hum forEach() ko de rahe hain usko callback function kehte hain.

// Easy diagram
// forEach()
//    ↓
// receives a function
//    ↓
// (callback function)
// Ek aur simple example
// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// Yahan calculate() ko operation naam ka function mil raha hai, isliye calculate() Higher-Order Function hai.

// Yaad rakhne ka formula 🧠
// HOF = Function that takes a function
//       OR
//       Function that returns a function