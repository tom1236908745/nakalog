'use client';
// import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { checkedState } from '../../../atoms/CheckedAtom';
import hamburger from '@/styles/hamburgerMenu.module.css';
export default function HamburgerMunu() {
  const [checked, setCenter] = useRecoilState(checkedState);
  const classToggle = () => {
    setCenter(!checked);
  };
  return (
    <div className={hamburger.menu}>
      <button
        className={`${hamburger.menuTrigger} ${
          checked ? hamburger.active : ''
        }`}
        id={hamburger.menu}
        onClick={classToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
