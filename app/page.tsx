'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { RecoilRoot } from 'recoil';
import homeStyle from '../styles/home.module.css';

import Popup from '../components/Elements/Popup';
import Topic from '../components/Elements/Topic';
import Header from '../components/Layouts/Header';
export default function Page() {
  return (
    <RecoilRoot>
      <div>
        <Header />
        <Topic />

        <Popup />
        <div className={homeStyle.maxHeight}>
          かっこいいと美を追求するプログラマーの世界観へとご案内。その世界をより深く知るための好きな音楽・映画・本も、各分野のこだわりをセレクトしました。ようこそ、個性の詰まった異世界へ。
        </div>
      </div>
    </RecoilRoot>
  );
}
