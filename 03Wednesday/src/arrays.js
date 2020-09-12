//a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b
var all = boys.concat(girls);
console.log("Concat: " + all);

//c
console.log("Join, comma: " + all.join());
console.log("Join, -: " + all.join("-"));


//d
all.push("Lone","Gitte");
//e
all.unshift("Hans", "Kurt");
console.log("Push and unshift: " + all);

//f
all.shift();
//g
all.pop();
console.log("Shift and pop: " + all);

//h
all.splice(3, 2);
console.log("Splice: " + all);

//i
console.log("Reverse: " + all.reverse());

//j
all.sort();
console.log("Sort: " + all);

//k
all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log("Correct sort: " + all);

//l
var map = all.map(x => x.toUpperCase());
console.log("Map: " + map);
//m
let filter = map.filter(name => name.charAt(0) === "l" || name.charAt(0) === "L");
console.log("Filter: " + filter);