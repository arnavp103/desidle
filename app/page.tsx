"use client";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Autocomplete, TextField } from "@mui/material";
import { Day } from "game";
import { useEffect, useState } from "react";

export default function Home() {
  const [songs, setSongs] = useState<string[]>([]);
  const [day, setDay] = useState<Day>();

  const [guess, setGuess] = useState("");
  // the index of clue array
  const [currHint, setcurrHint] = useState(0);

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
    <main className="flex min-h-80 flex-col items-center justify-between p-24 w-1/2 mx-auto md:mb-10 font-inter">
      <header className="flex flex-row items-end w-full justify-between border-b-2 border-slate-200 pb-2">
        <ThemeSwitch />
        <h1 className="text-4xl font-bold px-4">
          <span className="text-saffron">Desi</span>dle
        </h1>
        <p>help</p>
      </header>
      <section className="flex flex-col items-center justify-between gap-2 w-full">
        {day &&
          day.clues.map((clue, index) => {
            return (
              <p key={index} className="text-center w-5/6 bg-slate-400 px-2">
                {clue[0]}
              </p>
            );
          })}
      </section>
      <footer className="flex flex-row items-center w-full justify-between border-t-2 border-slate-200 pt-2">
        <p>back 5 secs</p>
        <p>play</p>
        <p>forward 5 secs</p>
      </footer>
      <Autocomplete
        options={songs}
        onChange={(event, newValue) => {
          setGuess(newValue!);
        }}
        className="w-3/4 mx-auto py-4"
        renderInput={(params) => (
          <TextField {...params} label="Song" variant="standard" />
        )}
      />
    </main>
  );
}
