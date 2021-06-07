// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
//const questions = ['What is the name of your project?', 'Please enter a brief description of your project.', 'What are the steps needed to install your project?', 'What is the usage for your project?', 'How may some one contribute?', 'What are the test instructions?', 'What license would you like to use?', 'Please enter your GitHub username', 'Please enter your email address'];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const renderReadMe = (answers) => {
    const readMe = ``
}

function init() {

        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the name of your project?',
                    name: 'title',
                },
                {
                    type: 'input',
                    message: 'Please enter a brief description of your project.',
                    name: 'description',
                },
                {
                    type: 'input',
                    message: 'What are the steps needed to install your project?',
                    name: 'install',
                },
                {
                    type: 'input',
                    message: 'How may some one contribute?',
                    name: 'contribute',
                },
                {
                    type: 'input',
                    message: 'Please enter your GitHub username',
                    name: 'github',
                },
                {
                    type: 'input',
                    message: 'Please enter your email address',
                    name: 'email',
                },
                {
                    type: 'list',
                    message: 'What license are you using?',
                    name: 'license',
                    choices: ['Apache 2.0', 'BSD', 'GNU', 'MIT']
                },
            ])
            .then((response) => renderReadMe(response))
    };

// Function call to initialize app
init();
