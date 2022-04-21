/**
 * @jest-environment jsdom
*/  

import { render , screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { UploadFile } from "../UploadFileComponent" 
import 'regenerator-runtime/runtime';

test('The input file field should be in the document', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("file-input");
    expect(inputEl).toBeInTheDocument();
})

test('The upload file should pass', async () => {
    const { getByTestId } = render(<UploadFile/>);
    const file = new File(['dummy content'], 'hello.png');
    const inputFile = getByTestId('file-input');
    console.log(inputFile.files);
    Object.defineProperty(inputFile, 'files', { value: [file] });
    console.log(inputFile.files[0].name);
    expect(inputFile.files[0].name).toBe("hello.png");

});
