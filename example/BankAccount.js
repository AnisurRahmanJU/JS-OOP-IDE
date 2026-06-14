// parent class BankAccount.js
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    getStatus() { return `Account ${this.accountNumber} balance: $${this.balance}.`; }
}

// child class SavingsAccount.js
class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate; // annual percentage
    }
    calculateInterest() { return this.balance * (this.interestRate / 100); }
    displayDetails() {
        console.log(`[Financial Analysis Mode]`);
        return this.getStatus() + ` Annual generated interest will be $${this.calculateInterest()}.`;
    }
}

// Main.js
console.log("--- Executing BankAccount OOP Flow ---");
const savings = new SavingsAccount("ACT-4452", 5000, 4.5);
console.log(savings.displayDetails());
