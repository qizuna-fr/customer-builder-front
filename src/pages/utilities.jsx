export const redirect = (targetURL) => {
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}

export const getInputContent = () => {
    return sessionStorage.getItem('text')
}

export const setInputContent = (text) => {
    sessionStorage.setItem('text', text);
}

export const getFileApp = () => {
    return sessionStorage.getItem('file')
}

export const setFileApp = (file) => {
    sessionStorage.setItem('file', file);
}

export const getColorApp = () => {
    return sessionStorage.getItem('color')
}

export const setColorApp = (color) => {
    sessionStorage.setItem('color', color);
}

export const getTitleFont = () => {
    return sessionStorage.getItem('font')
}

export const setTitleFont = (font) => {
    sessionStorage.setItem('font', font);
}