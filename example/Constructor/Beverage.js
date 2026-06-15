class Beverage {
    // Non-parameterized: No arguments needed
    constructor() {
        this.name = "House Blend Coffee";
        this.temperature = "Hot";
    }

    getServingType() { 
        return `${this.name} is served best when it is ${this.temperature.toLowerCase()}.`; 
    }

    displayDetails() {
        console.log(`[Beverage Analysis Mode]`);
        return this.getServingType();
    }
}

console.log("--- Executing Beverage OOP Flow ---");
const drink = new Beverage(); // No arguments passed
console.log(drink.displayDetails());
