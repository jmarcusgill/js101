console.log("testing")


var userAge = 25;
var minutesInHour = 60;
var secondsInMinute = 60;
var hoursInDay = 24;
var weeksPerYear = 52;
var daysPerWeek = 7;
var yearsInDecade = 10;
var daysInYear = 365;

// 1. How many hours are in a year
var hoursPerYear = hoursInDay * daysInYear;
console.log(hoursPerYear);


// 2. How many minutes are in a decade
var minutesPerDecade = minutesInHour * hoursInDay * daysInYear * yearsInDecade;
console.log(minutesPerDecade);


// 3. How many seconds old they are
var secondsOld = secondsInMinute * minutesInHour * hoursInDay * userAge;
console.log(secondsOld);


// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young" (edited)
if (userAge > 35) {
  console.log("I'm old!")
} else {
  console.log("I'm young!")
}
