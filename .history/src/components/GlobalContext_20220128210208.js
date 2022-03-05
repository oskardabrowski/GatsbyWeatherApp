import React, {useState, useReducer} from 'react';

// * Importing images
import Clouds from '../images/Clouds.png';
import FeatherCloudsSky from '../images/FeatherCloudsSky.png';
import SunnySea from '../images/SunnySea.png';
import SunsetInsideTree from '../images/SunsetInsideTree.png';
import Forest from '../images/Forest.png';

const images = [Clouds, FeatherCloudsSky, SunnySea, SunsetInsideTree, Forest];

const GlobalAppContext = React.createContext();

const reducer = () => {

}




const GlobalContextProvider = ({children}) => {
const [sliderSet, setSliderSet] = useState(images);
const [imagesReducerState, dispatch] = useReducer(reducer, images);
  return <GlobalAppContext.Provider
  value={{
      imagesReducerState
   }}
  >
      {children}
  </GlobalAppContext.Provider>;
};

export {GlobalContextProvider, GlobalAppContext};
