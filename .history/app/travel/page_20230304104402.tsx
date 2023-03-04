'use client';
import React from 'react';
import { render } from 'react-dom';
import ReactFreezeframe from 'react-freezeframe';
const About = () => {
  return (
    <div style={{ marginTop: '5rem' }}>
      <ReactFreezeframe
        style={{ width: '13rem', height: '13rem' }}
        src="./images/travel/plane.gif"
      ></ReactFreezeframe>
    </div>
  );
};

export default About;
