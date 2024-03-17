/* Advanced Array Destructing:Given an array of objects representing different laptops, each with properties make,model
and year, use array destructing to assign the first and second laptops to variables. then log these variables */
var laptops = [
    { make: " Apple", model: "MacBook Pro", year: 2020 },
    { make: "hp", model: "corei4", year: 2019 },
    { make: "Dell", model: "Windows10", year: 2016 }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
