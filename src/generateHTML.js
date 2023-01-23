const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function Generate() {
    this.employees = [];
}

Generate.prototype.managerPrompt = function () {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`A name is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's id.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`An id is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the team manager's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`An email is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the team manager's office number.",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log(`An office number is required.`);
                    return false;
                }
            }
        }
    ])
        .then(({ name, id, email, officeNumber }) => {
            this.employees.push (new Manager(name, id, email, officeNumber))
            this.menuPrompt();
        })
};

Generate.prototype.menuPrompt = function () {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Make a selection.",
            choices: ["Add Engineer", "Add Intern", "Team complete. Make my page."]
        }
    ])
        .then(({ menu }) => {
            if (menu === "Add Engineer") {
                this.engineerPrompt();
            }
            if (menu === "Add Intern") {
                this.internPrompt();
            }
            if (menu === "Team complete. Make my page.") {
                console.log(this.employees)
                this.generateHTML();
            }
        })
};

Generate.prototype.engineerPrompt = function () {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`A name is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's id.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`An id is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`An email is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's github username.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(`A github username is required.`);
                    return false;
                }
            }
        }
    ])
        .then(({ name, id, email, github }) => {
            this.employees.push(new Engineer(name, id, email, github));
            this.menuPrompt();
        })
};

Generate.prototype.internPrompt = function () {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`A name is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's id.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`An id is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`An email is required.`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(`A school is required.`);
                    return false;
                }
            }
        }
    ])
        .then(({ name, id, email, school }) => {
            this.employees.push(new Intern(name, id, email, school));
            this.menuPrompt();
        })
};

Generate.prototype.generateHTML = function () {
    fs.writeFile('./dist/index.html',
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        </head>
        
        <body>
            <div class="header p-3 mb-2 bg-success">
                <h1 class="display-4 text-white text-center">My Team</h1>
            </div>
            <main>
                <div class="container-body container-fluid">
                    <div class="row">
                        ${this.generateTeam()}
                    </div>
                </div>
            </main>
        </body>
        
        </html>`,
        'utf8', err => {
            if (err) {
                throw (err);
            }
            console.log('Success');
        });
};

Generate.prototype.generateTeam = function() {
    let managerIcon = `<i class="fas fa-mug-hot"></i>`;
    let engineerIcon = `<i class="fas fa-glasses"></i>`;
    let internIcon = `<i class="fas fa-user-graduate"></i>`;

    //take the employees array and change them into an array of html
        //for each html element ther3e is specific information for that type of employee
    //combine entire html

    let employeesHTML = this.employees;

    employeesHTML = employeesHTML.map((employee) => {
        console.log(employee.getRole())
        switch (employee.getRole()) {
            case "Manager":
                return `<div class="col-md-4 col-sm-6 col-12 col-lg-3">
                <div class="card mb-5 bg-white rounded">
                    <div class="card-header bg-info">
                        <h4 class="text-white">${employee.getName()}</h4>
                        <h4 class="text-white">${managerIcon} ${employee.getRole()}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li>Employee ID: ${employee.getID()}</li>
                            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>`
            case "Intern":
                return `<div class="col-md-4 col-sm-6 col-12 col-lg-3">
                <div class="card mb-5 bg-white rounded">
                    <div class="card-header bg-info">
                        <h4 class="text-white">${employee.getName()}</h4>
                        <h4 class="text-white">${internIcon} ${employee.getRole()}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li>Employee ID: ${employee.getID()}</li>
                            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>`
            case "Engineer":
                return `<div class="col-md-4 col-sm-6 col-12 col-lg-3">
                <div class="card mb-5 bg-white rounded">
                    <div class="card-header bg-info">
                        <h4 class="text-white">${employee.getName()}</h4>
                        <h4 class="text-white">${engineerIcon} ${employee.getRole()}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li>Employee ID: ${employee.getID()}</li>
                            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>`
            default:
                break;
        }

    })

    return ``
};

module.exports = Generate