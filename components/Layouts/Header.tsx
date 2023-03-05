'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { loadingState } from 'atoms/LoadingAtom';
import SideMenu from '../../components/Elements/SideMenu';
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
                  <a href="" className="linkTopMenus">
                    <span className="enStrTopMenu">EAT</span>
                    <span className="jsStrTopMenu"> 食べる </span>
                  </a>
                </li>
                <li className="topLink">
                  <a href="" className="linkTopMenus">
                    <span className="enStrTopMenu">DRINK</span>
                    <span className="jsStrTopMenu"> 飲む </span>
                  </a>
                </li>
                <li className="topLink">
                  <a href="" className="linkTopMenus">
                    <span className="enStrTopMenu">WATCH</span>
                    <span className="jsStrTopMenu"> 見る </span>
                  </a>
                </li>
                <li className="topLink">
                  <a href="" className="linkTopMenus">
                    <span className="enStrTopMenu">LISTEN</span>
                    <span className="jsStrTopMenu"> 聴く </span>
                  </a>
                </li>
                <li className="topLink">
                  <Link href="/travel" className="linkTopMenus">
                    <span className="enStrTopMenu">VISIT</span>
                    <span className="jsStrTopMenu"> 訪れる </span>
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
