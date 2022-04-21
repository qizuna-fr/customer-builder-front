import IndicatorDots from './IndicatorDots'
import Buttons from './Buttons'
import Carousel from './Carousel';

export const Pagescroll = (props) => {

    console.log(props.frames[0]);

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
        <Carousel auto widgets={[IndicatorDots, Buttons]} >
            {content()}
          </Carousel>
      )
}