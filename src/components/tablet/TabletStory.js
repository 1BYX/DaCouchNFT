import React from 'react'
import "./TabletStory.css"
import earthGIF from '../images/earthGIF.gif'

const TabletStory = () => {
    return(
        <div className="tablet-story">
            <div className="tablet-story-description">
                <h2>The story of couches</h2>
                <p>
                    Due to unknown reasons, the couches are disappearing all over the world. Humanity has thrown all of its forces into finding a reason, and is actively trying to get their couches back.
                </p>
                <p>You can find out more about DaCouch story in our <a href={"https://discord.gg/rXbyv64ZSd"}>discord</a>.</p>
            </div>
            <div className="big-story-gif-wrapper">
                <img src={earthGIF} className={"tablet-story-gif"}/>
            </div>
        </div>
    )
}

export default TabletStory;