/*Combining Arrays with spread Operator: Suppose you are comparing prices of two different sets of laptops. use the
spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var priceSet1 = [1200, 1800, 1500];
var priceSet2 = [2100, 1900, 3000];
var combinedPrice = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrice);
