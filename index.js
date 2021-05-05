// NPM Packages
const inquirer = require('inquirer');
const fs = require('fs');

//Class calls
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var teamMembers = [];

const teamManager = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter manager\'s name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter manager\'s employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter manager\'s email address:',
    },
    {
        type: 'input',
        name: 'officeNo',
        message: 'Please enter manager\'s office number:',
    },
]

init();

function init() {
    // Manager inputs
    inquirer.prompt(teamManager).then((dataManager) => {
        let newManager = new Manager(
            dataManager.name,
            dataManager.id,
            dataManager.email,
            dataManager.officeNumber
        );
        teamMembers.push(newManager);
        console.log(`Building Manager ${dataManager.name}'s team.`);
        console.log(teamMembers);
    });

    //Choose Intern or Engineer

}

