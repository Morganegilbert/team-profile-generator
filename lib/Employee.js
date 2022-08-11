class Employee {
    // Constructors
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returns name from input
    getName(){
        return this.name;
    };

    // Returns ID from input
    getId() {
        return this.id;
    };

    // Returns email from input
    getEmail() {
        return this.email;
    };

    // Returns to employee
    getRole() {
        return "Employee";
    }
}

// Need to add export
module.exports = Employee;