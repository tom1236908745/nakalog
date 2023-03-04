'use client';
import React, { useState } from 'react';
import ReactFreezeframe from 'react-freezeframe';
const PlaneLogo: React.FC = () => {
  return (
    <div style={{ marginTop: '10rem', width: '13rem', height: '13rem' }}>
      <ReactFreezeframe src="./images/travel/plane.gif"></ReactFreezeframe>
    </div>
  );
};
export default PlaneLogo;
