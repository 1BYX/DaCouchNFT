import React, {useRef, useState, useEffect} from 'react';
import './App.css';
import {BigHeader} from "./components/big-screen/BigHeader";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import FirstScreen from "./components/commons/FirstScreen";
import {ReactP5Wrapper} from "react-p5-wrapper";
import Sketch from "./components/commons/Sketch";
import './App.css'
import BigSamples from "./components/big-screen/BigSamples";
import samples from "./data/samples";
import BigStory from "./components/big-screen/BigStory";
import BigRoadmap from "./components/big-screen/BigRoadmap";
import BigRarityTable from "./components/big-screen/BigRarityTable";
import traits from "./data/traits";
import BigFooter from "./components/commons/BigFooter";
import TabletHeader from "./components/tablet/TabletHeader";
import TabletSamples from "./components/tablet/TabletSamples";
import TabletStory from "./components/tablet/TabletStory";
import TabletRarityTable from "./components/tablet/TabletRarityTable";
import BigTeam from "./components/big-screen/BigTeam";
import TabletTeam from "./components/tablet/TabletTeam";
import TabletRoadmap from "./components/tablet/TabletRoadmap";

function App() {

  const [state, setState] = useState({tabletView: false, mobileView: false});

  const {tabletView} = state;
  const {mobileView} = state;

  useEffect(() => {
    const setResponsiveness = () => {
        // if(window.innerWidth < 576) {
        //   setState((prevState) => ({...prevState, mobileView: true, tabletView: false}));
        // } else
        if(window.innerWidth < 1200) {
              setState((prevState) => ({...prevState, tabletView: true, mobileView: false}));
        } else {
          setState((prevState) => ({...prevState, tabletView: false, mobileView: false}));
        }
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#8C8CBF',

      }
    },
    typography: {
      fontFamily: 'Quicksand',
      button: {
        fontSize: '15px',
        color: ''
      },

    },
    overrides: {
      MuiButton: {}
    }
  })


  const firstScreenRef = useRef();

  const handleBackFirst = () => {
    firstScreenRef.current.scrollIntoView({behavior: 'smooth' });
  }

  const sampleNftRef = useRef();

  const handleSamples = () => {
    sampleNftRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const rarityRef = useRef();

  const handleRarity = () => {
    rarityRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const roadmapRef = useRef();

  const handleRoadmap = () => {
    roadmapRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const [drawer, setDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  }

  const handleDrawerClose = () => {
    setDrawer(false);
  }

  const samplesClose = () => {
    handleSamples();
    setTimeout(() => handleDrawerClose(), 800);
  }

  const rarityClose = () => {
    handleRarity();
    setTimeout(() => handleDrawerClose(), 800);
  }

  const roadmapClose = () => {
    handleRoadmap();
    setTimeout(() => handleDrawerClose(), 800);
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <div className="header">
          {!tabletView && !mobileView ? <BigHeader handleBackFirst={handleBackFirst} handleSamples={handleSamples} handleRarity={handleRarity} handleRoadmap={handleRoadmap} /> : console.log("nothing")}
          {tabletView && <TabletHeader handleBackFirst={handleBackFirst} handleSamples={samplesClose} handleRarity={rarityClose} handleRoadmap={roadmapClose} drawer={drawer} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} />}
        </div>
        <div className="sketch">
          <ReactP5Wrapper sketch={Sketch} className={"Sketch"}/>
        </div>
        <div className="firstScreen">
          <FirstScreen firstScreenRef={firstScreenRef} />
        </div>
        <div className="samples">
          {!tabletView && !mobileView ? <BigSamples samples={samples} sampleNftRef={sampleNftRef} tabletView={tabletView}/> : console.log("an easter egg?")}
          {tabletView && <TabletSamples samples={samples} sampleNftRef={sampleNftRef} tabletView={tabletView}/>}
        </div>
        <div className="story">
          {!tabletView && !mobileView ?  <BigStory /> : console.log("bruh")}
          {tabletView && <TabletStory />}
        </div>
        <div className="rarityTable">
          {!tabletView && !mobileView ? <BigRarityTable traits={traits} rarityRef={rarityRef} samples={samples} tabletView={tabletView}/> : console.log("an easter egg?")}
          {tabletView && <TabletRarityTable traits={traits} rarityRef={rarityRef} samples={samples} tabletView={tabletView}/>}
        </div>
        <div className="ourTeam">
          {!tabletView && !mobileView ? <BigTeam /> : console.log("an easter egg?")}
          {tabletView && <TabletTeam />}
        </div>
        <div className="roadmap">
          {!tabletView && !mobileView ? <BigRoadmap roadmapRef={roadmapRef} /> : console.log("an easter egg?")}
          {tabletView && <TabletRoadmap roadmapRef={roadmapRef} />}
        </div>
        <div className="footer">
          <BigFooter />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
