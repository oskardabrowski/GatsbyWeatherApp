import React, {useState, useReducer} from 'react';

// * Importing Default images
import Clouds from '../images/Clouds.png';
import FeatherCloudsSky from '../images/FeatherCloudsSky.png';
import SunnySea from '../images/SunnySea.png';
import SunsetInsideTree from '../images/SunsetInsideTree.png';
import Forest from '../images/Forest.png';

const imagesDefault = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];

const GlobalAppContext = React.createContext();

const reducer = ({id, hours}) => {
    if(id >= 200 && id < 300) {
        return imagesDefault; // storm
    } else if(id >= 300 && id < 500) {
        return imagesDefault; //rain
    } else if(id >= 500 && id < 600) {
        return imagesDefault; //rain
    } else if(id >= 600 && id < 700) {
        return imagesDefault; //snow
    } else if(id >= 700 && id < 800) {
        return imagesDefault; //fog
    } else if(id == 800 && hours <= 6) {
        return imagesDefault; // full moon
    } else if(id == 800 && hours < 22) {
        return imagesDefault; // sunny
    } else if(id == 800 && hours >= 22) {
        return imagesDefault; // full moon
    } else if(id == 801 && hours <= 6) {
        return imagesDefault; // coudy moon
    } else if(id == 801 && hours < 22) {
        return imagesDefault; // cloudy sun
    } else if(id == 801 && hours >= 22) {
        return imagesDefault; // cloudy moon
    } else if(id > 801) {
        return imagesDefault; // cloud
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
