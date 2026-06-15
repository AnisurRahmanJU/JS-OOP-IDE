class Asset {
  #serial; 

  constructor(serialOrInstance, model, status = "Available") {
    if (serialOrInstance instanceof Asset) {
      this.#serial = serialOrInstance.getSerial();
      this.model = serialOrInstance.model;
      this.status = serialOrInstance.status;
      return;
    }
    this.#serial = serialOrInstance;
    this.model = model;
    this.status = status;
  }

  getSerial() { return this.#serial; }
  setSerial(newSerial) { this.#serial = newSerial; }
}

class Employee {
  #id; 

  constructor(idOrInstance, name, role) {
    if (idOrInstance instanceof Employee) {
      this.#id = idOrInstance.getId();
      this.name = idOrInstance.name;
      this.role = idOrInstance.role;
      this.assignedAssets = []; 
      return;
    }
    this.#id = idOrInstance;
    this.name = name;
    this.role = role;
    this.assignedAssets = []; 
  }

  getId() { return this.#id; }
  setId(newId) { this.#id = newId; }

  assignHardware(asset) {
    if (asset.status !== "Available") {
      console.log(`${asset.model} is ${asset.status}.`);
      return false;
    }
    asset.status = "Assigned";
    this.assignedAssets.push(asset);
    console.log(`Assigned to ${this.name}.`);
    return true;
  }
}

class ITTicket {
  #id; 

  constructor(idOrInstance, issue, priority, assignedTo = null) {
    if (idOrInstance instanceof ITTicket) {
      this.#id = idOrInstance.getId();
      this.issue = idOrInstance.issue;
      this.priority = idOrInstance.priority;
      this.status = idOrInstance.status;
      this.assignedTo = idOrInstance.assignedTo;
      return;
    }
    this.#id = idOrInstance;
    this.issue = issue;
    this.priority = priority; 
    this.status = "Open";     
    this.assignedTo = assignedTo; 
  }

  getId() { return this.#id; }
  setId(newId) { this.#id = newId; }

  advanceWorkflow(newStatus) {
    if (this.status === "Resolved") {
      console.log(`Already Resolved.`);
      return false;
    }
    if (newStatus === "In Progress" && !this.assignedTo) {
      console.log(`Needs Admin assigned.`);
      return false;
    }
    this.status = newStatus;
    console.log(`Status: ${this.status}`);
    return true;
  }
}

const emp1 = new Employee(101, "Alice", "IT Admin");
const laptop1 = new Asset("SN-99", "MacBook");
const laptop2 = new Asset(laptop1); 
laptop2.setSerial("SN-100");

// Execution triggers exactly 5 explicit console logs
emp1.assignHardware(laptop1);
emp1.assignHardware(laptop1);
const ticket = new ITTicket(1, "Fix WiFi", "High");
ticket.advanceWorkflow("In Progress");
ticket.assignedTo = emp1;
ticket.advanceWorkflow("In Progress");
ticket.advanceWorkflow("Resolved");
ticket.advanceWorkflow("In Progress");
