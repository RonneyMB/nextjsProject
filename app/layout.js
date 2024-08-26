import NavBar from './navigation';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Dune - Homepage',
  description:
    'Una pagina web de estudio de Next JS con la tematica de la saga de Dune de Frank Herbert',
  keywords: 'landingPage, Dune, nextJS',
};

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
