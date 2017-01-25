// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable

var element = document.getElementById("sonnet")
var sonnet = element.innerHTML;
console.log("sonnet", sonnet);

// Find and output the starting position of the word "orphans"

console.log("Period at index: ", sonnet.indexOf("orphans"));

// Output the number of characters in the sonnet

console.log("Length:", sonnet.length);

// Replace the first occurance of the string "winter" with "yuletide"

var newPoem = sonnet.replace("winter", "yuletide");
console.log("Sonnet with replaced word: ", newPoem);

// Replace all occurances of the string "the" with "a large"

var largePoem = newPoem;
var find = "the";
var regex = new RegExp(find, "g");
console.log(largePoem.replace(regex, "a large"));

// Set the content of the sonnet div with the new string

element.innerHTML = largePoem.replace;