/* eslint-disable @next/next/no-head-element */
import '@/styles/globals.css';
import { Provider } from 'jotai';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
