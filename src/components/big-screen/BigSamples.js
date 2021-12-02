import React from 'react';
import "./BigSamples.css";
import Sliders from "../slider/sliders";

const BigSamples = ({samples, sampleNftRef, tabletView}) => {

    return(
        <div className={"big-samples"} ref={sampleNftRef}>
            <div className="description">
                <h2>NFT Couches</h2>
                <div className={"description-text"}>
                    Our NFTs are the living couches with a random set of
                    traits that emphasize uniqueness of each and
                    every one of them. Background, skin, mouth,
                    hat / item - things that give every couch that uniqueness.
                </div>
            </div>
            <div className="slider-wrapper">
                <div className="slider">
                    <Sliders data={samples} tabletView={tabletView} />
                </div>
            </div>
        </div>
    )
}

export default BigSamples;