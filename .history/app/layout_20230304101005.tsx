/* eslint-disable @next/next/no-head-element */
import '@/styles/globals.css';
import Provider from './Provider';
import Header from 'components/Layouts/Header';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html>
        <head></head>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
}
