"use client"
import React from 'react';
import ContainComponents from '../Contain/ContainComponents';
import SplitComponents from '../Split/SplitComponents';
import MergeComponents from '../Merge/MergeComnponent';
import useCurrentSection from '@/hooks/CurrentSection/useCurrentSection';

export default function WelcomeComponents() {
  const { currentSection } = useCurrentSection();

  const renderComponent = () => {
    switch(currentSection) {
      case 'split':
        return <SplitComponents />;
      case 'merge':
        return <MergeComponents />;
      case 'home':
      default:
        return <ContainComponents />;
    }
  };
  
  return (
    <div className="welcome-section mt-5">
      <div className="container">
        <h1 className="display-3 text-center">Bienvenido a Utilidades PDF</h1>
        <p className="lead text-center">
          Aquí podrás realizar diversas operaciones con tus archivos PDF.
        </p>
      </div>
      {renderComponent()}
    </div>
  );
}