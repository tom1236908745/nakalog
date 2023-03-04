'use client';
import React from 'react';
import { render } from 'react-dom';
import ReactFreezeframe from 'react-freezeframe';
const About = () => {
  return (
    <div style={{ marginTop: '10rem', width: '13rem', height: '13rem' }}>
      <ReactFreezeframe src="./images/travel/plane.gif"></ReactFreezeframe>
    </div>
  );
};

export default About;
