import React from 'react'
import propTypes from 'prop-types'

const styles = {
    wrapper: {
      position: 'absolute',
      width: '100%',
      zIndex: '100',
      bottom: '0',
      textAlign: 'center'
      }
}

export const Scrol = (props) => {
  const { index, total, loop, prevHandler, nextHandler } = props
  return ( 
      <div style={styles.wrapper}>

{/* <a href={prevHandler} class="previous">&laquo; </a>
<a href={nextHandler} class="next"> &raquo;</a> */}
{ (loop || index !== 0) && (
<button type="button" className="previous round" onClick={prevHandler}>&#8249;</button>
)}
{ (loop || index !== total - 1) && (
<button type="button" className="next round" onClick={nextHandler}>&#8250;</button>
)}
</div>
    )
}
Scrol.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  prevHandler: propTypes.func,
  nextHandler: propTypes.func
}
