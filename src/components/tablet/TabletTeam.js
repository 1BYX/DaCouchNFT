import React from 'react';
import NFT0 from '../images/NFT0.jpg'
import './TabletTeam.css'
import dev from '../images/Egor.png'
import TaskMaster from '../images/Fil (1).png'
import DaCar from '../images/Maks.png'
import artist from '../images/danya.png'
import pain from '../images/Nekit.png'

const TabletTeam = () => {
    return(
        <div className="tablet-team">
            <div className="tablet-team-title">
                Our team
            </div>
            <div className="tablet-team-members">
                <div className="tablet-team-member1">
                    <div className="tablet-team-member-img">
                        <img src={dev} />
                    </div>
                    <div className="tablet-team-member-name">
                        <h2>Couch Hacker</h2>
                        <h4>Head Developer</h4>
                    </div>
                </div>
                <div className="tablet-team-member2">
                    <div className="tablet-team-member-img">
                        <img src={artist} />
                    </div>
                    <div className="tablet-team-member-name">
                        <h2>Couch Picasso</h2>
                        <h4>Pixel Artist</h4>
                    </div>
                </div>
                <div className="tablet-team-member3">
                    <div className="tablet-team-member-img">
                        <img src={TaskMaster} />
                    </div>
                    <div className="tablet-team-member-name">
                        <h2>Couch Masson</h2>
                        <h4>Socials Manager</h4>
                    </div>
                </div>
                <div className="tablet-team-member4">
                    <div className="tablet-team-member-img">
                        <img src={pain} />
                    </div>
                    <div className="tablet-team-member-name">
                        <h2>Couch Ninja</h2>
                        <h4>Ad Director</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabletTeam;