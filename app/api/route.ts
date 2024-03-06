import { NextResponse } from "next/server";

export async function GET() {
	const today = new Date();
	return NextResponse.json({ message: "Hello, World!" });
}