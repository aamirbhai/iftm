import { NextRequest, NextResponse } from "next/server";

interface TranscriptMessage {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

function formatTranscript(messages: TranscriptMessage[], userName: string, language: string): string {
  const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  let text = `=== GINI CHATBOT TRANSCRIPT ===\n`;
  text += `Date: ${now}\n`;
  text += `User Name: ${userName || "Not provided"}\n`;
  text += `Language: ${language === "hi" ? "Hindi" : "English"}\n`;
  text += `Total Messages: ${messages.length}\n`;
  text += `================================\n\n`;

  for (const msg of messages) {
    const sender = msg.role === "user" ? "USER" : "GINI";
    const time = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }) : "";
    text += `[${sender}]${time ? ` (${time})` : ""}: ${msg.content}\n\n`;
  }

  text += `================================\n`;
  text += `Source: IFTM Website - Gini Chatbot\n`;
  return text;
}

export async function POST(request: NextRequest) {
  try {
    const { messages, userName, language } = (await request.json()) as {
      messages: TranscriptMessage[];
      userName?: string;
      language?: string;
    };

    if (!messages || messages.length === 0) {
      return NextResponse.json({ ok: true, message: "No messages to save" });
    }

    const transcript = formatTranscript(messages, userName || "", language || "en");
    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.GINI_ADMIN_EMAIL || "caneup2024@gmail.com";

    // Log to server console (always works)
    console.log("[GINI TRANSCRIPT]", transcript);

    // Send via Resend if API key is configured
    if (resendApiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Gini Chatbot <onboarding@resend.dev>",
            to: [adminEmail],
            subject: `[IFTM Gini] Chat Transcript - ${userName || "Anonymous User"}`,
            text: transcript,
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error("[GINI TRANSCRIPT] Resend error:", res.status, errText);
        } else {
          console.log("[GINI TRANSCRIPT] Email sent to", adminEmail);
        }
      } catch (emailErr) {
        console.error("[GINI TRANSCRIPT] Email send failed:", emailErr);
      }
    } else {
      console.log("[GINI TRANSCRIPT] RESEND_API_KEY not set. Transcript logged to console only.");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[GINI TRANSCRIPT] Error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
