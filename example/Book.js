// parent class Book.js
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getBio() { return `"${this.title}" was written by ${this.author}.`; }
}

//child class Audiobook.js
class Audiobook extends Book {
    constructor(title, author, durationMinutes) {
        super(title, author);
        this.durationMinutes = durationMinutes;
    }
    getDurationHours() { return (this.durationMinutes / 60).toFixed(1); }
    displayDetails() {
        console.log(`[Media Analysis Mode]`);
        return this.getBio() + ` The audiobook format lasts ${this.getDurationHours()} hours.`;
    }
}

// Main.js
console.log("--- Executing Book OOP Flow ---");
const audio = new Audiobook("The Hobbit", "J.R.R. Tolkien", 660);
console.log(audio.displayDetails());
