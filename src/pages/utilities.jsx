
export const redirect = (targetURL) => {
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}

export const InputContent = () => {
    return sessionStorage.getItem('text')
}

export const setInputContent = (text) => {
    sessionStorage.setItem('text', text);
}

export const UploadFile = () => {
    return sessionStorage.getItem('file')
}

export const setUploadFile = (file) => {
    sessionStorage.setItem('file', file);
}

export const TitleColor = () => {
    return sessionStorage.getItem('color')
}

export const setTitleColor = (color) => {
    sessionStorage.setItem('color', color);
}

export const TitleFont = () => {
    return sessionStorage.getItem('font')
}

export const setTitleFont = (font) => {
    sessionStorage.setItem('font', font);
}

