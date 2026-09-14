// String

let str = "Ziyad Ahmed baloch";
//  console.log(str.length);
// console.log(str[6]);

//////////////////////////////////// template literals/////////////////////////////////////////

let obj = {
    name: "Ziyad",
    age: 21
}

// console.log("my name is " + obj.name + " and my age is " + obj.age);   // wrong

 let output = `my name is ${obj.name} and my age is ${obj.age}` // correct 
// console.log(output);
 
// String method in js 

str.toUpperCase();
// console.log(str); // methods never change a orignal string ❌

// console.log(str.toUpperCase()); // methods create a new string ✔

// String is also immutible 


let userName = prompt("Enter your User Name");

let user = "@" + userName + userName.length;

console.log(user);



























//  Escape	    Meaning	                Example
//   \n     	New line	           "Hello\nWorld"
//   \t	        Tab / space	           "Hello\tWorld"
//   \'	        Single quote	       'I\'m Ziyad'
//   \"	        Double quote	       "He said \"Hello\""
//   \\	        Backslash	           "C:\\Users\\Ziyad"
//   \b	        Backspace	           "Hello\b"
//   \r	        Carriage return        "Hello\rWorld "