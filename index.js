// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
   {
    type: "input",
    name: "title",
    message: "Whats your Project Name?",
   }, 
   {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project.",
   }, 
   {
    type: "input",
    name: "table of contents",
    message: "(OPTIONAL) Provide a table of content if it applies.",
   },
   {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
   }, 
   {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. Include screenshots as needed.",
   },
   {
    type: "input",
    name: "credit",
    message: "List your collaborators with Links to there GitHub, any Thirdparty assets that require attribution, or any links to tutorials you used here",
   },
   {
    type: "input",
    name: "license",
    message: "This lets other developers know what they can and cannot do with your project",
    choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "MPL2.0", "APACHE2.0", "MIT", "BOOST1.0", "none"]
   },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writerFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Creating a Professional README.md File...");
        writeFile("./Develop/README.md", generateMarkdown({ ...responses}));
    });
}

// Function call to initialize app
init();

console.log(module);

