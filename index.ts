import inquirer from "inquirer"
import chalk from "chalk"

console.log(`${chalk.blueBright("\t\t\t\t WELCOME TO ZK_QUIZ CONSOLE")}`);


let askQuestions = await inquirer.prompt([
    {
    name:"question_1",
    type:"list",
    message:`${chalk.rgb(255,193,205)(" 16 x 2 is equal to")}`,
    choices:["32","45","23","16"]

},
{
    name:"question_2",
    type:"list",
    message:`${chalk.rgb(255,193,205)("32 x 2 is equal to")}`,
    choices:["32","64","23","16"]

},
{
    name:"question_3",
    type:"list",
    message:`${chalk.rgb(255,193,205)(" 56 x 2 is equal to")}`,
    choices:["32","64","112","16"]

},
{
    name:"question_4",
    type:"list",
    message:`${chalk.rgb(255,193,205)(" 45 x 2 is equal to")}`,
    choices:["90","45","23","16"]

},
{
    name:"question_5",
    type:"list",
    message:`${chalk.rgb(255,193,205)(" 76 x 2 is equal to")}`,
    choices:["32","152","23","16"]

},
])

let result:number = 0

switch (askQuestions.question_1) {
    case "32":
        console.log(`${chalk.green("1 . Correct!")}`);
        ++result
        break;

    default:
      console.log(`${chalk.red("1 . Incorrect!")}`);
      
}
switch (askQuestions.question_2) {
    case "64":
        console.log(`${chalk.green("2 . Correct!")}`);
        ++result
        break;

    default:
        console.log(`${chalk.red("2 . Incorrect!")}`);
      
}
switch (askQuestions.question_3) {
    case "112":
        console.log(`${chalk.green("3 . Correct!")}`);
        ++result
        break;

    default:
        console.log(`${chalk.red("3 . Incorrect!")}`);
      
}
switch (askQuestions.question_4) {
    case "90":
        console.log(`${chalk.green("4 . Correct!")}`);
        ++result
        break;

    default:
        console.log(`${chalk.red("4 . Incorrect!")}`);
      
}
switch (askQuestions.question_5) {
    case "152":
        console.log(`${chalk.green("5 . Correct!")}`);
        ++result
        break;

    default:
        console.log(`${chalk.red("5 . Incorrect!")}`);
      
}

console.log(`RESULT : ${result}`);
