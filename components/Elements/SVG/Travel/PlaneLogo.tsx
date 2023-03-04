'use client';
import React, { useState } from 'react';
import ReactFreezeframe from 'react-freezeframe';
const PlaneLogo: React.FC = () => {
  return (
    <div>
      {/* <ReactFreezeframe src="./images/travel/plane.gif"></ReactFreezeframe> */}
      <img
        style={{ width: '13rem', height: '13rem' }}
        src="./images/travel/plane.gif"
      />
    </div>
  );
};
export default PlaneLogo;
