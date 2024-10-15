import Link from "next/link";
import React from "react";
import "./styles/navBar.css";

export default function NavBar() {
  return (
    <nav className="navBar py-5 fixed">
      <Link href="/">
        <h1 className="text-4xl font-black">NEXT</h1>
      </Link>

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
          <Link href="/posts">Otros</Link>
        </li>
      </ul>
    </nav>
  );
}
