'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useRecoilState } from 'recoil';
import { loadingState } from 'atoms/LoadingAtom';
import homeStyle from '../styles/home.module.css';

import Popup from '../components/Elements/Popup';
import Topic from '../components/Elements/Topic';

export default function Page() {
  // ページ外からの遷移か、内からか
  const [containPath, setContainPath] = useState<boolean>(false);
  const [isLoad, setIsLoad] = useRecoilState(loadingState);

  useLayoutEffect(() => {
    let timer: any;

    setContainPath(true);
    timer = setTimeout(() => {
      setIsLoad(true);
    }, 2300);
    console.log(document.referrer);
    console.log('true');

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      {containPath && isLoad ? (
        <div>
          <Topic />
          <Popup />
          <div className={homeStyle.maxHeight}>
            かっこいいと美を追求するプログラマーの世界観へとご案内。その世界をより深く知るための好きな音楽・映画・本も、各分野のこだわりをセレクトしました。ようこそ、個性の詰まった異世界へ。
          </div>
        </div>
      ) : (
        <>
          <video
            className={homeStyle.loadingLogo}
            src="/images/intro.mp4"
            autoPlay
            muted
          ></video>
        </>
      )}
    </div>
  );
}
