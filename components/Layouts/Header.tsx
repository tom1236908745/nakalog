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
            <div className="topMenue">
              <div className="logo">
                <a href="/">logo</a>
              </div>
            </div>
            <div className="downMenue">
              <ul className="topLinks">
                <li className="topLink">
                  <a href="" className="linkTopMenues">
                    <span className="enStrTopMenu">EAT</span>
                    <span className="jsStrTopMenue"> 食べる </span>
                  </a>
                </li>
                <li className="topLink">
                  <a href="" className="linkTopMenues">
                    <span className="enStrTopMenu">DRINK</span>
                    <span className="jsStrTopMenue"> 飲む </span>
                  </a>
                </li>
                <li className="topLink">
                  <a href="" className="linkTopMenues">
                    <span className="enStrTopMenu">WATCH</span>
                    <span className="jsStrTopMenue"> 見る </span>
                  </a>
                </li>
                <li className="topLink">
                  <a href="" className="linkTopMenues">
                    <span className="enStrTopMenu">LISTEN</span>
                    <span className="jsStrTopMenue"> 聴く </span>
                  </a>
                </li>
                <li className="topLink">
                  <Link href="/travel" className="linkTopMenues">
                    <span className="enStrTopMenu">VISIT</span>
                    <span className="jsStrTopMenue"> 訪れる </span>
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
