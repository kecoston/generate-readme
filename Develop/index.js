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
    }
  ]);
}

function generateReadMe(answers) {
  return `
  ## Project: ${answers.title}

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
  `;
}

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
