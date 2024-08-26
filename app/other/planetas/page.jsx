import Link from 'next/link';
import { Comic_Neue } from 'next/font/google';

export const metadata = {
  title: 'Dune - Lista de planetas',
  description:
    'Una pagina web de estudio de Next JS con la tematica de la saga de Dune de Frank Herbert',
  keywords: 'landingPage, Dune, nextJS',
};

const roboto = Comic_Neue({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Planetlist() {
  return (
    <div>
      <Link href="/other" className={roboto.className}>
        Volver
      </Link>
      <h4>Planetas existentes</h4>
      <ul>
        <li>Arrakis</li>
        <li>Caladan</li>
        <li>Casa Capitular</li>
        <li>Gierri Prime</li>
        <li>Corrin</li>
      </ul>
    </div>
  );
}
