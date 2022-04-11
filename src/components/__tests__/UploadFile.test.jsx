/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { UploadFile } from "../UploadFile" 
import 'regenerator-runtime/runtime';

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
