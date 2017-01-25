// switch statements

// var day = "Friday"

// switch(day) {
//   case "Monday":
//     console.log("Boooooo");
//     break;
//   case "Friday":
//     console.log("PARTAYYYY")
//     break;
//   default:
//     console.log("not monday");
// }

var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join(", ")
console.log(fruitString)

var catColors = "green,red,yellow,black";
var catColorsArray = catColors.split(",")
console.log(catColorsArray)

var reverseFruit = fruit.reverse();
console.log(reverseFruit)

var alphaFruit = fruit.sort();
console.log(alphaFruit);

var nums = [9,6,8,2,4,11,66]; //2,4,6,8,9,11,66
var numSort = nums.sort(function(a,b) {return a-b}); //to sort numbers by smallest to largest
console.log(numSort);

console.log(reverseFruit.indexOf("bananas"))

var animals = ["cats", "turtles", "fish", "bears", "tigers"];

// sclice - returns copy of what you ask it to. First one you don't want to include.
var animals2 = animals.slice(2,4);
console.log(animals2)

//splice - removes from array and modifies the original. start at where you want to remove, and then however many you want to remove
animals.splice(1,1);
console.log(animals)

var colors = ["red", "blue", "gold", "pink", "orange"];

//sort, reverse, make a string

var finalAnswer = colors.sort().reverse().join(" fish ");
console.log(finalAnswer);














