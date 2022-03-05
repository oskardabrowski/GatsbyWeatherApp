import React, {useState, useReducer} from 'react';
import { StaticImage } from "gatsby-plugin-image";
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

// * Importing Cloudy Moon Images
import CloudyMoon1 from '../images/WeatherImages/CloudyMoon1.png';
import CloudyMoon2 from '../images/WeatherImages/CloudyMoon2.png';
import CloudyMoon3 from '../images/WeatherImages/CloudyMoon3.png';

// * Importing Cloudy Sun Images
import CloudySun1 from '../images/WeatherImages/CloudySun1.png';
import CloudySun2 from '../images/WeatherImages/CloudySun2.png';
import CloudySun3 from '../images/WeatherImages/CloudySun3.png';

// * Importing Cloudy Sun Images
import Cloudy1 from '../images/WeatherImages/Cloudy1.png';
import Cloudy2 from '../images/WeatherImages/Cloudy2.png';
import Cloudy3 from '../images/WeatherImages/Cloudy3.png';

const imagesDefault = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];
const imagesSunny = [Sunny1, Sunny2, Sunny3];
const imagesThunder = [Thunder1, Thunder2, Thunder3];
const imagesRain = [Rain1, Rain2, Rain3];
const imagesSnow = [Snow1, Snow2, Snow3];
const imagesMoon = [Moon1, Moon2, Moon3];
const imagesCloudyMoon = [CloudyMoon1, CloudyMoon2, CloudyMoon3];
const imagesCloudySun = [CloudySun1, CloudySun2, CloudySun3];
const imagesCloudy = [
    <StaticImage />,
    {id: 1, title: 'Cloudy1', image: '../images/WeatherImages/Cloudy1.png'},
    {id: 2, title: 'Cloudy2', image: '../images/WeatherImages/Cloudy1.png'},
    {id: 3, title: 'Cloudy3', image: '../images/WeatherImages/Cloudy1.png'}
];



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
        return state = imagesCloudyMoon; // cloudy moon
    } else if(action.id == 801 && action.hours < 22) {
        return state = imagesCloudySun; // cloudy sun
    } else if(action.id == 801 && action.hours >= 22) {
        return state = imagesCloudyMoon; // cloudy moon
    } else if(action.id > 801) {
        return state = imagesCloudy; // cloud
    } else {
        return imagesDefault;
    }

}

const GlobalContextProvider = ({children}) => {
const [curtain, setCurtain] = useState(false);
const [state, dispatch] = useReducer(reducer, imagesDefault);
  return <GlobalAppContext.Provider
  value={{
      state,
      dispatch,
      curtain,
      setCurtain
   }}
  >
      {children}
  </GlobalAppContext.Provider>;
};

export {GlobalContextProvider, GlobalAppContext};
