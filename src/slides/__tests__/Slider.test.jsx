/**
 * @jest-environment jsdom
*/  

import { render , screen, fireEvent} from '@testing-library/react'
import {Slider}  from "../Slider" 
import React from 'react'
import '@testing-library/jest-dom'

test('should render correct forward and backwards navigation', () => {
  render(<Slider></Slider>)
    // buttonNavigation = jest.fn();
    // const { getByText } = render(
    // <MemoryRouter initialEntries={["/page1"]}>
    //     <Slider></Slider>
    // </MemoryRouter>
    // )

  });