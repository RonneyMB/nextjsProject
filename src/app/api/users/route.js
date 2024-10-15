import { NextResponse } from "next/server";

//Params
//DataBase
//Comunicacion con servicios y backends

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  const filteredData = data.filter((data) => data.id > 5 && data.completed === true);
  return NextResponse.json(filteredData);
}

export function POST() {
  return NextResponse.json("Hola2");
}

export function PUT() {
  return NextResponse.json("Hola2");
}

export function DELETE() {
  return NextResponse.json("Hola3");
}
