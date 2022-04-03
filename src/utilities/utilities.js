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

export const getURLPage = () => {
    return sessionStorage.getItem('url')
}

export const setURLPage = (url) => {
    sessionStorage.setItem('url', url);
}

export const getDepartement = () => {
    return sessionStorage.getItem('departement')
}

export const setDepartement = (departement) => {
    sessionStorage.setItem('departement', departement);
}

export const getFile = () => {
    return sessionStorage.getItem('file')
}

export const setFile = (file) => {
    sessionStorage.setItem('file', file);
}

export const getColor = () => {
    return sessionStorage.getItem('color')
}

export const setColor = (color) => {
    sessionStorage.setItem('color', color);
}

export const getFontApp = () => {
    return sessionStorage.getItem('font')
}

export const setFontApp = (font) => {
    sessionStorage.setItem('font', font);
}