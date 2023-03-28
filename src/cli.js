import chalk from 'chalk';
import returnLinksFromPath from './index.js';
import returnValidUrlsList from './http_validation.js';

const path = process.argv;

function interpretCommands(argument){
    const pathForVerification = argument[2];
    const validate = argument[3] === '--validate';

    textProcess(validate, pathForVerification);
}

async function textProcess(validate, pathForVerification){    
    const result = await returnLinksFromPath(pathForVerification);
    await prepareToPrintList(validate, result);
}

async function prepareToPrintList(validate, linkList){
    const notFoundMessage = 'Links not found!';
    let label = 'lista de links: ';

    if(validate){
        label = 'status dos links validados: ';
        linkList = await returnValidUrlsList(linkList);
    }

    printList(label, linkList, notFoundMessage);
}

function printList(label, linkList, notFoundMessage){
    console.log(chalk.cyan(label), chalk.magenta(typeof(linkList) === 'undefined' ? notFoundMessage : JSON.stringify(linkList)));
}

interpretCommands(path);