import React, {useContext, useState} from 'react';

// * Importing images
import Clouds from '../images/Clouds.png';
import FeatherCloudsSky from '../images/FeatherCloudsSky.png';
import SunnySea from '../images/SunnySea.png';
import SunsetInsideTree from '../images/SunsetInsideTree.png';
import Forest from '../images/Forest.png';


const images = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];




const GlobalCOntext = React.createContext();

const GlobalContext = ({children}) => {
const [sliderSet, setSliderSet] = useState(images);
  return <GlobalCOntext.Provider
  value={
      sliderSet,
      setSliderSet
  }
  >
      {children}
  </GlobalCOntext.Provider>;
};

const useGlobalContext = () => {
    return useContext(GlobalCOntext)
}


export {GlobalContext, GlobalCOntext};
