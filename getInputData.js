
var inquirer = require('inquirer');


async function gatherData(){
    // questions to ask user 
    var questions = [
        {
            type: 'input',
            name: 'userName',
            message: 'Please input your username:',
        },
        {
            type: 'list',
            name: 'userColor',
            message: 'What is your favorite color?',
            choices: ['Green','Blue','Red','Pink']
        }
    ];
    // prompt user inputs for the question 
    const fetchData = await inquirer.prompt(questions);  // returns JSON object
    
    return fetchData;
}

module.exports = gatherData();