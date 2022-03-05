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

const reducer = (state, action) => {
    if(action.id >= 200 && action.id < 300) {
        return imagesSunny; // storm
    } else if(action.id >= 300 && action.id < 500) {
        return imagesSunny; //rain
    } else if(action.id >= 500 && action.id < 600) {
        return imagesSunny; //rain
    } else if(action.id >= 600 && action.id < 700) {
        return imagesSunny; //snow
    } else if(action.id >= 700 && action.id < 800) {
        return imagesSunny; //fog
    } else if(action.id == 800 && action.hours <= 6) {
        return imagesSunny; // full moon
    } else if(action.id == 800 && action.hours < 22) {
        return imagesSunny; // sunny
    } else if(action.id == 800 && action.hours >= 22) {
        return imagesSunny; // full moon
    } else if(action.id == 801 && action.hours <= 6) {
        return imagesSunny; // coudy moon
    } else if(action.id == 801 && action.hours < 22) {
        return imagesSunny; // cloudy sun
    } else if(action.id == 801 && action.hours >= 22) {
        return imagesSunny; // cloudy moon
    } else if(action.id > 801) {
        return imagesSunny; // cloud
    } else {
        return imagesDefault;
    }
}



const GlobalContextProvider = ({children}) => {

const [state, dispatch] = useReducer(reducer, imagesDefault);
  return <GlobalAppContext.Provider
  value={{
      state,
      dispatch
   }}
  >
      {children}
  </GlobalAppContext.Provider>;
};

export {GlobalContextProvider, GlobalAppContext};
