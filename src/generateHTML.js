const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

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
            this.manager = new Manager(name, id, email, officeNumber);
            this.menuPrompt();
        })
};

Generate.prototype.menuPrompt = function() {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Make a selection.",
            choices: ["Add Engineer", "Add Intern", "Team complete. Make my page."]
        }
    ])
    .then(({ menu }) =>{
        if (menu === "Add Engineer") {
            this.engineerPrompt();
        }
        if (menu === "Add Intern") {
            this.internPrompt();
        }
        if (menu === "Team complete. Make my page.") {
            console.log(this.manager)
            console.log(this.engineer)
            console.log(this.intern)
            this.generateHTML();
        }
    })
};

Generate.prototype.engineerPrompt = function() {
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
        this.engineer = new Engineer(name, id, email, github);
        this.menuPrompt();
    })
};

Generate.prototype.internPrompt = function() {
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
        this.intern = new Intern(name, id, email, school);
        this.menuPrompt();
    })
};