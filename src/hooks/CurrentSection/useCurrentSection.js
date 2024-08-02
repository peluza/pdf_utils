"use client"
import { useState, useEffect, createContext, useContext } from 'react';

const CurrentSectionContext = createContext();

export const CurrentSectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    console.log("Current section updated in provider:", currentSection);
  }, [currentSection]);

  return (
    <CurrentSectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </CurrentSectionContext.Provider>
  );
};

const useCurrentSection = () => {
  const context = useContext(CurrentSectionContext);
  if (!context) {
    throw new Error('useCurrentSection must be used within a CurrentSectionProvider');
  }
  return context;
};

export default useCurrentSection;