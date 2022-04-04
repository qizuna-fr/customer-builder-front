
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

export const getInputContent = () => {
    return sessionStorage.getItem('text')
}

export const setInputContent = (text) => {
    sessionStorage.setItem('text', text);
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