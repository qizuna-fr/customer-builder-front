import { render } from '@testing-library/react'
import { InputContent } from "../InputContent" 
import React from 'react'

  test('test text input', () => {
      render(<InputContent >  </InputContent>)
      const inputEl = screen.getByTestId("text");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "text");
  });