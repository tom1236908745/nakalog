'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { loadingState } from 'atoms/LoadingAtom';
import SideMenu from '../Elements/Utils/SideMenu';
import '../../styles/layout/header.css';

const Header = () => {
  const isLoad = useRecoilValue(loadingState);
  return (
    <header>
      {isLoad && (
        <div className="baseContent">
          <SideMenu />
          <div className="wrapper">
            <div className="topMenu">
              <div className="logo">
                <a href="/">logo</a>
              </div>
            </div>
            <div className="downMenu">
              <ul className="topLinks">
                <li className="topLink">
                  <Link href="/techs" className="linkTopMenus">
                    <span className="enStrTopMenu">TECH</span>
                    <span className="jsStrTopMenu"> テクノロジー </span>
                  </Link>
                </li>
                <li className="topLink">
                  <Link href="/eats" className="linkTopMenus">
                    <span className="enStrTopMenu">EAT</span>
                    <span className="jsStrTopMenu"> グルメ </span>
                  </Link>
                </li>
                <li className="topLink">
                  <Link href="/travels" className="linkTopMenus">
                    <span className="enStrTopMenu">Travels</span>
                    <span className="jsStrTopMenu"> トラベル </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
