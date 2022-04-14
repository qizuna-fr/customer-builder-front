import IndicatorDots from './IndicatorDots'
import Buttons from './Buttons'
import Carousel from './Carousel'
import Validation from './Validation'

export const Pagescroll = (props) => {

    let content = () => {
        return (
            props.frames.map((item, index) => (
                <div  style={{height: '100%', background:  item.color }} key={index}>
                    {item.component}
              </div>
            ))
        )
    }
    return ( 
        <Carousel auto widgets={[IndicatorDots, Validation]} >
            {content()}
            
          </Carousel>
      )
}