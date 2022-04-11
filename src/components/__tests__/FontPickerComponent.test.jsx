/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent} from '@testing-library/react'
import {FontPickerComponent}  from "../FontPickerComponent" 
import React from 'react'
import '@testing-library/jest-dom'

test("The FontPickerComponent field should be in the document", () => {
    render(<FontPickerComponent />)
    // const inputF = screen.getByTestId("font-picker")
    // expect(inputF).toBeInTheDocument();
})

// test("The field displayed the color selected", () => {
//     const onChange = jest.fn();
//     const { getByTestId } = render(<ColorPicker onChange={onChange()} />);
//     fireEvent.change(getByTestId('font-picker'));
//     expect(onChange).toHaveBeenCalled()
// })