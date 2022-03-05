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

// * Importing ThunderStorm Images
import Thunder1 from '../images/WeatherImages/Thunder1.png';
import Thunder2 from '../images/WeatherImages/Thunder2.png';
import Thunder3 from '../images/WeatherImages/Thunder3.png';

// * Importing Rain Images
import Rain1 from '../images/WeatherImages/Rain1.png';
import Rain2 from '../images/WeatherImages/Rain2.png';
import Rain3 from '../images/WeatherImages/Rain3.png';

// * Importing Snow Images
import Snow1 from '../images/WeatherImages/Snow1.png';
import Snow2 from '../images/WeatherImages/Snow2.png';
import Snow3 from '../images/WeatherImages/Snow3.png';

// * Importing Moon Images
import Moon1 from '../images/WeatherImages/Moon1.png';
import Moon2 from '../images/WeatherImages/Moon2.png';
import Moon3 from '../images/WeatherImages/Moon3.png';

const imagesDefault = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];
const imagesSunny = [Sunny1, Sunny2, Sunny3];
const imagesThunder = [Thunder1, Thunder2, Thunder3];
const imagesRain = [Rain1, Rain2, Rain3];
const imagesSnow = [Snow1, Snow2, Snow3];
const imagesMoon = [Moon1, Moon2, Moon3];

const GlobalAppContext = React.createContext();

const reducer = (state, action) => {
    if(action.id >= 200 && action.id < 300) {
        return state = imagesThunder; // storm
    } else if(action.id >= 300 && action.id < 500) {
        return state = imagesRain; //rain
    } else if(action.id >= 500 && action.id < 600) {
        return state = imagesRain; //rain
    } else if(action.id >= 600 && action.id < 700) {
        return state = imagesSnow; //snow
    } else if(action.id >= 700 && action.id < 800) {
        return state = imagesSunny; //fog
    } else if(action.id == 800 && action.hours <= 6) {
        return state = imagesMoon; // full moon
    } else if(action.id == 800 && action.hours < 22) {
        return state = imagesSunny; // sunny
    } else if(action.id == 800 && action.hours >= 22) {
        return state = imagesMoon; // full moon
    } else if(action.id == 801 && action.hours <= 6) {
        return state = imagesSunny; // cloudy moon
    } else if(action.id == 801 && action.hours < 22) {
        return state = imagesSunny; // cloudy sun
    } else if(action.id == 801 && action.hours >= 22) {
        return state = imagesSunny; // cloudy moon
    } else if(action.id > 801) {
        return state = imagesSunny; // cloud
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
