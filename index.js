const fs = require('fs');
const { prompt } = require("inquirer");


// TODO: Create an array of questions for user input Array of objects
//const questions = ['What is the name of your project?', 'Please enter a brief description of your project.', 'What are the steps needed to install your project?', 'What is the usage for your project?', 'How may some one contribute?', 'What are the test instructions?', 'What license would you like to use?', 'Please enter your GitHub username', 'Please enter your email address'];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

const getLicense = ({license, user}) => {
    let licenseCode;
    switch (license) {
        case 'Apache 2.0': {
            licenseCode = 
`Copyright 2021 ${user}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0  
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
            break;
        }
        case 'BSD': {
            licenseCode = 
`BSD 2-Clause License

Copyright (c) 2021, ${user}
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
            break;
        }
        case 'MIT': {
            licenseCode = 
`MIT License

Copyright (c) 2021 ${user}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
            break;
        }
        default: console.log('broken switch');
    }
    return licenseCode;
}

const renderReadMe = (answers) => {
    const readMe = 
`# ${answers.title}

## Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage-Information](#Usage-Information)
4. [Contribution-Guidelines](#Contribution-Guidelines)
5. [Test-instructions](#Test-instructions)
6. [License](#License)
7. [Contact-Info](#Contact-Info)

## Description
${answers.description}

## Installation
${answers.install}
## Usage-Information
${answers.usage}

## Contribution-Guidelines
${answers.contribute}

## Test-instructions
${answers.test}

## License
${getLicense(answers)}

## Contact-Info
${answers.user} - <${answers.email}>

Portfolio - <https://github.com/${answers.github}>`;

    fs.writeFileSync('README.md', readMe, (err) => {
        err ? console.error(err) : console.log('README has been generated!');
    });
};

function init() {
    
        prompt([
            {
                type: 'input',
                message: 'What is your name',
                name: 'user',
            },
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
                message: 'What is the usage for your project?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'How may some one contribute?',
                name: 'contribute',
            },
            {
                type: 'input',
                message: 'What are the test instructions?',
                name: 'test',
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
                choices: ['Apache 2.0', 'BSD', 'MIT']
            },
        ])
        .then((response) => renderReadMe(response))
};

// Function call to initialize app
init();
