import React, { useLayoutEffect, useState } from 'react';
import './FirstScreen.css'


const FirstScreen = ({firstScreenRef}) => {

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }



    return <div className="big-first-screen" ref={firstScreenRef}  />
}

export default FirstScreen;
