'use client';
import React, { useEffect, useState } from 'react';
import Slider from './homeSlider/slider';
import About from './AboutCard/about';
import Programs from './ProgramCard/page';
import PopupModal from '@/Components/Popup/popup'; 

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <PopupModal onClose={closePopup} />}
      <Slider />
      <About />
      <Programs />
    </>
  );
};

export default Home;
