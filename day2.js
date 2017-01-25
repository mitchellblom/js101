// //switch statement

// var day = "Friday";

// switch(day) {
// 	case "Monday":
// 		console.log("Booooo");
// 		break;
// 	case "Friday":
// 		console.log("PARTAYYY");
// 		break;
// 	default: 
// 		console.log("not Monday")
// }

// if(day === "Monday") {
// 	console.log("Booooo");
// } else if(day === "Friday"){
// 	console.log("PARTAYYY");
// } else {
// 	console.log("not Monday")
// }


// ARRAYS

var fruit = ["cherries", "apples", "bananas"];

var fruitString = fruit.join(" cats ")

console.log("fruitString", fruitString);

var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(",");
console.log("catColorsArray", catColorsArray);

var reverseFruit = fruit.reverse();
console.log("reverseFruit", reverseFruit)

var alphaFruit = fruit.sort();
console.log("alphaFruit", alphaFruit);

var nums = [9,6,8,2,4,11,66]; // 2,4,6,8,9,11,66 is what i want
var numSort = nums.sort(function(a,b){return a-b});
console.log("numSort", numSort);

var mixedCrap = ["r", "m", 33, 9];
console.log("???", mixedCrap.sort());

var animals = ["cats", "turtles", "fish", "bears", "tigers"];
console.log("fish index", animals.indexOf("fish"));

var animals2 = animals.slice(2, 4);
console.log("animals2", animals2);

animals.splice(1,1);
console.log("noturtles", animals);



// push
// pop
// shift
// unshift