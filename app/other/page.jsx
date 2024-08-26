import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dune - Información adicional',
  description:
    'Una pagina web de estudio de Next JS con la tematica de la saga de Dune de Frank Herbert',
  keywords: 'landingPage, Dune, nextJS',
};

export default function OtherInfo() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/other/planetas">Planetas</Link>
        </li>
        <li>Transporte</li>
        <li>Casas gobernantes</li>
      </ul>
    </div>
  );
}
