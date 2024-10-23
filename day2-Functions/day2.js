//1. Function Declaration
function Welcome(name) {
    return `Hello, ${name}!`;
}
console.log(Welcome('Alishba')); 

//2. Function Expression
const sum = function(a, b) {
    return a + b;
};
console.log(sum(6,24)); 


//3. Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); 

const subtract = (a, b) => a - b;
console.log(subtract(3, 4)); 


//4. Anonymous Function
setTimeout(function() {
    console.log('This is an anonymous function');
}, 1000);

//5. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This function runs immediately!');
})();


const isEven = (a) => { 
    if(a%2===0){
        return "Even"
    }
    return "Odd"
}
console.log(isEven(3))


//console.log("the function expression result is:",functionexpression(10,15))
//console.log(add(3,5))