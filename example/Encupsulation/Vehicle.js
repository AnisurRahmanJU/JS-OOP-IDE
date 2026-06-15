class ElectricCar {
    // Private fields: Encapsulated data (cannot be accessed outside this class)
    #make;
    #model;
    #batteryCapacity;

    constructor(make, model, batteryCapacity) {
        this.#make = make;
        this.#model = model;
        this.#batteryCapacity = batteryCapacity;
    }

    // Private method to handle internal logic
    #calculateRange() {
        return this.#batteryCapacity * 5;
    }

    // Public method: Controlled access to protected data
    getInfo() {
        return `This is a ${this.#make} ${this.#model}.`;
    }

    // Public method: Controlled access to functionality
    displayDetails() {
        console.log(`[Vehicle Analysis Mode]`);
        return `${this.getInfo()} It has an estimated range of ${this.#calculateRange()} km.`;
    }
}

// Execution
console.log("--- Executing Vehicle OOP Flow ---");
const myCar = new ElectricCar("Tesla", "Model 3", 75);
console.log(myCar.displayDetails());

// Attempting to access private data directly would fail:
// console.log(myCar.#make); // SyntaxError: Private field must be declared in an enclosing class
