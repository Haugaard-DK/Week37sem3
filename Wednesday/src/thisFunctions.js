function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this
    //
  },2000);
}
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this

var p = new Person("Lars Mortensen");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different?

//Store a reference to the outer this
function PersonSelf(name){
  this.name = name;
  var self = this;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+self.name);  
  },2000);
}


//Using the bind(..) function
function PersonBind(name){
  this.name = name;  
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  
  }.bind(this),2000);
}

var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);
