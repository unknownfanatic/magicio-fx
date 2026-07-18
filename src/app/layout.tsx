import type { Metadata } from 'next';
// @ts-ignore: CSS module declarations are not available in this repo
import '../styles/index.css';

export const metadata: Metadata = {
  title: "Magicio.fx",  
  description: "Transforming raw footage into cinematic content that captures attention and drives results.",
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
