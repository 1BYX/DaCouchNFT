import React from 'react';
import NFT0 from '../images/NFT0.jpg'
import './BigTeam.css'
import dev from '../images/Egor.png'
import TaskMaster from '../images/Fil (1).png'
import DaCar from '../images/Maks.png'
import artist from '../images/danya.png'
import pain from '../images/Nekit.png'


const BigTeam = () => {
    return(
        <div className="big-team">
            <div className="big-team-title">
                Our team
            </div>
            <div className="big-team-members">
                <div className="big-team-member1">
                    <div className="big-team-member-img">
                        <img src={dev} />
                    </div>
                    <div className="big-team-member-name">
                        <h1>Couch Hacker</h1>
                        <h3>Head Developer</h3>
                    </div>
                </div>
                <div className="big-team-member2">
                    <div className="big-team-member-img">
                        <img src={artist} />
                    </div>
                    <div className="big-team-member-name">
                        <h1>Couch Picasso</h1>
                        <h3>Pixel Artist</h3>
                    </div>
                </div>
                <div className="big-team-member3">
                    <div className="big-team-member-img">
                        <img src={TaskMaster} />
                    </div>
                    <div className="big-team-member-name">
                        <h1>Couch Masson</h1>
                        <h3>Socials Manager</h3>
                    </div>
                </div>
                <div className="big-team-member4">
                    <div className="big-team-member-img">
                        <img src={pain} />
                    </div>
                    <div className="big-team-member-name">
                        <h1>Couch Ninja</h1>
                        <h3>Ad Director</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigTeam;