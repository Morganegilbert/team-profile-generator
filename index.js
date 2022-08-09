class Employee {
    // Constructors
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){};

    getId() {};

    getEmail() {};

    getRole() {
        return Employee;
    }
}

class Manager {
    // Constructors
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = this.officeNumber;
    }

    getName(){};

    getId() {};

    getEmail() {};

    getRole() {
        return Manager;
    }
}

class Engineer {
    // Constructors
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = this.github;
    }

    getName(){};

    getId() {};

    getEmail() {};

    getGithub() {};

    getRole() {
        return Engineer;
    }
}

class Intern {
    // Constructors
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = this.school;
    }

    getName(){};

    getId() {};

    getEmail() {};

    getSchool() {};
    
    getRole() {
        return Intern;
    }
}