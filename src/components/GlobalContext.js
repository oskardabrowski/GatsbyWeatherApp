import React, {useState, useReducer} from 'react';
import { StaticImage } from "gatsby-plugin-image";

// * Importing defau;lt images
const imagesDefault = [
    <StaticImage class="image" src="../images/Clouds.png" alt="Clouds" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/FeatherCloudsSky.png" alt="FeatherCloudsSky" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/SunnySea.png" alt="SunnySea" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/SunsetInsideTree.png" alt="SunsetInsideTree" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/Forest.png" alt="Forest" placeholder="blurred"/>,
];

// * Importing sunny images
const imagesSunny = [
    <StaticImage class="image" src="../images/WeatherImages/Sunny1.png" alt="Sunny1" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Sunny2.png" alt="Sunny2" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Sunny3.png" alt="Sunny3" placeholder="blurred"/>,
];

// * Importing ThunderStorm Images
const imagesThunder = [
    <StaticImage class="image" src="../images/WeatherImages/Thunder1.png" alt="Thunder1" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Thunder2.png" alt="Thunder2" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Thunder3.png" alt="Thunder3" placeholder="blurred"/>,
];

// * Importing Snow Images
const imagesRain = [
    <StaticImage class="image" src="../images/WeatherImages/Rain1.png" alt="Rain1" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Rain2.png" alt="Rain2" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Rain3.png" alt="Rain3" placeholder="blurred"/>,
];

// * Importing Snow Images
const imagesSnow = [
    <StaticImage class="image" src="../images/WeatherImages/Snow1.png" alt="Snow1" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Snow2.png" alt="Snow2" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Snow3.png" alt="Snow3" placeholder="blurred"/>,
];

// * Importing Moon Images
const imagesMoon = [
    <StaticImage class="image" src="../images/WeatherImages/Moon1.png" alt="Moon1" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Moon2.png" alt="Moon2" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Moon3.png" alt="Moon3" placeholder="blurred"/>,
];

// * Importing Cloudy Moon Images
const imagesCloudyMoon = [
    <StaticImage class="image" src="../images/WeatherImages/CloudyMoon1.png" alt="CloudyMoon1" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/CloudyMoon2.png" alt="CloudyMoon2" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/CloudyMoon3.png" alt="CloudyMoon3" placeholder="blurred"/>,
];

// * Importing Cloudy Sun Images
const imagesCloudySun = [
    <StaticImage class="image" src="../images/WeatherImages/CloudySun1.png" alt="CloudySun1" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/CloudySun2.png" alt="CloudySun2" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/CloudySun3.png" alt="CloudySun3" placeholder="blurred"/>,
];

// * Importing Cloudy Images
const imagesCloudy = [
    <StaticImage class="image" src="../images/WeatherImages/Cloudy1.png" alt="Cloudy1" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Cloudy2.png" alt="Cloudy2" placeholder="blurred"/>,
    <StaticImage class="image" src="../images/WeatherImages/Cloudy3.png" alt="Cloudy3" placeholder="blurred"/>,
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
const [state, dispatch] = useReducer(reducer, imagesDefault);
  return <GlobalAppContext.Provider
  value={{
      state,
      dispatch,
   }}
  >
      {children}
  </GlobalAppContext.Provider>;
};

export {GlobalContextProvider, GlobalAppContext};
