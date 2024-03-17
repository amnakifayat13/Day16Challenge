/* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year and a method
describe() that logs a sentence about the laptop*/
var laptop = {
    make: "hp",
    model: " Core i4",
    year: 2019,
    describe: function () {
        console.log("This Laptop is ".concat(this.make, ",").concat(this.model, " and ").concat(this.year, ". "));
    }
};
laptop.describe();
