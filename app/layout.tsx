/* eslint-disable @next/next/no-head-element */
import HumberguerMenu from './HumbergerMenu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body>
        <HumberguerMenu />
        {children}
      </body>
    </html>
  );
}
