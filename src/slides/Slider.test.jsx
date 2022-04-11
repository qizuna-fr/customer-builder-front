/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import { Slider } from './Slider'

test('should render correct forward and backwards navigation', () => {
  render(<Slider></Slider>)
  const inputNext = screen.getByTestId("next");
  const inputPrevious = screen.getByTestId("previous");
  const history = createMemoryHistory()
  console.log(history);
  fireEvent.click(inputNext)
})