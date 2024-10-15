"use client";
//Para ejecutar codigo Javascript, se debe introducir la propiedad useClient, puesto que Next trabaja desde el servidor.
//Los componentes hijos tambien heredan la propiedad 'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PageLobby() {
  const router = useRouter();
  useEffect(() => {
    console.log("Me estoy Ejecutando en segundo plano");
  }, []);

  return (
    <div>
      <h1 className="font-bold text-4xl my-5 uppercase">Dune</h1>
      <hr className="my-5" />
      <p className="text-justify mt-10">
        Dune es una novela épica de ciencia ficción escrita por Frank Herbert en 1965. Su éxito fue rotundo; en el año de su salida, logró el Premio Nébula a la mejor novela en su primera edición y al año siguiente el Premio Hugo a la mejor novela. Publicada en español por la editorial Acervo en
        1975, abrió una de las sagas más importantes de la literatura fantástica y de ciencia ficción. En 2007 registró ventas de más 12 millones de ejemplares, convirtiéndola en la novela de ciencia ficción más vendida a la fecha.
      </p>
      <button
        className="font-bold p-3 px-6 rounded-full my-10"
        style={{ backgroundColor: "#FF6500", color: "#000000" }}
        onClick={() => {
          alert("Hola!");
          router.push("/about");
        }}
      >
        Ver mas...
      </button>
    </div>
  );
}
