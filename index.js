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
        name: 'officeNumber',
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
                        dataIntern.school
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
                console.log(teamMembers);
                console.log(typeof (teamMembers));
                let outputData = generateHTML(teamMembers);
                console.log(outputData);
                fs.writeFile(outputPath, generateHTML(teamMembers), (err) => {
                    err ? console.log(err) : console.log(`Team Profile has been generated to ${outputPath}`)
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


const generateHTML = (data) => {
    let noEngineers = 0;
    let noInterns = 0;
    for (employee of data) {
        console.log(employee.getRole());
        if (employee.getRole() == "Engineer") {
            console.log("here");
            noEngineers++;
        } else if (employee.getRole() == "Intern") {
            noInterns++;
        }
    }
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<style>
    .card-columns {
        column-count: 3;
    }

    .fas {
        margin-right: 0.5em;
    }
</style>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4 text-center">${data[0].name}'s Team</h1>
            <p class="lead text-center">A team of ${noEngineers} Engineers & ${noInterns} Interns</p>
        </div>
    </div>
    <section class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
            ${employeeCards(data)}
        </div>
    </section>
    </body>
<script src="https://kit.fontawesome.com/5ab0108a51.js" crossorigin="anonymous"></script>

</html>
    `;
}
function employeeCards(teamMembers) {
    let employeeCardsHTML = "";
    for (employee of teamMembers) {
        switch (employee.getRole()) {
            case 'Manager':
                employeeCardsHTML += `
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>${employee.name}</h4>
                            <h5><i class="fas fa-mug-hot"></i>${employee.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                <li class="list-group-item">Office No: ${employee.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
                break;
            case 'Engineer':
                employeeCardsHTML += `
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>${employee.name}</h4>
                            <h5><i class="fas fa-mug-hot"></i>${employee.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://www.github.com/${employee.gitHub}">${employee.gitHub}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
                break;
            case 'Intern':
                employeeCardsHTML += `
                <div class="col mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>${employee.name}</h4>
                            <h5><i class="fas fa-mug-hot"></i>${employee.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                <li class="list-group-item">School: ${employee.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
                break;
        }
    }
    return employeeCardsHTML;
}