// Function that returns card icons based on what is passed in - need to update
// function renderLicenseBadge(license) {

const Manager = require("../lib/Manager");

//   if (license === "MIT") {
//     let badgeValue = renderLicenseLink(license);
//     return badgeValue;
//   } else if (license === "GNU GPLv3") {
//     let badgeValue = renderLicenseLink(license);
//     return badgeValue;
//   } else if (license === "Apache License 2.0") {
//     let badgeValue = renderLicenseLink(license);
//     return badgeValue;
//   } else if (license === "Mozilla") {
//     let badgeValue = renderLicenseLink(license);
//     return badgeValue;
//   } else {
//     return '';
//   }
// }

// Function that returns the license link - need to update
// function renderLicenseLink(license) {
//   const map = new Map();

//   map.set('MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
//   map.set('GNU GPLv3', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
//   map.set('Apache License 2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
//   map.set('Mozilla', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
//   let badgeValue = map.get(license);
//   return badgeValue;
// }
// Function that returns the license section of README - need to update, maybe delete
// function renderLicenseSection(license) {
//   if (license === "MIT") {
//     return `
//     MIT License
//     A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
//   } else if (license === "GNU GPLv3") {
//     return `
//     GNU General Public License v3.0
//     Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
//   } else if (license === "Apache License 2.0") {
//     return `
//     Apache License 2.0
//     A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
//   } else if (license === "Mozilla") {
//     return `
//     Mozilla Public License 2.0
//     Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
//   } else {
//     return `No License Provided`;
//   }
// }

generateEmployee = (employeeGroup) => {
    console.log(JSON.parse(employeeGroup));

    return `
    <div class="card" style="width: 20px">
    <div class="card-header">
        ${employeeGroup.name} 
        ${employeeGroup.role}
    </div>
    <div class="card-list">
        <li class="">
        ${employeeGroup.id}
        </li>
        <li class="">
        ${employeeGroup.email}
        </li>
        <li class="">
        ${employeeGroup.officeNumber}
        </li>
    </div>
</div>
    `    
}

// Function to generate markdown for HTML
const generateHTML = function(employeeGroup) {
  return `
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />  
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
        />
        <link 
            rel="stylesheet" href="./assets/css/style.css" 
        />
        <title>Team Profile Generator</title>
  </head>
    <body>
    <h1 class="header">Team Profile Generator</h1>
    <div class="container">
        <div class="row">
            <div class="col">

                ${generateEmployee}
            </div>
        </div>
    </div>
    </body>
    </html>
`;
}

function teamCards(employeeGroup) {
    // Need to add array pulls for each employee
    cardArrays = [];

    for (let i = 0; i < employeeGroup.length; i++) {
        const employee = employeeGroup[i];
     // Manager array

    // Engineer arrays

    // Intern arrays       
    }



}

// Exports
module.exports = generateHTML;
