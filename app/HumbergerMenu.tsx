'use client';
// import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { centerState } from '../atoms/CenterAtom';
import humberger from '../styles/humbergerMenu.module.css';

export default function HumbergerMunu() {
  const [center, setCenter] = useRecoilState(centerState);
  const classToggle = () => {
    setCenter(!center);
  };
  return (
    <div className={humberger.menu}>
      <button
        className={`${humberger.menuTrigger} ${center ? humberger.active : ''}`}
        id={humberger.menu}
        onClick={classToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
