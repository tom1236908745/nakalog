'use client';
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { checkedState } from '../../atoms/CheckedAtom';
import side from '../../styles/sideMenu.module.css';
import HumberguerMenu from './HumbergerMenu';

export default function SideMenue() {
  const [checked, setChecked] = useRecoilState(checkedState);
  const menuRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //対象の要素を取得
    const menuEl = menuRef.current;
    const sideEl = sideRef.current;

    //対象の要素がなければ何もしない
    if (!menuEl && !sideEl) return;

    //クリックした時に実行する関数
    const hundleClickOutside = (e: MouseEvent) => {
      // サイドメニューをクリックした時
      if (menuEl?.contains(e.target as Node) && checked) {
        return;
      }
      setChecked(false);
    };

    document.addEventListener('click', hundleClickOutside);

    return () => {
      document.removeEventListener('click', hundleClickOutside);
    };
  }, [checked]);
  return (
    <div ref={sideRef}>
      <HumberguerMenu />
      <nav
        className={`${side.menu} ${checked ? side.checkedMenu : ''}`}
        ref={menuRef}
      >
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
