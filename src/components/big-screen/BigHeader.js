import React from 'react'
import './BigHeader.css'
import {Button, Snackbar} from "@material-ui/core";


export const BigHeader = ({handleBackFirst, handleSamples, handleRarity, handleRoadmap}) => {

    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };


    return (
        <div className="big-header">
            <div className="title" onClick={handleBackFirst}>DaCouch</div>
            <div className="nav">
                <div className="navItem1">
                    <div onClick={handleSamples}>Samples</div>
                </div>
                <div className="navItem2">
                    <div onClick={handleRarity}>Rarity Table</div>
                </div>
                <div className="navItem3">
                    <div onClick={handleRoadmap}>Roadmap</div>
                </div>
                <div className="navItem4">
                    <Button variant="contained" size="large" color="primary" onClick={handleClick({vertical: 'bottom', horizontal: 'center'})}>
                        Mint
                    </Button>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
                autoHideDuration={3000}
            >
                <div className="insideSnackbar">
                    <h3>Mint date is Dec 20th 2021. Stay tuned!</h3>
                </div>
            </Snackbar>
        </div>
    )
}