import chalk from 'chalk';
import returnFile from './index.js';

const filePath = process.argv;

async function textProcess(filePath){
    const result = await returnFile(filePath[2]);
    console.log(chalk.cyan('lista de links: '), chalk.magenta( JSON.stringify(result)));
}

textProcess(filePath);