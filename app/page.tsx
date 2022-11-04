'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [select, setSelect] = useState<string>('');

  const onChange: any = (selected: string) => {
    console.log(selected);
    setSelect(selected);
  };
  return (
    <div className="space-y-6">
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
