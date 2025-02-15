import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  console.log(`request: ${JSON.stringify(request)}`)
  return NextResponse.json({ status: 'OK' })
}
