import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parentName = typeof body?.parentName === 'string' ? body.parentName.trim() : '';
    const phone = typeof body?.phone === 'string' ? body.phone.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';

    if (!parentName || !phone || !email) {
      return NextResponse.json(
        { error: 'Please complete all required fields.' },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Invalid enquiry payload.' },
      { status: 400 },
    );
  }
}
