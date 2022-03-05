import React, {useContext} from 'react';

const GlobalCOntext = React.createContext();


const GlobalContext = () => {
  return <GlobalCOntext.Provider>
      {children}
  </GlobalCOntext.Provider>;
};

export default GlobalContext;
