class Engineer {
    // Constructors
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    // Returns github info from input
    getGithub() {
        return this.github;
    };

    // Returns to engineer
    getRole() {
        return "Engineer";
    }
}

// Need to add export
module.exports = Engineer;