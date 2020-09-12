//1
function add(a, b){
    return a + b;
}

var sub = function(a, b){
    return a - b;
};

var cb = function(a, b, callback){
    if(typeof a !== "number" || typeof a === "undefined"){
        return "a is not a number or is undefined";
    } else if ( typeof b !== "number" || typeof b === "undefined") {
        return "b is not a number or is undefined";
    } else if (typeof callback !== "function" || typeof callback === "undefined"){
        return "callback is not a function or is undefined";
    }
    else {
        return "Result from the two numbers: " + a + ", " + b + " = " + callback(a, b);
    }
};



//2
console.log( add(1,2) )     // What will this print?
//Prints 3
console.log( add )          // What will it print and what does add represent?
//Prints "[Function: add] because it is a function
console.log( add(1,2,3) ) ; // What will it print
//Prints 3
console.log( add(1) );      // What will it print    
//Prints NaN. Stands for "Not a number"
console.log( cb(3,3,add) ); // What will it print
//Prints 6. Calls the add function in the callback function.
console.log( cb(4,3,sub) ); // What will it print
//Prints 1. Call the sub function.
try{
console.log(cb(3,3,add())); // What will it print (and what was the problem)
//Prints "callback is not a function". Wrong argument given.
} catch(e) {
    console.error("Noget gik galt med callback");
}
console.log(cb(3,"hh",add));// What will it print
//Prints 3hh because it thinks 3 is a string.

//3

//4
function mul(a, b){
    return a * b;
}
console.log(cb(3,3,mul));

//5
var div = function(a,b){
    return a/b;
}
console.log(cb(2,4,div));

//Callbacks (With map, filter, forEach)
//1
var names = ["Lars", "Thomas", "Mathias", "Bob", "Ib", "Arne"];
var filtered = names.filter(n => n.length <= 3);
names.forEach(n => console.log(n));
filtered.forEach(n => console.log(n));

//2 
var mappedUpper = names.map(n => n.toUpperCase());

//3
var htmlString = function(array){
    var result = ["<ul>", "</ul>"];
    var li = array.map(n => "<li>" + n + "</li>");
    
    result.splice(1, 0, li.join(""));
    
    return result.join("");
}

console.log(htmlString(names));

//4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
//4a
var filteredCars1 = cars.filter(c => c.year > 1999);
var filteredCars2 = cars.filter(c => c.make == "Volvo");
var filteredCars3 = cars.filter(c => c.price < 5000);
//4b
var toSQL = function(array){
    var result = [];
    var stmt = array.map(car => "INSERT INTO cars (id,year,make,model,price) VALUES(" 
            + car.id + ","
            + car.year + ","
            + "\"" + car.make + "\","
            + "\"" + car.model + "\","
            + car.price + ","
            + ");");
    
    result.push(stmt.join(""));
    
    return result.join("");
}

console.log(toSQL(cars));

//Asynchronous Callbacks
//1
// I think that e and b comes after f, but e comes before b.
//2
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
// I was right.