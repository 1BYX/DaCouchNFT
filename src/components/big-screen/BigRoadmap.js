import React from 'react';
import './BigRoadmap.css'
import lunaBIG from '../images/lunaBIG.png'
import signHorizontal from '../images/SignHorizontal.gif'
import earthPNG from '../images/EarthPNG.png'
import meteorite from '../images/Meteorite.gif'
import UFO from '../images/UFO.png'
import book1 from '../images/Book1.png'
import book2 from '../images/Book2.png'
import book3 from '../images/Book3.png'
import book4 from '../images/Book4.png'
import book5 from '../images/Book5.png'
import couch from '../images/couchObjects/couch0.png'



const BigRoadmap = ({roadmapRef}) => {
    return(
        <div className="big-roadmap-wrapper">
            <div className="big-roadmap-title"><h1>DaCouch Roadmap</h1></div>
            <div className="big-roadmap" ref={roadmapRef}>
                <div className="textOdd">
                    <div className="textWrapper">
                        <div className="number"><img src={book1} /></div>
                        <div className="textSign">
                            <p>Creation of DaCouch socials and website, launch of an ad campaign.</p>
                            <img src={signHorizontal} />
                        </div>
                    </div>
                </div>

                <div className="empty1"><img src={UFO} /></div>
                <div className="empty2"><img src={couch} /></div>
                <div className="textEven">
                    <div className="textWrapper">
                        <div className="textSign">
                            <p>Launch of community competitions and games in discord with various prizes, including a slot in the whitelist.</p>
                            <img src={signHorizontal} />
                        </div>
                        <div className="number"><img src={book2} /></div>
                    </div>
                </div>
                <div className="textOdd">
                    <div className="textWrapper">
                        <div className="number"><img src={book3} /></div>
                        <div className="textSign">
                            <p>Listing on a marketplace and a launch of an introductory auction with exclusive couches.</p>
                            <img src={signHorizontal} />
                        </div>
                    </div>
                </div>
                <div className="empty3"><img src={meteorite} /></div>
                <div className="empty4"><img src={lunaBIG} /></div>
                <div className="textEven">
                    <div className="textWrapper">
                        <div className="textSign">
                            <p>Private Couch Mint, followed by a Public Couch Mint</p>
                            <img src={signHorizontal} />
                        </div>
                        <div className="number"><img src={book4} /></div>
                    </div>
                </div>
                <div className="textOdd">
                    <div className="textWrapper">
                        <div className="number"><img src={book5} /></div>
                        <div className="textSign">
                            <p>
                                Search for sponsors, collaborations.
                                Development of Couch Adventures Game, and launch of closed beta tests for DaCouch NFT holders.
                            </p>
                            <img src={signHorizontal} />
                        </div>
                    </div>
                </div>
                <div className="empty5"><img src={earthPNG} /></div>
            </div>
        </div>
    )
}

export default BigRoadmap;
