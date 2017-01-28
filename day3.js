console.log("day3");

//OBJECTS

var myCat = {
	tail: "long",
	age: 29,
	color: "blue",
	friends: ["zoe", "callan", "lauren"]
}

console.log("myCat before", myCat);

myCat.owner = "zoe"
console.log("myCat after", myCat);

console.log("Age of cat: ", myCat.age);
console.log("Color of cat: ", myCat["color"]);

for(var myKey in myCat) {						//prints out key objects within var
	console.log("myKey", myKey);
	console.log("values", myCat[myKey]);
}