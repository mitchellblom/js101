
// 1. How many hours are in a year?

var hoursInYear = 365 * 24;
console.log("Hours in Year: ", hoursInYear);

// 2. How many minutes are in a decade?

var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var yearsPerDecade = 10;
console.log("There are " + minutesPerHour * hoursPerDay * daysPerYear * yearsPerDecade + " minutes in a decade.");

// 3. How many seconds old they are?

var userAgeYears = 26;
var secondsPerMin = 60;
var secondsOld = userAgeYears * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMin;
console.log("How many seconds old? ", secondsOld);

// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

if (userAgeYears > 80) {
	console.log("I'm old");
} else {
	console.log("I'm young");
}
