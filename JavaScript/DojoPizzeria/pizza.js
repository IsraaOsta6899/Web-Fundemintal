// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
// crustType, sauceType, cheeses, and toppings.
function pizzaOven(crustType,sauceType,cheeses,toppings){
    var Pizza={  
    };
    Pizza.crustType=crustType;
    Pizza.sauceType=sauceType;
    Pizza.cheeses=cheeses;
    Pizza.toppings=toppings

    return Pizza;
}

var pizza1=console.log(pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"]));
var Pizza2=console.log(pizzaOven("hand tossed", "marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]));
var Pizza3=console.log(pizzaOven("deep dish", "marinara",["mozzarella", "feta","white Cheese"],["pepperoni", "sausage","mushrooms","onions"]));
var Pizza4=console.log(pizzaOven("hand tossed", "marinara",["mozzarella", "feta","yellow Cheese"],["mushrooms", "olives", "onions" , "checken"]));


function randomPizza( crustType ,sauceType,cheeses,toppings){
var random1=Math.floor(Math.random() * crustType.length-1) + 1;
console.log("randome1="+random1);
var random2=Math.floor(Math.random() * sauceType.length-1) + 1;
console.log("2="+random2);

var numberOfCheeses=Math.floor(Math.random() * cheeses.length-1) + 1;
console.log("3="+numberOfCheeses);

var numberOfToppings=Math.floor(Math.random() * toppings.length-1) + 1;
console.log(numberOfToppings);

var randomPizza={
    "crustType":"",
    "sauceType":"",
    "cheeses":[],
    "toppings":[]
}
var cheses=[];
for(var i=0;i<numberOfCheeses;i++){
    cheses.push(cheeses[i]);
}
var toppings=[];
for(var i=0;i<numberOfToppings;i++){
    toppings.push(toppings[i]);
}

randomPizza.crustType=crustType[random1];
randomPizza.sauceType=sauceType[random2];
randomPizza.cheeses=cheses;
randomPizza.toppings=toppings;
return randomPizza;
}

var crustType=["hand tossed","deep dish"];
var sauceType=["marinara","traditional"];
var cheeses=["mozzarella", "feta","white Cheese","yellow Cheese"];
var toppings=["pepperoni", "sausage","mushrooms","onions"];
console.log(randomPizza(crustType,sauceType,cheeses,toppings));
console.log(randomPizza(crustType,sauceType,cheeses,toppings));