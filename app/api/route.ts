import { NextResponse } from "next/server";
import { readFileSync } from "fs";


export async function GET() {
	const today = new Date();
	const data = JSON.parse(readFileSync("app/api/data.json", "utf-8"));
	console.log(data);
	return NextResponse.json(data);
}