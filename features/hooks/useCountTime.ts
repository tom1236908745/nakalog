'use client';
import { useState, useEffect } from 'react';

export const useCountTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // コンポーネントがアンマウントされる時にタイマー停止(クリーンアップ処理)
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return count;
};
