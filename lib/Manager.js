class Manager {
    // Constructors
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    // Returns name from input
    getName(){
        return this.name;
    };

    // Returns id from input
    getId() {
        return this.id;
    };

    // Returns email from input
    getEmail() {
        return this.email;
    };

    // Returns office number from input
    getOfficeNumber() {
        return this.officeNumber;
    };

    // Returns back manager
    getRole() {
        return "Manager";
    }
}

// Need to add export
module.exports = Manager;