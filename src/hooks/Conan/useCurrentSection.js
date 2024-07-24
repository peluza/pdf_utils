"use client"
import React, { useState } from 'react';

const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState('home');
  return [currentSection, setCurrentSection];
};

export default useCurrentSection;