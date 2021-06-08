//loads prompt method for inquirer
const { prompt } = require("inquirer");
//imports generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is your name',
        name: 'user',
        default: 'testentry'
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        default: 'testentry'
    },
    {
        type: 'input',
        message: 'Please enter a brief description of your project.',
        name: 'description',
        default: 'testentry'
    },
    {
        type: 'input',
        message: 'What are the steps needed to install your project?',
        name: 'install',
        default: 'testentry'
    },
    {
        type: 'input',
        message: 'What is the usage for your project?',
        name: 'usage',
        default: 'testentry'
    },
    {
        type: 'input',
        message: 'How may some one contribute?',
        name: 'contribute',
        default: 'testentry'
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
        default: 'testentry'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'github',
        default: 'testentry'
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
        default: 'testentry'
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['Apache 2.0', 'BSD', 'MIT']
    },
]

function init() {
    
        prompt(questions)
        .then((response) => generateMarkdown(response))
};


init();
