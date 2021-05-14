// NPM Packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//Class calls
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const render = require('./lib/htmlRender')
const outputPath = path.join(__dirname, "dist/team.html");
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

const roleEngineer = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter engineer\'s name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter engineer\'s employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter engineer\'s email address:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter engineer\'s GitHub profile name:',
    },
]

const roleIntern = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter intern\'s name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter intern\'s employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter intern\'s email address:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter intern\'s school name:',
    },
]

const teamChoice = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the role of the next employee?',
        choices: [
            'Engineer',
            'Intern',
            'Team is complete, no more additions.',
        ],
    },
]

function chooseTeam() {

    //Choose Intern or Engineer
    inquirer.prompt(teamChoice).then((dataChoice) => {
        console.log(dataChoice.role);
        switch (dataChoice.role) {
            case 'Engineer':
                inquirer.prompt(roleEngineer).then((dataEngineer) => {
                    let newEngineer = new Engineer(
                        dataEngineer.name,
                        dataEngineer.id,
                        dataEngineer.email,
                        dataEngineer.github
                    );
                    teamMembers.push(newEngineer);
                    chooseTeam();
                })
                    .catch((err) => {
                        console.log("Team could not be created.  Please try again.");
                        console.error(err);
                    });
                break;
            case 'Intern':
                inquirer.prompt(roleIntern).then((dataIntern) => {
                    let newIntern = new Intern(
                        dataIntern.name,
                        dataIntern.id,
                        dataIntern.email,
                        dataIntern.github
                    );
                    teamMembers.push(newIntern);
                    chooseTeam();
                })
                    .catch((err) => {
                        console.log("Team could not be created.  Please try again.");
                        console.error(err);
                    });
                break;
            case 'Team is complete, no more additions.':
                let outputData = generateHTML(teamMembers);
                console.log(outputPath);
                console.log(outputData);
                fs.writeFile(outputPath, outputData, (err) => {
                    err ? console.log(err) : console.log(`Team Profile has been generated to ${ouputPath}`)
                });
                break;
        }
    })
        .catch((err) => {
            console.log("Team could not be created.  Please try again.");
            console.error(err);
        });
}

function init() {
    // Initialization routing - Generate 1 Manager, then present choice of Engineer, Intern or finish team.
    inquirer.prompt(teamManager).then((dataManager) => {
        let newManager = new Manager(
            dataManager.name,
            dataManager.id,
            dataManager.email,
            dataManager.officeNumber
        );
        teamMembers.push(newManager);
        console.log(`Building Manager ${dataManager.name}'s team.`);
        chooseTeam();
    })
        .catch((err) => {
            console.log("Team could not be created.  Please try again.");
            console.error(err);
        });
}

init();


const generateHTML = data => {
    `
    
    `;
}
