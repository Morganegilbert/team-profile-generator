// Need constants to require for library
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Need constant for page generation
const generateMarkdown = require("./src/generateHTML")
// Constants for inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Const for Employees
const employeeGroup = [];

// Constant for manager questions
const questionsManager = [
    // console.log('Please build your team.'),
    //Questions for Manager

    {
        //What is the team manager's name?
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        //What is the team manager's id?
        type: "input",
        name: "id",
        message: "What is the team manager's id?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        // What is the team manager's email?
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        // What is the team manager's office number?
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
]

// Adds member
const addMember = [
    {
        //Would you like to add another employee?
        type: "list",
        name: "addMembers",
        message: "Would you like to add another employee?",
        choices: ['yes', 'no']
    }
]
// Chooses employee role
const chooseRole = [
    {
        // Next employee
        //Which type of team member would you like to add?
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern']
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
]

// Constant for engineer questions
const questionsEngineer = [

    // Questions for Engineer

    {
        // What is your engineer's name?
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        // What is your engineer's id?
        type: "input",
        name: "id",
        message: "What is your engineer's id?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        // What is your engineer's email?
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        // What is your engineer's GitHub username?
        type: "input",
        name: "github",
        message: "What is your engineer's GitHub username?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
]

// Constant for intern questions
const questionsIntern = [

    // Questions for Intern
    {
        // What is your intern's name?
        type: "input",
        name: "name",
        message: "What is your intern's name?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        // What is your intern's id?
        type: "input",
        name: "id",
        message: "What is your intern's id?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        // What is your intern's email?
        type: "input",
        name: "email",
        message: "What is your intern's email?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    },
    {
        // What is your intern's school?
        type: "input",
        name: "school",
        message: "What is your intern's school?",
        // validate: usernameInput => {
        //     if (usernameInput) {
        //       return true;
        //     } else {
        //       console.log('You need to enter a GitHub username!');
        //       return false;
        //     }
        //   }
    }
]


// Function to write README file - will change to create index file
function writeToFile(fileName, htmlInfo) {
    fs.writeFile(fileName, htmlInfo, (err) => 
    err ? console.log(err) : console.log("Generating Team...")
    )
}

// Function to initialize app and activate markdown function
function init() {
    console.log("Please build your team.");
    inquirer.prompt(questionsManager)
    // pushes manager info
    .then((managerInfo) => {
        const {name, id, email, officeNumber} = managerInfo;
    
        employeeGroup.push(Manager, managerInfo);
        console.log(employeeGroup)
    })
    .then(function(managerInfo) {
        addEmployee(managerInfo) 

    })
}

// function for additional employees
function addEmployee(managerInfo, employeeGroup) {
      // Asks if user wants to add additional employee
        inquirer.prompt(addMember)
        .then((addMember) => {
            let addMembers = addMember.addMembers;
            if (addMembers === "yes") {
                newEmployee();
            } else {
                    let fileName = "./dist/index.html";
                    // let license = answers.license;
                    let htmlInfo = generateMarkdown(managerInfo, employeeGroup);
                    
                    //Use user feedback for...
                    writeToFile(fileName, htmlInfo);
                }              
        })

            
}

// then moves to next employee
function newEmployee() {
    inquirer.prompt(chooseRole)
    .then((chooseRole) => {
        let role =chooseRole.role;

        if (role === "Engineer") {
            inquirer.prompt(questionsEngineer)
            .then(function() {
                addEmployee();
            })
        } else {
            inquirer.prompt(questionsIntern)
            .then(function() {
                addEmployee();
            })
        }
        
    })
}
    // .then(function({chooseRole}) {
    //     console.log("Made it to role!")l
    //     inquirer.prompt(chooseRole);
    // }) 




// Function call to initialize app
init();