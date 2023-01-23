'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { RecoilRoot } from 'recoil';
import homeStyle from '../styles/home.module.css';
import SideMenu from '../components/Elements/SideMenu';
import Popup from '../components/Elements/Popup';

export default function Page() {
  const [select, setSelect] = useState<string>('');

  const handleChange = (e: any) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    console.log(select);
  }, [select]);

  return (
    <RecoilRoot>
      <div>
        <div>
          <br />
          {/* <div className={homeStyle.animation}>Cocktail4U</div> */}
          <br />
          <div className={homeStyle.copyBox}>
            <div className={homeStyle.inner}>
              <div className={`${homeStyle.line} ${homeStyle.right}`}>
                <div className={homeStyle.scanner}></div>
              </div>
              Lorem ipsum dolor sit amec. Lorem ipsum dolor sit amec Lorem ipsum
              dolor sit amec Lorem ipsum dolor sit amec Lorem ipsum dolor sit
              amec Lorem ipsum dolor sit amec Lorem ipsum dolor sit amec
            </div>
          </div>

          <select onChange={handleChange}>
            <option value="">--Veuillez en choisir un.--</option>
            <option value="辛い">Épicé</option>
            <option value="甘い">sucré</option>
            <option value="苦い">amer</option>
          </select>

          <div style={{ color: 'red' }}>{select}</div>
        </div>
        <div>
          <SideMenu />
        </div>
        <div className={homeStyle.minHeight}>
          かっこいいと美を追求するプログラマーの世界観へとご案内。その世界をより深く知るための好きな音楽・映画・本も、各分野のこだわりをセレクトしました。ようこそ、個性の詰まった異世界へ。
        </div>
        <Popup />
        <div className={homeStyle.maxHeight}>
          かっこいいと美を追求するプログラマーの世界観へとご案内。その世界をより深く知るための好きな音楽・映画・本も、各分野のこだわりをセレクトしました。ようこそ、個性の詰まった異世界へ。
        </div>
      </div>
    </RecoilRoot>
  );
}
