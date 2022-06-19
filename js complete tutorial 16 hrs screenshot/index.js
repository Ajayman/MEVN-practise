//var ajay;
//console.log(ajay);

const { callbackify } = require("util");

// var myCustomers = ["Ram", "Shyam", "Hari"];
// for(let customer of myCustomers) {
//     console.log(customer);
// }


// const funA = function(){
//     setTimeout(function(){
//         console.log("call funcA");
//     }, 3000);
// }

// const funB = function(){
//     console.log("call funcB");
// }

// funA();
// funB();

// const perOne = (friend, callFrend) => {
//     console.log(`I am busy righ now. I am talking to ${friend}. I will call back.`)
//     callFrend();
// }

// const perTwo = () => console.log(`Hey whats up i call back you dekha`);

// perOne("Hari", perTwo)

// here perTwo works as a call back function as the funciton is passed as an argument.


// const greet = (yourNamePlease) => {
//     console.log(`I am busy right now i will tell in 4 secs`);
//    yourNamePlease();
// }

// const sayName = () => {
//     console.log(`my name is Ram`);
// }

// greet(sayName)

const greet = (name, yourNamePlease) => {
    console.log(`Tell me your Name please`);
    yourNamePlease(name);
}

const sayName = (name) => {
    console.log(`My name is ${name}`);
}

setTimeout(greet, 3000,'Ram', sayName)
// sayName("Hari")



//Higer ouder function
// function which takes another funciton as an arguments is called HTMLFormControlsCollection

// CallBack function
// function which get pased as an argument to another function is called callbackify
