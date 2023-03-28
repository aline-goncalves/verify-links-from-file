import chalk from 'chalk';
import returnLinksFromPath from './index.js';
import validateList from './http_validation.js';

const path = process.argv;

function interpretCommands(argument){
    const pathForVerification = argument[2];
    const validate = argument[3] === '--validate';

    textProcess(validate, pathForVerification);
}

async function textProcess(validate, pathForVerification){    
    const result = await returnLinksFromPath(pathForVerification);
    await printList(validate, result);
}

async function printList(validate, linkList){
    const messageNotFound = 'Links not found!';
    if(validate){
        const validedLinks = JSON.stringify(await validateList(linkList));
        console.log(chalk.cyan('status dos links validados: '), 
                chalk.magenta(typeof(validedLinks) === 'undefined' ? messageNotFound : validedLinks));
                return;
    }
    console.log(chalk.cyan('lista de links: '), 
                chalk.magenta(typeof(linkList) === 'undefined' ? messageNotFound : JSON.stringify(linkList)));
}

interpretCommands(path);