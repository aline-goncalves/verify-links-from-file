import chalk from 'chalk';
import returnLinksFromPath from './index.js';

const path = process.argv;

async function textProcess(argumentPath){
    const pathForVerification = argumentPath[2];
    const result = await returnLinksFromPath(pathForVerification);
    console.log(chalk.cyan('lista de links: '), chalk.magenta(JSON.stringify(result)));
}

textProcess(path);