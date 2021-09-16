console.clear();
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input


      const questions = 
      [
    {
        name: "projectTitle",
        type: "input",
        message: "What is the project title?",
    },
    {
        name: "description",
        type: "input",
        message: "Write a brief description of your project: "
    },
    {
        name: "installation",
        type: "input",
        message: "Describe the installation process if any: ",
    },
    {
        name: "use",
        type: "input",
        message: "What is this project used for?"
    },
    {
        name: "license",
        type: "list",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "ISC",
            "MIT",
            "OBSD"
        ]
    },
    {
        name: "contributing",
        type: "input",
        message: "Who are the contributors of this projects?"
    },
    {
        name: "tests",
        type: "input",
        message: "Is there a test included?"
    },
    {
        name: "questions",
        type: "input",
        message: "What should I do if I have an issue? "
    },
    {
        name: "username",
        type: "input",
        message: "Please enter your GitHub username: "
    },
    {
        name: "email",
        type: "input",
        message: "Please enter your email: "
    }
]
;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Successfully created ReadMe!")
        }
    }  )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("READMEgenerator.md", generateMarkdown(data));
            console.log(data)

        })

}

// Function call to initialize app
init();
