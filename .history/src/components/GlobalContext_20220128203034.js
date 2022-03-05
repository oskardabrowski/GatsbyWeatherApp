import React, {useContext} from 'react';

const GlobalCOntext = React.createContext();

const GlobalContext = () => {
  return <GlobalCOntext.Provider
  value=""
  >
      children
  </GlobalCOntext.Provider>;
};

const useGlobalContext = () => {
    return useContext(GlobalCOntext)
}


export {GlobalContext, useGlobalContext};
