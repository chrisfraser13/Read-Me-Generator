// TODO: Include packages needed for this application
var inquirer = require('inquirer')
var fs = require('fs')
var path = require('path')
var generateMarkdown = require('./utils/generateMarkdown.js');
const { restoreDefaultPrompts } = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter the description",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter Usage Information",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username",
    },
    {
        type: "list",
        name: "license",
        message: "Which type of license does your project have?",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "none"]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions) .then (responses => {
        writeToFile ("sample.md", generateMarkdown({...responses}))
    }) 
}
// Function call to initialize app
init();

