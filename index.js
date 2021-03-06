const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be use to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=>{
    if (err) throw err;
    console.log("Success!");
  })
}

function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      writeToFile("README.md", generateMarkdown(answers));

    }).catch((error) => {
    if (error.isTtyError) {
    } else {
      console.log("It failed");
    }
  });
}
// Function call to initialize app
init();
