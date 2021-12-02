import React from 'react'
import './slider.css'
import LEFTARROW from "@mui/icons-material/KeyboardArrowLeftRounded";
import RIGHTARROW from "@mui/icons-material/KeyboardArrowRightRounded";
import Carousel, {consts} from "react-elastic-carousel";
import {Button} from "@material-ui/core";

class Sliders extends React.Component {

    myArrow = ({type, onClick, isEdge}) => {
        const pointer = type === consts.PREV ? <LEFTARROW className={"LEFTARROW"}/> : <RIGHTARROW className={"LEFTARROW"} />
        return (
            <Button onClick={onClick} disabled={isEdge}>
                {pointer}
            </Button>
        )
    }

    onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the last item, go to first item
            this.carouselRef.current.goTo(0);
        }
    };

    onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the first item, go to last item
            this.carouselRef.current.goTo(this.props.data.length-1);
        }
    };

    render() {
        return (
            <Carousel enableMouseSwipe={false} ref={ref => (this.carouselRef = ref)} onPrevStart={this.onPrevStart} onNextStart={this.onNextStart} itemPadding={[10, 10]} className="carousel" renderArrow={this.myArrow}>
                {this.props.data.map(d => <div><img src={d.image} /></div>)}
                {/*{data.map(d => <div className="carouselItem"><img src={d.image} /></div>)}*/}
            </Carousel>
        )
    }
}

export default Sliders;

// enableAutoPlay autoPlaySpeed={7000}