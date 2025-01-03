import { createContext } from 'react';
import { Topics_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const contextValue = { Topics_list };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

