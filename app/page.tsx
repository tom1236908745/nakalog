'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import homeStyle from '../styles/home.module.css';
import HumberguerMenu from './HumbergerMenu';

export default function Page() {
  const [select, setSelect] = useState<string>('');

  const handleChange = (e: any) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    console.log(select);
  }, [select]);

  return (
    <div>
      <br />
      <HumberguerMenu />
      <div className={homeStyle.animation}>Cocktail4U</div>
      <br />
      <div className={homeStyle.copyBox}>
        <div className={homeStyle.inner}>
          <div className={`${homeStyle.line} ${homeStyle.right}`}>
            <div className={homeStyle.scanner}></div>
          </div>
          Lorem ipsum dolor sit amec. Lorem ipsum dolor sit amec Lorem ipsum
          dolor sit amec Lorem ipsum dolor sit amec Lorem ipsum dolor sit amec
          Lorem ipsum dolor sit amec Lorem ipsum dolor sit amec
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
  );
}
