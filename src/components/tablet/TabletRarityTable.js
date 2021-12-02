import React, {useState} from 'react'
import './TabletRarityTable.css'
import {Button} from "@mui/material";
import Sliders from "../slider/sliders";

const TabletRarityTable = ({traits, rarityRef, tabletView}) => {

    const [traitSelected, setTraitSelected] = useState(0);
    const [raritySelected, setRaritySelected] = useState(0);

    // const allBackgrounds = traits.slice(0, 999999);
    // const allHats = traits.slice(0, 999999);
    // const allSkins = traits.slice(0, 999999);
    // const allEyes = traits.slice(0, 999999);
    // const allMouths = traits.slice(0, 999999);
    // const commonBackgrounds = traits.slice(0, 999999);
    // const commonHats = traits.slice(0, 999999);
    // const commonSkins = traits.slice(0, 999999);
    // const commonEyes = traits.slice(0, 999999);
    // const commonMouths = traits.slice(0, 999999);
    // const rareBackgrounds = traits.slice(0, 999999);
    // const rareHats = traits.slice(0, 999999);
    // const rareSkins = traits.slice(0, 999999);
    // const rareEyes = traits.slice(0, 999999);
    // const rareMouths = traits.slice(0, 999999);
    // const epicBackgrounds = traits.slice(0, 999999);
    // const epicHats = traits.slice(0, 999999);
    // const epicSkins = traits.slice(0, 999999);
    // const epicEyes = traits.slice(0, 999999);
    // const epicMouths = traits.slice(0, 999999);
    // const legendaryBackgrounds = traits.slice(0, 999999);
    // const legendaryHats = traits.slice(0, 999999);
    // const legendarySkins = traits.slice(0, 999999);
    // const legendaryEyes = traits.slice(0, 999999);
    // const legendaryMouths = traits.slice(0, 999999);

    return (
        <div className="tablet-rarity-table-wrapper">
            <div className="tablet-rarity-title">Rarity Table</div>
            <div className="tablet-rarity-table" ref={rarityRef}>
                <div className="tablet-trait-buttons">
                    <div className={traitSelected === 0 ? "activeButton tabletTraitButton" : "tabletTraitButton"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setTraitSelected(0)}>
                            Background
                        </Button>
                    </div>
                    <div className={traitSelected === 1 ? "activeButton tabletTraitButton" : "tabletTraitButton"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setTraitSelected(1)}>
                            Hat / Item
                        </Button>
                    </div>
                    <div className={traitSelected === 2 ? "activeButton tabletTraitButton" : "tabletTraitButton"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setTraitSelected(2)}>
                            Skin
                        </Button>
                    </div>
                    <div className={traitSelected === 3 ? "activeButton tabletTraitButton" : "tabletTraitButton"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setTraitSelected(3)}>
                            Eyes
                        </Button>
                    </div>
                    <div className={traitSelected === 4 ? "activeButton tabletTraitButton" : "tabletTraitButton"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setTraitSelected(4)}>
                            Mouth
                        </Button>
                    </div>
                </div>

                <div className="tablet-rarity-buttons">
                    <div className={raritySelected === 0 ? "bigRarityButton all activeButton" : "bigRarityButton all"}>
                        <Button variant="contained" size="large" color="success" onClick={() => setRaritySelected(0)}>
                            All
                        </Button>
                    </div>
                    <div
                        className={raritySelected === 1 ? "tabletRarityButton common activeButton" : "tabletRarityButton common"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setRaritySelected(1)}>
                            Common
                        </Button>
                    </div>
                    <div
                        className={raritySelected === 2 ? "tabletRarityButton rare activeButton" : "tabletRarityButton rare"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setRaritySelected(2)}>
                            Rare
                        </Button>
                    </div>
                    <div
                        className={raritySelected === 3 ? "tabletRarityButton epic activeButton" : "tabletRarityButton epic"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setRaritySelected(3)}>
                            Epic
                        </Button>
                    </div>
                    <div
                        className={raritySelected === 4 ? "tabletRarityButton legendary activeButton" : "tabletRarityButton legendary"}>
                        <Button variant="contained" size="large" color="primary" onClick={() => setRaritySelected(4)}>
                            Legendary
                        </Button>
                    </div>
                </div>

                <div className="tablet-raritySlider">
                    <div className="tablet-rarity-slider-wrapper">
                        {/*{traitSelected === 0 && raritySelected === 0 ? <Slider data={allBackgrounds}/>}*/}
                        {/*{traitSelected === 1 && raritySelected === 0 ? <Slider data={allHats}/>}*/}
                        {/*{traitSelected === 2 && raritySelected === 0 ? <Slider data={allSkins}/>}*/}
                        {/*{traitSelected === 3 && raritySelected === 0 ? <Slider data={allEyes}/>}*/}
                        {/*{traitSelected === 4 && raritySelected === 0 ? <Slider data={allMouths}/>}*/}
                        {/*{traitSelected === 0 && raritySelected === 1 ? <Slider data={commonBackgrounds}/>}*/}
                        {/*{traitSelected === 1 && raritySelected === 1 ? <Slider data={commonHats}/>}*/}
                        {/*{traitSelected === 2 && raritySelected === 1 ? <Slider data={commonSkins}/>}*/}
                        {/*{traitSelected === 3 && raritySelected === 1 ? <Slider data={commonEyes}/>}*/}
                        {/*{traitSelected === 4 && raritySelected === 1 ? <Slider data={commonMouths}/>}*/}
                        {/*{traitSelected === 0 && raritySelected === 2 ? <Slider data={rareBackgrounds}/>}*/}
                        {/*{traitSelected === 1 && raritySelected === 2 ? <Slider data={rareHats}/>}*/}
                        {/*{traitSelected === 2 && raritySelected === 2 ? <Slider data={rareSkins}/>}*/}
                        {/*{traitSelected === 3 && raritySelected === 2 ? <Slider data={rareEyes}/>}*/}
                        {/*{traitSelected === 4 && raritySelected === 2 ? <Slider data={rareMouths}/>}*/}
                        {/*{traitSelected === 0 && raritySelected === 3 ? <Slider data={epicBackgrounds}/>}*/}
                        {/*{traitSelected === 1 && raritySelected === 3 ? <Slider data={epicHats}/>}*/}
                        {/*{traitSelected === 2 && raritySelected === 3 ? <Slider data={epicSkins}/>}*/}
                        {/*{traitSelected === 3 && raritySelected === 3 ? <Slider data={epicEyes}/>}*/}
                        {/*{traitSelected === 4 && raritySelected === 3 ? <Slider data={epicMouths}/>}*/}
                        {/*{traitSelected === 0 && raritySelected === 4 ? <Slider data={legendaryBackgrounds}/>}*/}
                        {/*{traitSelected === 1 && raritySelected === 4 ? <Slider data={legendaryHats}/>}*/}
                        {/*{traitSelected === 2 && raritySelected === 4 ? <Slider data={legendarySkins}/>}*/}
                        {/*{traitSelected === 3 && raritySelected === 4 ? <Slider data={legendaryEyes}/>}*/}
                        {/*{traitSelected === 4 && raritySelected === 4 ? <Slider data={legendaryMouths}/>}*/}
                        <Sliders data={traits} tabletView={tabletView}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabletRarityTable;