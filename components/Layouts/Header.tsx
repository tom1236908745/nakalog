import { useEffect } from 'react';
import Link from 'next/link';
import '../../styles/layout/header.css';

const Header = () => {
  return (
    <header>
      {/* <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <Link style={{ color: 'purple' }} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: 'purple' }} href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav> */}
      <div className="baseContent">
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
                <a href="" className="linkTopMenues">
                  <span className="enStrTopMenu">VISIT</span>
                  <span className="jsStrTopMenue"> 訪れる </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
