'use client';
// import { useState } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import popup from '@/styles/popup.module.css';
import Image from 'next/image';
export default function Popup() {
  const [num, setNum] = useState<number | undefined>(0);

  const toggleVisibility = () => {
    const test = document.getElementById('test');
    const triggerMargin = 400;
    console.log(test?.getBoundingClientRect().top);
    setNum(test?.getBoundingClientRect().top);
    if (test && test.getBoundingClientRect().top < triggerMargin)
      test.classList.add(popup.showUp);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <div>
      <img
        id="test"
        className={popup.init}
        src="/images/cocktail.JPG"
        width="500"
        alt="cocktail"
      />
    </div>
  );
}
