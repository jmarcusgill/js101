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

// var fruit = ["cherries", "apples", "bananas"];
// var fruitString = fruit.join(", ")
// console.log(fruitString)

// var catColors = "green,red,yellow,black";
// var catColorsArray = catColors.split(",")
// console.log(catColorsArray)

// var reverseFruit = fruit.reverse();
// console.log(reverseFruit)

// var alphaFruit = fruit.sort();
// console.log(alphaFruit);

// var nums = [9,6,8,2,4,11,66]; //2,4,6,8,9,11,66
// var numSort = nums.sort(function(a,b) {return a-b}); //to sort numbers by smallest to largest
// console.log(numSort);

// console.log(reverseFruit.indexOf("bananas"))

// var animals = ["cats", "turtles", "fish", "bears", "tigers"];

// // sclice - returns copy of what you ask it to. First one you don't want to include.
// var animals2 = animals.slice(2,4);
// console.log(animals2)

// //splice - removes from array and modifies the original. start at where you want to remove, and then however many you want to remove
// animals.splice(1,1);
// console.log(animals)

// var colors = ["red", "blue", "gold", "pink", "orange"];

// //sort, reverse, make a string

// var finalAnswer = colors.sort().reverse().join(" fish ");
// console.log(finalAnswer);

//For Loops
// for (var i = 0; i < 5; i++) {
//   console.log(i)


// }


// var fruit = ["cherries", "apples", "bananas"];
// for (var j = 0; j < fruit.length; j++) {
//   console.log("fruit", fruit[j])
// }

// write a for loop that increments by 10 each time = 10 times 10, 20, 30....100

for (var i = 0; i < 101; i+=10){
  console.log("i", i)
}


// for loop that pushes the index to an array for 5 times console.log (array) [0, 1, 2, 3, 4]
var myArray = [];

for (var i = 0; i < 5; i++) {
  myArray.push(i);
}

console.log("myArray ", myArray);


// for loop that starts by 100 and divides by 2 each time = 3 times  100,50,25
var num = 100;

for (var j = 0; j < 3; j++) {
  console.log("number: ", num);
  num = num / 2;
}











