async function returnValidUrlsList(linksList, isDirectory){
    const urlList = extactURLsToValidate(linksList, isDirectory);
    const status = await validateURLs(urlList);

    return linksList.map((object, index) => ({
        ...object,
        status: status[index]
    }));
}

function extactURLsToValidate(linksList, isDirectory){   
    return linksList.map((linkObject) => Object.values(linkObject));
}

async function validateURLs(urlList){
    return await Promise.all(        
        urlList.map(async (url) => {
            try{
                const response = await fetch(url);
                return `${response.status} - ${response.statusText}`;
            }catch(error){
                return httpErrorTreatment(error);
            }
    }));
}

function httpErrorTreatment(error){
    if(error.cause.code === 'ENOTFOUND'){
        return "couldn't access the link";
    }
    return 'something went wrong while testing link';
}

export default returnValidUrlsList;