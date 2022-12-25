'use client';
import { useState } from 'react';
import humberger from '../styles/humbergerMenu.module.css';

export default function HumbergerMunu() {
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
  };
  return (
    <div className={humberger.color}>
      <button
        className={`${humberger.menuTrigger} ${active ? humberger.active : ''}`}
        id={humberger.menu05}
        onClick={classToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
