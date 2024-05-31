// src/Loader.js
import React from 'react';
import './loader.css';
import pizza from './images'



const Loader = () => {
  return (
    <div className="loader">
      <img src={pizza} alt="Loading..." className="pizza" />
    </div>
  );
};

export default Loader;
