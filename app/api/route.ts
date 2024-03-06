import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { Day } from "game";

export async function GET() {
  const today = new Date();
  const data = JSON.parse(readFileSync("app/api/data.json", "utf-8"));
  const songs: string[] = data.songs;
  const day: Day = data.days.find((d: Day) => {
	return d.date == today.toISOString().split('T')[0]
  });
  
  console.log(day);
  return NextResponse.json({
	songs,
	day
  });
}
