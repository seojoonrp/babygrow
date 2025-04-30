import React, { createContext, useState } from 'react';
export const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
    const [score, setScore] = useState(0);
    return (
      <AppContext.Provider value={{ score, setScore }}>
        {children}
      </AppContext.Provider>
    );
  };