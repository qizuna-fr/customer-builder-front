/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent  } from '@testing-library/react'
import { PageOne } from "../PageOne" 
import React from 'react'
import '@testing-library/jest-dom'

test('The button Next should be in the document', () => {
  render(<PageOne />)
  // const button = screen.getByTestId("button");
  // fireEvent.click(button);
})

// test("The scrollToNext function is called in onClick", () => {
//     const scrollToNext = jest.fn();
//     const { getByTestId } = render(<PageOne onClick={scrollToNext()} />);
//     fireEvent.click(getByTestId('button'));
//     expect(scrollToNext).toHaveBeenCalled()
// })
