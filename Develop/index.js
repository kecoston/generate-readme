var inquirer = require('inquirer');
var fs = require("fs");
var markdown = require('./utils/generateMarkdown')
const { type } = require('os');

// array of questions for user
const questions = [
    {
        message: "What is the title of your project?", 
        type: "input",
        name:"title"
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
];

inquirer
  .prompt(
    questions 
 )
  .then(answers => {
    markdown()
  })
  .catch(error => {
    if(error.isTtyError) {
      //Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      // Something else when wrong
      console.log("Something went wrong")
    }
  });

// function to write README file
function writeToFile(fileName, data) {


    
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
