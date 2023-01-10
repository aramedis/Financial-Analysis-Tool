

/* * The total number of months included in the dataset. */
var totalMonths = dataset.length;
console.log("Total Months:" + totalMonths);

/* * The net total amount of Profit/Losses over the entire period. */
var totalProfitLosses = 0;

for (var i = 0; i < dataset.length; i++) {
  totalProfitLosses += dataset[i][1];
}
console.log("Total: $" + totalProfitLosses);



// Create Change Array

let change = [];

for (let i = 0; i < dataset.length - 1; i++) {
    let diffPerMonth = 0;
    diffPerMonth = dataset[i + 1][1] - dataset[i][1];
    change.push(diffPerMonth);
}


// Calculate Avg Change
var totalChange = 0;
for (var i = 0; i < change.length; i++) {
  totalChange += change[i];
}
avgChange = totalChange / change.length;
let avgChangeR = avgChange.toFixed(2)
console.log("Average Change: $" + avgChangeR);


/* * The greatest increase in profits (date and amount) over the entire period. */
var greatestIncrease = 0;
var increaseDate = 0;
for (var i = 0; i < change.length; i++) {
  if (change[i] > greatestIncrease) {
    greatestIncrease = change[i];
    increaseDate = dataset[i+1][0];
  }
}
console.log("Greatest Increase in Profits: " + increaseDate , "($" + greatestIncrease + ")");

/* * The greatest decrease in profits (date and amount) over the entire period. */
var greatestDecrease = 0;
var decreaseDate = 0;
for (var i = 0; i < change.length; i++) {
  if (change[i] < greatestDecrease) {
    greatestDecrease = change[i];
    decreaseDate = dataset[i+1][0];
  }
}
console.log("Greatest decrease in Profits: " + decreaseDate , "($" + greatestDecrease + ")");