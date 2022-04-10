/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent} from '@testing-library/react'
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

test("The input text field have an empty value by default", () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("text-input");
    expect(inputEl.value).toBe("")
})

test('The input file field should be in the document', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("file-input");
    expect(inputEl).toBeInTheDocument();
})
  
test("The input file field displayed the correct file", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<UploadFile onChange={onChange} />);
    fireEvent.submit(getByTestId('file-input'));
    expect(onChange).toHaveBeenCalled()
})

test('The input submit field should be in the document', () => {
    render(<UploadFile />)
    const inputEl = screen.getByTestId("submit-input");
    expect(inputEl).toBeInTheDocument();
})

test("The form is submitted", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<UploadFile onSubmit={onSubmit} />);
    fireEvent.submit(getByTestId('form-upload'));
    expect(onSubmit).toHaveBeenCalled()
})



  