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

// class ColorPicker extends React.Component {
  export const ColorPicker = () => {
    
  // state = {
  //   displayClrPkr: false,
  //   color: {
  //     rgb:{
  //       r: 74,
  //       b: 144,
  //       g: 226,
  //       a: 1, 
  //     },
  //     hex:'#4a90e2',
  //   }
  // };

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

  // render() {
  //   const styles = reactCSS({
  //     'default': {
  //       color: {
  //         width: '50px',
  //         height: '20px',
  //         borderRadius: '4px',
  //         background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
  //       },
  //       popover: {
  //         position: 'absolute',
  //         zIndex: '2',
  //       },
  //       cover: {
  //         top: '0px',
  //         right: '0px',
  //         bottom: '0px',
  //         left: '0px',
  //         position: 'fixed',            
  //       },
  //       swatch: {
  //         padding: '5px',
  //         background: '#ffffff',
  //         borderRadius: '3px',
  //         cursor: 'pointer',
  //         display: 'inline-block',
  //         boxShadow: '0 0 0 2px rgba(0,0,0,.3)',
  //       },          
  //     },
  //   });
    return (
      <div >
        <CompactPicker color={state.color} onChange={onChange} />
      </div>
    )
  }
// }
 
// export default ColorPicker