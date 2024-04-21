import { createMonitor, fetchAllMonitors } from "@/app/services/datadog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const monitors = await fetchAllMonitors();
    return NextResponse.json({ data: monitors }, { status: 200 });
  } catch (e) {
    console.error(e);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log({ body });
    return createMonitor({ body });
  } catch (e) {
    console.error(e);
  }
}
