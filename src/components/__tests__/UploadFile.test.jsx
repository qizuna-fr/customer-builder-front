/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent, cleanup } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { UploadFile } from "../UploadFile" 
import 'regenerator-runtime/runtime';

test('The input text field should be in the document', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("text-input");
    expect(inputEl).toBeInTheDocument();
})
  
test('The input text field should have a type text attribute', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("text-input");
    expect(inputEl).toHaveAttribute("type", "text");
})

test('The input file field should be in the document', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("file-input");
    expect(inputEl).toBeInTheDocument();
})
  
test('The input file field should have a type text attribute', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("file-input");
    expect(inputEl).toHaveAttribute("type", "file");
})

test('The input submit field should be in the document', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("submit-input");
    expect(inputEl).toBeInTheDocument();
})
  
test('The input submit field should have a type text attribute', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("submit-input");
    expect(inputEl).toHaveAttribute("type", "submit");
})

test("The form is submitted", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<UploadFile onSubmit={onSubmit} />);
    fireEvent.submit(getByTestId('form-upload'));
    expect(onSubmit).toHaveBeenCalled()
})

// test("The fileContent function is called on input text item ", () => {
//     const onInput = jest.fn();
//     const { getByTestId } = render(<UploadFile onInput={onInput} />);
//     fireEvent.submit(getByTestId('text-input'));
//     expect(onInput).toHaveBeenCalled()
// })



  