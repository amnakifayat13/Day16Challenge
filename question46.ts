/* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year and a method
describe() that logs a sentence about the laptop*/

let laptop = {
    make : "hp",
    model: " Core i4",
    year: 2019,
    describe: function(){
        console.log(`This Laptop is ${this.make},${this.model} and ${this.year}. `);
    }
};
laptop.describe();