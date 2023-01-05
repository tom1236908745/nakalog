'use client';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { checkedState } from '../atoms/CheckedAtom.js';
import side from '../styles/sideMenu.module.css';
import HumberguerMenu from './HumbergerMenu';

export default function SideMenue() {
  const checked = useRecoilValue(checkedState);
  return (
    <div>
      <HumberguerMenu />
      <nav className={`${side.menu} ${checked ? side.checkedMenu : ''}`}>
        <ul className={side.links}>
          <li
            className={`${side.link1} ${
              checked ? side.checkedList : side.link
            }`}
          >
            リンク1
          </li>
          <li
            className={`${side.link2} ${
              checked ? side.checkedList : side.link
            }`}
          >
            リンク2
          </li>
          <li
            className={`${side.link3} ${
              checked ? side.checkedList : side.link
            }`}
          >
            リンク3
          </li>
        </ul>
      </nav>
    </div>
  );
}
