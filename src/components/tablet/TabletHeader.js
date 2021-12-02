import React from "react";
import "./TabletHeader.css";
import bars from '../images/barsWhite.png'
import {Button, Drawer, IconButton, Snackbar} from "@material-ui/core";

export const TabletHeader = ({handleBackFirst, handleSamples, handleRarity, handleRoadmap, drawer, handleDrawerOpen, handleDrawerClose}) => {

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

    const handleClickClose = () => {
        handleDrawerClose();
        setTimeout(handleClick({vertical: 'bottom', horizontal: 'center'}), 300);
    }

    return (
        <div className="tablet-header">
            <div className="title-tablet-wrapper">
                <div className="title-tablet" onClick={handleBackFirst}>DaCouch</div>
            </div>
            <div className="title-bars-wrapper">
                <div className="title-bars">
                    <IconButton
                        {...{
                            edge: "end",
                            color: "inherit",
                            "aria-label": "menu",
                            "aria-haspopup": "true",
                            onClick: handleDrawerOpen,
                        }}
                    >
                        <img src={bars} />
                    </IconButton>
                    <Drawer
                        {...{
                            anchor: "right",
                            open: drawer,
                            onClose: handleDrawerClose,
                        }}
                    >
                            <div className={'tablet-drawer'}>
                                <div className="navItem1" onClick={handleSamples}>Samples</div>
                                <div className="navItem2" onClick={handleRarity}>Rarity Table</div>
                                <div className="navItem3" onClick={handleRoadmap}>Roadmap</div>
                                <Button variant="contained" color="primary.main" onClick={handleClickClose}>
                                    Mint
                                </Button>
                            </div>
                    </Drawer>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
                autoHideDuration={3000}
            >
                <div className="insideTabletSnackbar">
                    <div>Mint date is Dec 20th 2021</div>
                    <div>Stay tuned!</div>
                </div>
            </Snackbar>
        </div>
    );
};

export default TabletHeader;