import fs from 'fs'; //lib nativa do node
import chalk from 'chalk';

function treatError(error){
    throw new Error(chalk.red(error.code, "This file doesn't exist or it's a directory!"));
}

// função assíncrona com async/await
async function returnFile(filePath) {
    try{
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding)
        
        return extraxtLinks(text);
    
    }catch(error){
        treatError(error);    
    }
}

export default returnFile;

function extraxtLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    
    const catches = [...text.matchAll(regex)];
    const results = catches.map(catchLink => ({[catchLink[1]]: catchLink[2]}))

    return results.length !== 0 ? results : "There is no links in the file!";
}


/* // função síncrona:
function returnFile(filePath){
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (error, text) => {
        if(error){
            treatError(error);
        }
        console.log(chalk.green(text));
    });
}
 */

/* // função assíncrona com then()
function returnFile(filePath){
    const encoding = 'utf-8';
    fs.promises.readFile(filePath, encoding)
               .then((text) => console.log(chalk.green(text)))
               .catch(treatError);
} */