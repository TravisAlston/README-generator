// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = questionsData => {
    questionsData = {};

    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is your project title?',
            validate: nameInput => {
                if (nameIput) {
                    return true;
                } else {
                    console.log('Please enter a project title');
                    return false;
                }
            }
        },
        {

        }
    ])
    .then(data => {
        questionsData.description = data.description//name value here
    })

// TODO: Create a function to write README file
function writeToFile(fileName, questionsData) {
    fs.writeFile
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
