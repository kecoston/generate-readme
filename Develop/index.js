const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      message: "What is the title of your project?",
      type: "input",
      name: "title"
    },
    {
      message: "What does your application do?",
      type: "input",
      name: "description"
    },
    {
      message: "Are there any other programs or information that is needed to be installed for this application to function?",
      type: "input",
      name: "instillation"
    },
    {
      message: "Please provide a step by step guide on how a user would run this application.",
      type: "input",
      name: "userstory"
    },
    {
      message: "Are there any contribution guidelines for this project?",
      type: "input",
      name: "contribution"
    },
    {
      message: "Are there any test instructions for this application?",
      type: "input",
      name: "test"
    },
    {       
      message: "What type of liscense would you like to add to this README?",
      type: "list",
      name: "license",
      choices: [
        "Creative Commons",
        "GNU General Public License",
        "MIT License",
        "ISC License",
        "Apache License"
      ]
    },
    {
      message: "What is your GitHub username?",
      type: "input",
      name: "github"
    },
    {
      message: "What is your email address?",
      type: "input",
      name: "email"
    }
    ,
    {
      message: "Please input the year for copyright purposes.",
      type: "input",
      name: "year"
    }


  ]);
}

function generateReadMe(answers) {
  return `
  ## Project: ${answers.title}
  ${license}

  # Description: 
  ${answers.description}
  
  # Table of Contents:
  
  * [Title](#Project)
  * [Description](#Description)
  * [Instillation](#Instillation) 
  * [Usage](#User-Story)
  * [License](#License)
  * [Contributing](#Contributors)
  * [Test](#Test-Instructions) 
  * [Questions](#Questions)

  # Instillation 
  ${answers.instillation}

  # User-Story 
  ${answers.userstory}
  
  # Contributors 
  ${answers.contribution}

  # Test-Instructions 
  ${answers.test}
  
  # Questions 
  Github Username: ${answers.github} If you have any question you can email me at: ${answers.email}

  #Licensing

  ${answers.name}  Copyright (C) ${answers.year} ${answers.github}

  `;

}

// function badge() {

//   if (answer.license === "Apache License") {
//     let licenseBdg = "[![License: APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
//   }

//   if (answer.license === "ISC License") {
//     let licenseBdg = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
//   }

//   if (answer.license === "Creative Commons") {
//     let licenseBdg = "[![License: CC0 - 1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
//   }

//   if (answer.license === "MIT License") {
//     let licenseBdg = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
// }

//   if (answer.license === "GNU General Pubulic License") {
//     let licenseBdg = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
// }

// else {
//   let licenseBdg = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"
// }

// }


async function init() {
  try {
    const answers = await promptUser();
    const readme = generateReadMe(answers);

    await writeFileAsync("README.md", readme);

    console.log("Successfully wrote to readme.md");
  } catch (err) {
    console.log(err);
  }
}

init();
