// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
   {
    type: "input",
    name: "title",
    message: "Whats your Project Name?",
   },
//    {
//     type: "input",
//     name: "table",
//     message: "(OPTIONAL) Provide a table of content if it applies.",
//    }, 
   {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project.",
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
    type: "list",
    name: "license",
    message: "Is there a License? This lets other developers know what they can and cannot do with your project",
    choices: ["GNUAGPLv3", "GNUGPLv3", "GNULGPLv3", "MPL2.0", "APACHE2.0", "MIT", "BOOST1.0", "none"],
   },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating a Professional README.md File...");
        writeToFile("./develop/README.md", generateMarkdown({ ...responses}));
    });
}

// Function call to initialize app
init();

// console.log(module);

