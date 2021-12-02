import React from 'react';
import "./TabletSamples.css";
import Slider from "../slider/sliders";

const TabletSamples = ({samples, sampleNftRef, tabletView}) => {

    return(
        <div className={"tablet-samples"} ref={sampleNftRef}>
            <div className="tablet-description">
                <h2>NFT Couches</h2>
                <div className={"tablet-description-text"}>Our NFTs are the living couches with a random set of traits that emphasize the uniqueness of each and every one of them. Background, skin, mouth, hat / item - items which give every couch that uniqueness.</div>
            </div>
            <div className="tablet-slider-wrapper">
                <div className="tablet-slider">
                    <Slider data={samples} tabletView={tabletView} />
                </div>
            </div>
        </div>
    )
}

export default TabletSamples;