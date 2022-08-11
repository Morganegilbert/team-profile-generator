// Function that returns card icons based on what is passed in - need to update
// function renderLicenseBadge(license) {

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

// Function to generate markdown for HTML
const generateHTML = function(cards) {
  return `
    <!DOCTYPE html>
`;
}

// Exports
module.exports = generateHTML;
