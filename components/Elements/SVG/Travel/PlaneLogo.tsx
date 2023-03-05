'use client';
import React, { useState } from 'react';
import ReactFreezeframe from 'react-freezeframe';
const PlaneLogo: React.FC = () => {
  return (
    <div>
      {/* <ReactFreezeframe src="./images/travel/plane.gif"></ReactFreezeframe> */}
      <img style={{ height: '85vh' }} src="./images/travel/plane.gif" />
    </div>
  );
};
export default PlaneLogo;
