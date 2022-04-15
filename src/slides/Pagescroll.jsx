import IndicatorDots from './IndicatorDots'
import Validation from './Validation'
import Buttons from './Buttons'
import Carousel from 're-carousel'

export const Pagescroll = (props) => {

    let content = () => {
        return (
            props.frames.map((item, index) => (
                <div  style={{height: '100%', background:  "white" }} key={index}>
                    {item.component}
              </div>
            ))
        )
    }
    return ( 
        <Carousel auto widgets={[IndicatorDots, Buttons, Validation]} >
            {content()}
            
          </Carousel>
      )
}