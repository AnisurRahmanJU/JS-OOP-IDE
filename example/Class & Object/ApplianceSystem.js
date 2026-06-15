class Refrigerator {
    constructor(brand, powerRating, capacity) {
        this.brand = brand;
        this.powerRating = powerRating;
        this.capacity = capacity;
    }

    // Encapsulated logic
    getSpecs() {
        return `This ${this.brand} appliance uses ${this.powerRating}W.`;
    }

    calculateDailyUsage() {
        return (this.powerRating * 24) / 1000;
    }

    displayDetails() {
        console.log(`[Appliance Analysis Mode]`);
        return `${this.getSpecs()} It consumes approx ${this.calculateDailyUsage()} kWh per day.`;
    }
}

const fridge = new Refrigerator("Samsung", 150, 400);
console.log(fridge.displayDetails());
