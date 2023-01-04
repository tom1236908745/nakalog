'use client';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { centerState } from '../atoms/CenterAtom';
import side from '../styles/sideMenu.module.css';
import HumberguerMenu from './HumbergerMenu';

export default function SideMenue() {
  const center = useRecoilValue(centerState);
  return (
    <div>
      <HumberguerMenu />
      <div className={`${side.menu} ${center ? side.checkedMenu : side.color}`}>
        {center ? (
          <ul className={side.links}>
            <li className={side.link1}>リンク1</li>
            <li className={side.link2}>リンク2</li>
            <li className={side.link3}>リンク3</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
