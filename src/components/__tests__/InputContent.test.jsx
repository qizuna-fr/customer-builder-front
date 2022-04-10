/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent} from '@testing-library/react'
import { InputContent } from "../InputContent" 
import React from 'react'
import '@testing-library/jest-dom'

test('The input field should be in the document', () => {
  render(<InputContent />)
  const inputEl = screen.getByTestId("text-input");
  expect(inputEl).toBeInTheDocument();
})

test('The input field should have a type text attribute', () => {
  render(<InputContent />)
  const inputEl = screen.getByTestId("text-input");
  expect(inputEl).toHaveAttribute("type", "text");
})

test("The input field have an empty value by default", () => {
  const onInput = jest.fn()
  const { getByTestId } = render(<InputContent onInput={onInput}/>)
  expect(getByTestId("text-input").value).toBe("")
})
      
test('The input field displayed the correct value', () => {
  render(<InputContent />)
  const input = screen.getByTestId("text-input");
  fireEvent.change(input, { target: { value: 'Mulhouse' } })
  expect(input.value).toBe('Mulhouse')
})

test("The input field displayed the correct value", () => {
  const onInput = jest.fn()
  const changedName = "Colmar"
  const { getByTestId, rerender } = render(<InputContent onInput={onInput}/>)
  rerender(<InputContent onInput={onInput} value={changedName}/>)
  expect(getByTestId("text-input").value).toBe("Colmar")
})