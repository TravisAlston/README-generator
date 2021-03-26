// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = questionsData => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contents',
            message: 'create a table of contents for your project (optional)',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the installation steps');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a your usage instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please provide your project license or badge link',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide the project tests',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Write a description of your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project description');
                    return false;
                }
            }
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, questionsData) {
    fs.writeFile
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
