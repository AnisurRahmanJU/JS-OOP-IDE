// parent class User.js
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    getProfile() { return `User Profile: ${this.username} (${this.email}).`; }
}

// child class Admin.js
class Admin extends User {
    constructor(username, email, permissions) {
        super(username, email);
        this.permissions = permissions; // array of strings
    }
    hasPermission(perm) { return this.permissions.includes(perm); }
    displayDetails() {
        console.log(`[Security Analysis Mode]`);
        return this.getProfile() + ` Total authorized system permissions: ${this.permissions.length}.`;
    }
}

// Main.js
console.log("--- Executing User OOP Flow ---");
const sysAdmin = new Admin("root_user", "admin@domain.com", ["read", "write", "delete"]);
console.log(sysAdmin.displayDetails());
