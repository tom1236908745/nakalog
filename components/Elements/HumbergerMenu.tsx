'use client';
// import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { checkedState } from '../../atoms/CheckedAtom';
import humberger from '../../styles/humbergerMenu.module.css';

export default function HumbergerMunu() {
  const [checked, setCenter] = useRecoilState(checkedState);
  const classToggle = () => {
    setCenter(!checked);
  };
  return (
    <div className={humberger.menu}>
      <button
        className={`${humberger.menuTrigger} ${
          checked ? humberger.active : ''
        }`}
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
