import IndicatorDots from './IndicatorDots'
import Buttons from './Buttons'
import Carousel from './Carousel';

const styles = {
    btnStyle: {
      position: 'absolute',
      width: '100%',
      zIndex: '100',
      textAlign: 'center'
    }
}

export const Slider = (props) => {

  let content = () => {
    return (
      props.frames.map((item, index) => (
        <div style={{height: '100%', background:  "white" }} key={index}>
          {item.component}
        </div>
      ))
    )
  }
  return ( 
    <>
      <Carousel widgets={[IndicatorDots, Buttons]} >
        {content()}
        </Carousel>
      </>
  )
}