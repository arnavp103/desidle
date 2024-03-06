import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { Day } from "game";

export async function GET() {
  const today = new Date();
  const data = JSON.parse(readFileSync("app/api/data.json", "utf-8"));
  const songs: string[] = data.songs;
  const days: Day[] = data.days;
  console.log(days);
  return NextResponse.json(data);
}
