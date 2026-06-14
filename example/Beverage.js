// parent class Beverage.js
class Beverage {
    constructor(name, temperature) {
        this.name = name;
        this.temperature = temperature; // e.g., "Hot", "Cold"
    }
    getServingType() { return `${this.name} is served best when it is ${this.temperature.toLowerCase()}.`; }
}

// child class Coffee.js
class Coffee extends Beverage {
    constructor(name, temperature, espressoShots) {
        super(name, temperature);
        this.espressoShots = espressoShots;
    }
    getCaffeineLevel() { return this.espressoShots * 64; } // approx mg per shot
    displayDetails() {
        console.log(`[Beverage Analysis Mode]`);
        return this.getServingType() + ` This custom drink contains roughly ${this.getCaffeineLevel()}mg of caffeine.`;
    }
}

// Main.js
console.log("--- Executing Beverage OOP Flow ---");
const latte = new Coffee("Vanilla Latte", "Hot", 2);
console.log(latte.displayDetails());
