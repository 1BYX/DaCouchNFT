import React from 'react'
import "./BigStory.css"
import earthGIF from '../images/earthGIF.gif'

const BigStory = () => {
    return(
        <div className="big-story">
            <div className="big-story-gif-wrapper">
                <img src={earthGIF} className={"big-story-gif"}/>
            </div>
            <div className="big-story-description">
                <h2>The story of couches</h2>
                <p>
                    Due to unknown reasons, the couches are disappearing all over the world. Humanity has thrown all of its forces into finding a reason, and is actively trying to get their couches back.
                </p>
                <p>You can find out more about DaCouch story in our <a href={"https://discord.gg/rXbyv64ZSd"}>discord</a>.</p>
            </div>
        </div>
    )
}

export default BigStory;