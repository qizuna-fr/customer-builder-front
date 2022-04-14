import React from 'react'
import propTypes from 'prop-types'

const styles = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
    bottom: '10em',
    textAlign: 'center'
  }
  
}

export default function Validation (props) {
  const nextBtnStyle = Object.assign({}, styles.right)
  const { index, total, loop, nextHandler } = props

  return (
    <div>
    <div style={styles.wrapper}>
    { (loop || index !== total - 1) && (
      <div style={nextBtnStyle}  id="btn1">
          <input type='button' value ="Suivant" id="nextBtn" onClick={nextHandler}></input>
      </div>
    )}
  </div>
    </div>
  )
}

Validation.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  nextHandler: propTypes.func
}