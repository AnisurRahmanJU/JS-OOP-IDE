class BankAccount {
  #balance;

  constructor(ownerName, initialBalance) {
    if (!ownerName || typeof ownerName !== "string") {
      throw new Error("Invalid owner name provided.");
    }
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative.");
    }
    this.owner = ownerName;
    this.#balance = initialBalance;
  }

  async deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount <= 0) {
          reject(new Error("Deposit amount must be greater than zero."));
        } else {
          this.#balance += amount;
          resolve(this.#balance);
        }
      }, 1000);
    });
  }

  getBalance() {
    return this.#balance;
  }

  setBalance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be set to a negative value.");
    }
    this.#balance = amount;
  }
}

class SavingsAccount extends BankAccount {
  #interestRate;

  constructor(ownerName, initialBalance, interestRate) {
    super(ownerName, initialBalance);
    if (interestRate < 0 || interestRate > 1) {
      throw new Error("Interest rate must be between 0 and 1.");
    }
    this.#interestRate = interestRate;
  }

  async addInterest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentBalance = this.getBalance();
        const interest = currentBalance * this.#interestRate;
        this.setBalance(currentBalance + interest);
        resolve(this.getBalance());
      }, 500);
    });
  }
}

async function runBankSystem() {
  try {
    const savings = new SavingsAccount("Alex Rivera", 1000.00, 0.05);
    console.log(`Owner: ${savings.owner}`);

    await savings.deposit(500);
    await savings.addInterest();
    
    console.log(`Final Balance: $${savings.getBalance().toFixed(2)}`);
  } catch (error) {
    console.error(`Caught Error: ${error.message}`);
  }

  try {
    const badSavings = new SavingsAccount("Taylor Swift", 500.00, 0.03);
    await badSavings.deposit(-200);
  } catch (error) {
    console.error(`Caught Error: ${error.message}`);
  }
}

runBankSystem();
