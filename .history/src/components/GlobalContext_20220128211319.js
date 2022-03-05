import React, {useState, useReducer} from 'react';

// * Importing images
import Clouds from '../images/Clouds.png';
import FeatherCloudsSky from '../images/FeatherCloudsSky.png';
import SunnySea from '../images/SunnySea.png';
import SunsetInsideTree from '../images/SunsetInsideTree.png';
import Forest from '../images/Forest.png';

const imagesDefault = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];

const GlobalAppContext = React.createContext();

const reducer = ({type}) => {
    if(id >= 200 && id < 300) {
        return <WiDayThunderstorm />; // storm
    } else if(id >= 300 && id < 500) {
        return <WiDayRainMix />; //rain
    } else if(id >= 500 && id < 600) {
        return <WiDayRain />; //rain
    } else if(id >= 600 && id < 700) {
        return <WiDaySnow />; //snow
    } else if(id >= 700 && id < 800) {
        return <WiDayFog />; //fog
    } else if(id == 800 && hours <= 6) {
        return <WiMoonAltFull />; // full moon
    } else if(id == 800 && hours < 22) {
        return <WiDaySunny />; // sunny
    } else if(id == 800 && hours >= 22) {
        return <WiMoonAltFull />; // full moon
    } else if(id == 801 && hours <= 6) {
        return <WiNightAltCloudy />; // coudy moon
    } else if(id == 801 && hours < 22) {
        return <WiDaySunnyOvercast />; // cloudy sun
    } else if(id == 801 && hours >= 22) {
        return <WiNightAltCloudy />; // cloudy moon
    } else if(id > 801) {
        return <WiCloudy />; // cloud
    }
}




const GlobalContextProvider = ({children}) => {
const [imagesReducerState, backgroundImagesReducer] = useReducer(reducer, imagesDefault);
  return <GlobalAppContext.Provider
  value={{
      imagesReducerState,
      backgroundImagesReducer
   }}
  >
      {children}
  </GlobalAppContext.Provider>;
};

export {GlobalContextProvider, GlobalAppContext};
