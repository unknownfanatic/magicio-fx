import type { Metadata } from 'next';
// @ts-ignore: CSS module declarations are not available in this repo
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Start app development (Copy)',
  description:
    'Enables users to execute Go code snippets instantly in a browser, facilitating learning and quick testing without setup or installation.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
