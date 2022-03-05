import React, {useState, useReducer} from 'react';

// * Importing Default images
import Clouds from '../images/Clouds.png';
import FeatherCloudsSky from '../images/FeatherCloudsSky.png';
import SunnySea from '../images/SunnySea.png';
import SunsetInsideTree from '../images/SunsetInsideTree.png';
import Forest from '../images/Forest.png';

// * Importing sunny images
import Sunny1 from '../images/WeatherImages/Sunny1.png';
import Sunny2 from '../images/WeatherImages/Sunny2.png';
import Sunny3 from '../images/WeatherImages/Sunny3.png';


const imagesDefault = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];
const imagesSunny = [Sunny1, Sunny2, Sunny3];

const GlobalAppContext = React.createContext();

const reducer = ({id, hours}) => {
    if(id >= 200 && id < 300) {
        return imagesSunny; // storm
    } else if(id >= 300 && id < 500) {
        return imagesSunny; //rain
    } else if(id >= 500 && id < 600) {
        return imagesSunny; //rain
    } else if(id >= 600 && id < 700) {
        return imagesSunny; //snow
    } else if(id >= 700 && id < 800) {
        return imagesSunny; //fog
    } else if(id == 800 && hours <= 6) {
        return imagesSunny; // full moon
    } else if(id == 800 && hours < 22) {
        return imagesSunny; // sunny
    } else if(id == 800 && hours >= 22) {
        return imagesSunny; // full moon
    } else if(id == 801 && hours <= 6) {
        return imagesSunny; // coudy moon
    } else if(id == 801 && hours < 22) {
        return imagesSunny; // cloudy sun
    } else if(id == 801 && hours >= 22) {
        return imagesSunny; // cloudy moon
    } else if(id > 801) {
        return imagesSunny; // cloud
    } else {
        return imagesDefault;
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
