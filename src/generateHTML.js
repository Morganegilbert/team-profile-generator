// Generates each employee instance and adds into html
generateEmployee = (employeeGroup) => {
    console.log("This is my parsed employee group", employeeGroup);
    let option = "unknown";
    if (employeeGroup.role === "Manager") {
        option = employeeGroup.info.officeNumber;
        optionText = "Office Number:";
        optionLink = 'href="tel:' + employeeGroup.info.officeNumber+ '"';

    } else if (employeeGroup.role === "Engineer") {
        option = employeeGroup.info.github;
        optionText = "GitHub:";
        optionLink = 'href="https://github.com/' + employeeGroup.info.github + '"';

    } else {
        option = employeeGroup.info.school;
        optionText = "School:";
        optionLink = "";
    }

    // returns html with team data
    return `
    <div class="card" style="box-shadow: 5px; margin: 10px 20px; width: 20vw">
    <div class="card-header bold" style="background-color: lavender;">
        ${employeeGroup.info.name} 
        </br>
        ${employeeGroup.role}
    </div>
    <ul class="card-body">
        <div class="id" style="margin-top: 10px;">
        ID: ${employeeGroup.info.id}
        </div>
        <div>Email:
        <a class="email" style="margin-top: 10px;" href="mailto:${employeeGroup.info.email}">
        ${employeeGroup.info.email}
        </a>
        </div>
        <div>${optionText}
        <a class="option" style="margin-top: 10px;" ${optionLink}>
        ${option}
        </a>
        </div>
    </ul>
</div>
    `    
}

// Function to generate markdown for HTML
const generateHTML = function(employeeGroup) {
    // Returns HTML with the teamcards function activated
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
        <title>Team Profile Generator</title>
  </head>
    <body>
    <h1 class="jumbotron" style="text-align: center; background-color: SlateBlue;">Team Profile Generator</h1>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card-deck">
                ${teamCards(employeeGroup)}
            </div>
        </div>
    </div>
    </body>
    </html>
`;
}

// function that pulls data for each instance
function teamCards(employeeGroup) {
    // Need to add array pulls for each employee
    console.log("This is teamcard", employeeGroup);
    let results = "";

    for (let i = 0; i < employeeGroup.length; i++) {
        console.log("Made it to the loop", employeeGroup[i]);
        results += generateEmployee(employeeGroup[i]);
    }
    return results;
}

// Exports
module.exports = generateHTML;
