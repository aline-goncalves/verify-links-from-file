import chalk from 'chalk';
import returnLinksFromPath from './index.js';

const path = process.argv;

async function textProcess(argumentPath){
    const pathForVerification = argumentPath[2];
    const result = await returnLinksFromPath(pathForVerification);
    printList(result);
}

function printList(linkList){
    const messageNotFound = 'Links not found!';
    console.log(chalk.cyan('lista de links: '), 
                chalk.magenta(linkList == 'undefined' ? linkList : messageNotFound));
}

textProcess(path);