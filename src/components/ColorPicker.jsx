import React from 'react'
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
import { setColor } from '../utilities/utilities';


class ColorPicker extends React.Component {
    
    state = {
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
    };
 
    onClick = () => {
        this.setState({ 
          displayClrPkr: !this.state.displayClrPkr 
        })
        
    };
 
    stateClose = () => {
      this.setState({ 
        displayClrPkr: false 
      })
      console.log(this.state);
      
    };
 
    onChange = (color) => {
        this.setState({ 
          color: color.rgb,
          hex:color.hex
        })
        setColor(this.state.color.hex)
    };

    render() {
 
      const styles = reactCSS({
        'default': {
          color: {
            width: '50px',
            height: '20px',
            borderRadius: '4px',
            background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            position: 'fixed',            
          },
          swatch: {
            padding: '5px',
            background: '#ffffff',
            borderRadius: '3px',
            cursor: 'pointer',
            display: 'inline-block',
            boxShadow: '0 0 0 2px rgba(0,0,0,.3)',
          },          
        },
      });
 
      return (
        <div>
            <CompactPicker color={this.state.color} onChange={this.onChange} />
        </div>
      )
    }
}
 
export default ColorPicker