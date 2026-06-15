// 1. Simulated Abstract Class (Enforces a "contract")
class AbstractUser {
    constructor() {
        if (this.constructor === AbstractUser) {
            throw new Error("Cannot instantiate abstract class 'AbstractUser' directly.");
        }
    }
    
    // Abstract methods: these must be implemented by the class that "uses" this
    getProfile() { throw new Error("Method 'getProfile()' must be implemented."); }
}

// 2. Admin Class (Does not use 'extends')
class Admin {
    constructor(username, email, permissions) {
        // Enforce the abstract constraint
        this.abstractContract = new AbstractUser(); 
        
        this.username = username;
        this.email = email;
        this.permissions = permissions;
    }

    // Implementation of the contract
    getProfile() {
        return `User Profile: ${this.username} (${this.email}).`;
    }

    displayDetails() {
        console.log(`[Security Analysis Mode]`);
        return `${this.getProfile()} Total authorized system permissions: ${this.permissions.length}.`;
    }
}

// 3. Execution
console.log("--- Executing User OOP Flow (No Inheritance) ---");
const sysAdmin = new Admin("root_user", "admin@domain.com", ["read", "write", "delete"]);
console.log(sysAdmin.displayDetails());
