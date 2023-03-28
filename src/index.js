import fs from 'fs';
import chalk from 'chalk';

async function returnLinksFromPath(path){
    try{
        if(fs.lstatSync(path).isFile()){
            return await returnLinksFromFile(path);        
        }
        
        if(fs.lstatSync(path).isDirectory()){
            return await returnLinksFromDirectory(path); 
        }

    }catch(error){
        treatError(error);
        return;
    }
}

async function returnLinksFromDirectory(path){
    var links = [], list = [];
    const files = await fs.promises.readdir(path);
        
    for await(let file of files){
        links = links.concat(await returnLinksFromFile(`${path}/${file}`));
    }

    return links;
}

async function returnLinksFromFile(path) {
    try{
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(path, encoding);
        return extraxtLinks(text);
    
    }catch(error){
        treatError(error);    
        return;
    }
}

function extraxtLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;    
    const catches = [...text.matchAll(regex)];
    const results = catches.map(catchLink => ({[catchLink[1]]: catchLink[2]}));

    return results.length !== 0 ? results : "There is no links in the file!";
}

function treatError(error){
    if(error.code === 'ENOENT'){
        console.log(chalk.red(error.code, "This file or directory doesn't exist!"));
        return;
    }
    console.log(chalk.red(error.code, "Verify the informed path!"));
}

export default returnLinksFromPath;