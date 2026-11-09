const randomColor = function () {
   let hex = "0123456789ABCDEF";
   let color = "#";
for (let i = 0; i < 6 ; i++) {    
 color += hex[Math.floor(Math.random() * 16)];
 
}
  return color;

} 
 
let intervalId = null;

document.querySelector('#start').addEventListener('click', function () {
    if (intervalId === null) {
       intervalId = setInterval(function () {
      const rang =   document.body.style.backgroundColor = randomColor();
        console.log(rang);
        
       }, 500)
    }
})


document.querySelector('#stop').addEventListener('click', function () {

    clearInterval(intervalId);
    intervalId = null;
    console.log("stop intervalID");
    


})