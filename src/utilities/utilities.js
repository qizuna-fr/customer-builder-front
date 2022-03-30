import axios from 'axios';

export const ourFetch = (method, url, headers) => {

    let myInit = {
        method: method,
        headers: headers,
        mode: 'cors',
        cache: 'default'
    };

    fetch(url, myInit)
        .then(response => {
            return response;
        })
        .then(data => {
            return data
        })
        .catch(error => {
            return error
        })
}

export const axiosCall = async (url, headerContent, errorResponse = "Non trouvé") => {
    return await axios(url, {
        method: 'get',
        headers: {
            'Accept': 'application/' + headerContent
        }
    })
}

export const redirect = (targetURL) => {
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}
