let n = Number(prompt("Enter a Number: "));

let newss = [];

for (let i = 1; i <= n; i++) {
    newss[i - 1] = i;
}

console.log(newss);