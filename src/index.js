import fs from 'fs'; //lib nativa do node - file system

async function returnLinksFromPath(path){
    const links = [];

    if(fs.lstatSync(path).isFile()){
        links.push(await returnLinksFromFile(path));
    
    }else if(fs.lstatSync(path).isDirectory()){
        links.push(await returnLinksFromDirectory(path));        
    }
    return links;
}

async function returnLinksFromDirectory(path){
    const links = [];
    const files = await fs.promises.readdir(path);
        
    for await(let file of files){
        links.push(await returnLinksFromFile(`${path}/${file}`));
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
    }
}

function extraxtLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    
    const catches = [...text.matchAll(regex)];
    const results = catches.map(catchLink => ({[catchLink[1]]: catchLink[2]}))

    return results.length !== 0 ? results : "There is no links in the file!";
}

function treatError(error){
    throw new Error(chalk.red(error.code, "This file doesn't exist or it's a directory!"));
}

export default returnLinksFromPath;