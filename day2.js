//switch statement

var day = "Friday";

switch(day) {
	case "Monday":
		console.log("Booooo");
		break;
	case "Friday":
		console.log("PARTAYYY");
		break;
	default: 
		console.log("not Monday")
}

if(day === "Monday") {
	console.log("Booooo");
} else if(day === "Friday"){
	console.log("PARTAYYY");
} else {
	console.log("not Monday")
}