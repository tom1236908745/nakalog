import React, { Component, createRef } from 'react';
import ReactFreezeframe from 'react-freezeframe';
import { Freeze } from 'freezeframe/types';
const About = () => {
    private freeze = createRef<ReactFreezeframe>();
  return (
    <div style={{ marginTop: '10rem' }}>
      <img
        style={{ width: '13rem', height: '13rem' }}
        src="./images/travel/plane.gif"
      ></img>
    </div>
  );
};

export default About;
