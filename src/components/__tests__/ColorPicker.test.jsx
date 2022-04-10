/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent} from '@testing-library/react'
import {ColorPicker}  from "../ColorPicker" 
import React from 'react'
import '@testing-library/jest-dom'

test("The ColorPicker field should be in the document", () => {
    render(<ColorPicker />)
    const inputC = screen.getByTestId("color-picker")
    expect(inputC).toBeInTheDocument();
})

test("The field displayed the color selected", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<ColorPicker onChange={onChange()} />);
    fireEvent.change(getByTestId('color-picker'));
    expect(onChange).toHaveBeenCalled()
})