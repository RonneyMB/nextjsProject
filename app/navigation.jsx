import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <h1>Navegacion</h1>

      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Informacion</Link>
        </li>
        <li>
          <Link href="/personajes">Personajes</Link>
        </li>
        <li>
          <Link href="/other">Otros</Link>
        </li>
      </ul>
    </nav>
  );
}
