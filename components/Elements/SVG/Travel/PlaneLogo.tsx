'use client';
import React from 'react';
import categoryLogoStyle from '@/styles/article/categoryLogoStyle.module.css';
export const PlaneLogo = () => {
  return (
    <div className={categoryLogoStyle.categoryLogoWrapperStyle}>
      <div className={categoryLogoStyle.categoryTitleWrapperStyle}>
        <div className={categoryLogoStyle.categoryTitleEnStyle}>Visit</div>
        <div className={categoryLogoStyle.categoryTitleJpStyle}>旅行</div>
      </div>
      <img
        src="./images/travel/plane.gif"
        className={categoryLogoStyle.categoryImageStyle}
      />
    </div>
  );
};
