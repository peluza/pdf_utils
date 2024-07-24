"use client"
import React, { useState } from 'react';
import ContainComponents from '../Contain/ContainComponents';
import SplitComponents from '../Split/SplitComponents';
import useCurrentSection from '@/hooks/Conan/useCurrentSection';


export default function WelcomeCoponents() {
  // Use the hook to get the currentSection and its setter
  const [currentSection, setCurrentSection] = useCurrentSection();
  console.log(currentSection);

  let componentToShow;
  if (currentSection === 'home') {
    componentToShow = <ContainComponents />;
  } else if (currentSection === 'split') {
    componentToShow = <SplitComponents />;
  } else {
    componentToShow = null; // Or handle the case where the section is invalid
  }

  return (
    <div className="welcome-section mt-5">
      <div className="container">
        <h1 className="display-3 text-center">Bienvenido a Utilidades PDF</h1>
        <p className="lead text-center">
          Aquí podrás realizar diversas operaciones con tus archivos PDF.
        </p>
      </div>
      {componentToShow} 
    </div>
  );
}
