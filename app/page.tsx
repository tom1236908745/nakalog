'use client';
import { useState } from 'react';
import Link from 'next/link';
import homeStyle from '../styles/home.module.css';

export default function Page() {
  const [select, setSelect] = useState<string>('');

  const onChange: any = (selected: string) => {
    console.log(selected);
    setSelect(selected);
  };
  return (
    <div>
      <br />
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

      <select>
        <option value="" onChange={onChange}>
          --Veuillez en choisir un.--
        </option>
        <option value="辛い" onChange={onChange}>
          Épicé
        </option>
        <option value="甘い" onChange={onChange}>
          sucré
        </option>
        <option value="苦い" onChange={onChange}>
          amer
        </option>
      </select>
    </div>
  );
}
