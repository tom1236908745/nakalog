'use client';
import { useState, useEffect, useRef } from 'react';
import topic from '../../styles/elements/topic.module.css';

export default function Topic() {
  return (
    <div className={topic.wrapper}>
      <div className={topic.leftParts}>a</div>
      <div className={topic.rightParts}>
        <div className={topic.rightWidth}>
          <h1 className={topic.largeStr}>
            Nakayama
            <br />
            Portfolio
            <br />
            だよ！
          </h1>
          <div className={topic.smallStr}>
            かっこいいと美を追求するプログラマーの世界観へとご案内。その世界をより深く知るための好きな音楽・映画・本も、各分野のこだわりをセレクトしました。
          </div>
        </div>
      </div>
    </div>
  );
}
