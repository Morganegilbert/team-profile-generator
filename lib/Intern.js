class Intern {
    // Constructors
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    // Returns school from input
    getSchool() {
        return this.school;
    };
    
    // Returns to intern
    getRole() {
        return "Intern";
    }
}

// Need to add export
module.exports = Intern;