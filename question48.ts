/*Combining Arrays with spread Operator: Suppose you are comparing prices of two different sets of laptops. use the 
spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/

let priceSet1 = [1200, 1800, 1500];
let priceSet2 = [2100, 1900, 3000];
let combinedPrice = [...priceSet1, ...priceSet2].sort((a, b) =>  a-b);
console.log(combinedPrice);
