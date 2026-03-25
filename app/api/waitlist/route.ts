import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, website } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER;

  const body: Record<string, unknown> = {
    email_address: email,
    status: "subscribed",
  };

  if (website) {
    body.merge_fields = { WEBSITE: website };
  }

  const res = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    if (data.title === "Member Exists") {
      return NextResponse.json({ error: "already_subscribed" }, { status: 400 });
    }
    console.error("Mailchimp error:", data);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
