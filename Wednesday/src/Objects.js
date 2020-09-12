var house =  {door: "oak", floors: 2, basement: false, color: "PoopBrown"};

for(prop in house){
  console.log(prop,house[prop]);
}

delete house.basement;

for(prop in house){
  console.log(prop,house[prop]);
}

house.price = 1000;

for(prop in house){
  console.log(prop,house[prop]);
}

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    this.details = function(){return "Navn: " + this.firstName + " " + this.lastName + ", alder: " + this.age;};
};

let p = new Person("Mathias", "Nielsen", 24);

console.log(p.details());
