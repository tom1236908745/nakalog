'use client';

import { RecoilRoot } from 'recoil';
export default function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
