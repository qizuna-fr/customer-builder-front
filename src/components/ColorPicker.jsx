import React, { useState } from 'react'
import reactCSS from 'reactcss'

import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker
} from "react-color";
import { setColor } from '../pages/utilities';

export const ColorPicker = () => {
  
  const [state, setState] = useState (
    {
        displayClrPkr: false,
        color: {
          rgb:{
            r: 74,
            b: 144,
            g: 226,
            a: 1, 
          },
          hex:'#4a90e2',
        }
      }
  )
 
  let onClick = () => {
    setState({ 
    displayClrPkr: !state.displayClrPkr 
    })  
  };

  let stateClose = () => {
    setState({ 
    displayClrPkr: false 
    })
    console.log(state);
  };
 
  let onChange = (color) => {
    setState({ 
      color: color.rgb,
      hex:color.hex
    })
    setColor(state.hex)
    console.log(state.hex);
  };

    return (
      <div >
        <CompactPicker color={state.color} onChange={onChange} />
      </div>
    )
  }