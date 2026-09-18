// Array
const arr = [10,20,30,40,50];
// console.log(arr);
// console.log(arr.length);
 

// practice question 

let marks = [67, 77, 97, 83, 50];
let sum = 0; 
for (let index = 0; index < marks.length; index++) {
sum = sum + marks[index];
}
console.log("Sum = "+ sum);


let avg = sum/5; 
console.log("Avg " + avg);


/////////////////////////////// pract ice question 2 //////////////////////////////////////////////

let prices = [250, 645, 300, 900, 50];
let discount = 0;
console.log("Orignal price " + prices);
     console.log("Price After discount: "); 
for (const price of prices) {
    discount = price * 10 / 100;
   let  newprice = price - discount 
     console.log(newprice);
}

////////////////////////////////////// Array methods//////////////////////////////////////////////

// push(), add 


let names = ["Ziyad", "Zabit", "Zayan"]
names.push("Ayat");
// console.log(names);


// pop(),  delete

let deletedName = names.pop()
console.log(deletedName);

// toString()  
 
console.log(names.toString());
console.log(names);

// concat
let marvelHeros = ["thor" , "Spiderman" , "ironMan"];
let dcHeros =["Superman", "batman"];

let heroes = marvelHeros.concat(dcHeros); // concat() 
console.log(marvelHeros);

// unshift  addd to array 0 index 

names.unshift("Anas");
console.log(names);

// shift  delete to array 0 index 

 names.shift();
console.log(names);


  // slice never change in orignal array 


let Products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones", "Tablet", "Charger", "Webcam", "Speaker", "USB"];


console.log(Products.slice(3, 8));


  // splice change in orignal array 

 
Products.splice(2, 2, "spk" , "chrombook");
console.log(Products);

 

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log(companies);

companies.splice(1, 1, "Ola");

console.log(companies);
companies.push("Amazon");
console.log(companies);
