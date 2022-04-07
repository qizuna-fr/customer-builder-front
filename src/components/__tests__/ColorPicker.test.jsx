/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent  } from '@testing-library/react'
import ColorPicker  from "../ColorPicker" 
import React from 'react'
import '@testing-library/jest-dom'

test("The ColorPicker field should be in the document", () => {
    render(<ColorPicker />)
    const inputEl = screen.getByTestId("picker");
    expect(inputEl).toBeInTheDocument();
  });