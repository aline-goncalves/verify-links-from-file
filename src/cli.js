import chalk from 'chalk';
import returnLinksFromFileOrDirectoryInPath from './index.js';

const path = process.argv;

async function textProcess(argumentPath){
    const pathForVerification = argumentPath[2];
    const result = await returnLinksFromFileOrDirectoryInPath(pathForVerification);
    console.log(chalk.cyan('lista de links: '), chalk.magenta(JSON.stringify(result)));
}

textProcess(path);