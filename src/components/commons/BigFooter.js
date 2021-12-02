import React from 'react';
import './BigFooter.css';
import telegram from '../../telegram-64.png'
import discord from '../../discord-2-64.png'

const BigFooter = () => {
    return(
        <div className="big-footer">
            <div className="big-footer-slogan">
                <h2>Join DaCouch</h2>
                <h3>Become a part of the new world</h3>
            </div>
            <div className="big-footer-icons">
                <div className="big-twitter big-footer-icon">
                    <a href={"https://twitter.com/DaCouchNFT"}><img src={"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"} /></a>
                </div>
                {/*<div className="big-telegram big-footer-icon">*/}
                {/*    <img src={telegram} />*/}
                {/*</div>*/}
                <div className="big-discord big-footer-icon">
                    <a href={"http://discord.gg/NjHSn7aYUY"}><img src={discord} /></a>
                </div>
            </div>
            <div className="rights">
                <p>DaCouch 2021. All rights reserved.</p>
            </div>
        </div>
    )
}

export default BigFooter;