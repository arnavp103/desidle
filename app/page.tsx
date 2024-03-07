"use client";
import { Day } from "game";
import { useEffect, useState } from "react";

export default function Home() {
  const [songs, setSongs] = useState<string[]>([]);
  const [day, setDay] = useState<Day>();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log("data from backend", data);
        setSongs(data.songs);
        setDay(data.day);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex flex-row items-end w-full justify-between border-b-2 border-slate-200 pb-2">
        <p>light mode</p>
        <h1 className="text-4xl font-bold">
          <span className="text-saffron">Desi</span>dle
        </h1>
        <p>help</p>
      </header>
      <section className="flex flex-col items-center justify-between gap-2"></section>
      <footer className="flex flex-row items-center w-full justify-between border-t-2 border-slate-200 pt-2">
        <p>home</p>
        <p>settings</p>
        <p>about</p>
      </footer>
    </main>
  );
}
