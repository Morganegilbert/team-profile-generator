// Need constants to require for library

// Need constant for page generation

// Constants for inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        // Start with "Please build your team"
        //What is the team manager's name?
    },
    {
        //What is the team manager's id?
    },
    {
        // What is the team manager's email?
    },
    {
        // What is the team manager's office number?
    },
    {
        // Next employee
        //Which type of team member would you like to add?
    },
    {
        // What is your engineer's name?
    },
    {
        // What is your engineer's id?
    },
    {
        // What is your engineer's email?
    },
    {
        // What is your engineer's GitHub username?
    },
    {
        // Next employee
        //Which type of team member would you like to add?
    },
    {
        // What is your intern's name?
    },
    {
        // What is your intern's id?
    },
    {
        // What is your intern's email?
    },
    {
        // what is your intern's email?
    }
]


// Function to write README file - will change to create index file
function writeToFile(fileName, readMeInfo) {
    fs.writeFile(fileName, readMeInfo, (err) => 
    err ? console.log(err) : console.log("Generating README...")
    )
}

// Function to initialize app and activate markdown function
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        let fileName = "index.html";
        let license = answers.license;
        let readMeInfo = generateMarkdown(answers, license);
        //Use user feedback for...
        writeToFile(fileName, readMeInfo);
    
    })
}

// Function call to initialize app
init();