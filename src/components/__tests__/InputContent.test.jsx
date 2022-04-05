import { render } from '@testing-library/react'
import { InputContent } from "../InputContent" 
import React from 'react'

  test('test text input', () => {
      render(<InputContent > <div id="demo"> </div></InputContent>)
      const demo = document.querySelector('#demo')
      expect(demo).not.toBeNull()
  });