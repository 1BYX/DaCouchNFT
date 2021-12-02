import React from 'react';
import './TabletRoadmap.css'
import lunaBIG from '../images/lunaBIG.png'
import signSquare from '../images/signSquare.gif'
import earthPNG from '../images/EarthPNG.png'
import meteorite from '../images/Meteorite.gif'
import UFO from '../images/UFO.png'
import book1 from '../images/Book1.png'
import book2 from '../images/Book2.png'
import book3 from '../images/Book3.png'
import book4 from '../images/Book4.png'
import book5 from '../images/Book5.png'
import couch from '../images/couchObjects/couch0.png'
import square1 from '../images/phone/cube1.gif'
import square2 from '../images/phone/cube2.gif'
import square3 from '../images/phone/cube3.gif'
import square4 from '../images/phone/cube4.gif'
import square5 from '../images/phone/cube5.gif'


const TabletRoadmap = ({roadmapRef}) => {
    return(
        <div className="tablet-roadmap-wrapper">
            <div className="tablet-roadmap-title"><h1>Couch Roadmap</h1></div>
            <div className="tablet-roadmap" ref={roadmapRef}>
                <div className="tablet-textOdd">
                    <div className="tablet-textWrapper">
                        <div className="tablet-number"><img src={book1} /></div>
                        <div className="tablet-textSign">
                            <img src={square1} />
                        </div>
                    </div>
                </div>

                <div className="tablet-empty1"><img src={UFO} /></div>
                <div className="tablet-empty2"><img src={couch} /></div>
                <div className="tablet-textEven">
                    <div className="tablet-number"><img src={book2} /></div>
                    <div className="tablet-textWrapper">
                        <div className="tablet-textSign">
                            <img src={square2} />
                        </div>
                    </div>
                </div>
                <div className="tablet-textOdd">
                    <div className="tablet-textWrapper">
                        <div className="tablet-number"><img src={book3} /></div>
                        <div className="tablet-textSign">
                            <img src={square3} />
                        </div>
                    </div>
                </div>
                <div className="tablet-empty3"><img src={meteorite} /></div>
                <div className="tablet-empty4"><img src={lunaBIG} /></div>
                <div className="tablet-textEven">
                    <div className="tablet-textWrapper">
                        <div className="tablet-number"><img src={book4} /></div>
                        <div className="tablet-textSign">
                            <img src={square4} />
                        </div>
                    </div>
                </div>
                <div className="tablet-textOdd">
                    <div className="tablet-textWrapper">
                        <div className="tablet-number"><img src={book5} /></div>
                        <div className="tablet-textSign">
                            <img src={square5} />
                        </div>
                    </div>
                </div>
                <div className="tablet-empty5"><img src={earthPNG} /></div>
            </div>
        </div>
    )
}

export default TabletRoadmap;
