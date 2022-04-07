/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent, getByTestId  } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { UploadFile } from "../UploadFile" 

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

it("submits", () => {
    const submitForm = jest.fn();
    const { getByTestId  } = render(<UploadFile onSubmit={submitForm} />);
    fireEvent.click(getByTestId("form"));
    expect(submitForm).toHaveBeenCalled();
  });
