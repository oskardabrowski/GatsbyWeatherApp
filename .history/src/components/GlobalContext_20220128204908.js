import React, {useState} from 'react';

// * Importing images
import Clouds from '../images/Clouds.png';
import FeatherCloudsSky from '../images/FeatherCloudsSky.png';
import SunnySea from '../images/SunnySea.png';
import SunsetInsideTree from '../images/SunsetInsideTree.png';
import Forest from '../images/Forest.png';


const images = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];


const GlobalAppContext = React.createContext();

const GlobalContextProvider = ({children}) => {
const [sliderSet, setSliderSet] = useState('Kurwa');
  return <GlobalAppContext.Provider
  value={"kurwa"}
  >
      {children}
  </GlobalAppContext.Provider>;
};

export {GlobalContextProvider, GlobalAppContext};
