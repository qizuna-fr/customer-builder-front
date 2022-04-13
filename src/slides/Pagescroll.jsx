import Carousel from 're-carousel'
import IndicatorDots from './indicator-dots'
import Buttons from './buttons'

export const Pagescroll = (props) => {

    return (
        <Carousel auto widgets={[IndicatorDots, Buttons]}>
            {props.data.map((item, index) => (
                <div style={{height: '100%'}}>
                    {item.component}
                </div>
            )
            )}
        </Carousel>
        
    )
}