// Operator ek special symbol hota hai jo kisi value ya variable par operation perform karta hai.

// Example:

// let a = 10;
// let b = 5;

// console.log(a + b);

// Output:

// 15

// Yahan + ek operator hai.

// 1. Arithmetic Operators

// Mathematical calculations ke liye:

// Operator	Meaning	Example	Result
// +	Addition	10 + 5	15
// -	Subtraction	10 - 5	5
// *	Multiplication	10 * 5	50
// /	Division	10 / 5	2
// %	Remainder	10 % 3	1
// **	Power	2 ** 3	8
// 2. Assignment Operators

// Variable ko value assign/update karne ke liye:

// let x = 10;

// x += 5;  // x = x + 5
// x -= 2;  // x = x - 2
// x *= 2;  // x = x * 2
// x /= 2;  // x = x / 2
// x %= 3;  // x = x % 3
// 3. Comparison Operators

// Do values ko compare karte hain aur result true ya false hota hai.

// 10 == "10"   // true
// 10 === "10"  // false
// 10 != 5      // true
// 10 !== "10"  // true
// 10 > 5       // true
// 10 < 5       // false
// 10 >= 10     // true
// 10 <= 5      // false

// ⭐ Important: == sirf value compare karta hai, jabke === value + data type dono check karta hai.

// 10 == "10"    // true
// 10 === "10"   // false
// 4. Logical Operators

// Conditions ko combine karne ke liye:

// &&   // AND
// ||   // OR
// !    // NOT

// Example:

// let age = 20;

// console.log(age >= 18 && age <= 30);

// Output:

// true
// 5. Increment / Decrement
// let x = 5;

// x++;  // 6
// x--;  // 5
// ++ → value mein 1 add
// -- → value mein 1 subtract
// 6. Ternary Operator

// Short if/else ke liye:

// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);

// Output:

// Adult
// JavaScript operators ka basic classification
// Operators
// │
// ├── Arithmetic       + - * / % **
// ├── Assignment       = += -= *= /=
// ├── Comparison       == === != !== > < >= <=
// ├── Logical          && || !
// ├── Increment        ++
// ├── Decrement        --
// └── Ternary          ? :


let mode = "light";


if (mode == "light") {
 //console.log("black");
}
else{
 //   console.log("white");
}


//Alert("hello");

//let yourname  = prompt("input your name: ");
//console.log(yourname);

let Num = prompt("Input a number: ");

if (Num % 5 === 0){
    console.log(Num + " is a multiple of 5");
    
}
else{
    console.log(Num + " is not a multiple of 5");
}
