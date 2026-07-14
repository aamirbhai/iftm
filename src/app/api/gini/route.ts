import { NextRequest, NextResponse } from "next/server";
import { giniFAQs, giniSystemPrompt } from "@/components/gini-knowledge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function findFAQMatch(query: string): string | null {
  const lowerQuery = query.toLowerCase();
  for (const faq of giniFAQs) {
    for (const keyword of faq.keywords) {
      if (lowerQuery.includes(keyword.toLowerCase())) {
        return faq.answer;
      }
    }
  }
  return null;
}

async function callMiMoAPI(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.MIMO_API_KEY;
  console.log("MiMo API Key exists:", !!apiKey);
  if (!apiKey) {
    return "I'm having trouble connecting right now. Please contact our admission office at +91-591-2486021 for assistance.";
  }
  try {
    const response = await fetch("https://api.xiaomimimo.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mimo-v2.5-pro",
        messages: [
          { role: "system", content: giniSystemPrompt },
          ...messages,
        ],
        max_completion_tokens: 300,
        temperature: 0.7,
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("MiMo API error:", response.status, errorText);
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "I couldn't process that. Please try again.";
  } catch {
    return "I'm having trouble connecting right now. Please contact our admission office at +91-591-2486021 for assistance.";
  }
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = (await request.json()) as { messages: ChatMessage[] };
    if (!messages || messages.length === 0) {
      return NextResponse.json({ reply: "Hello! I'm Gini, your IFTM assistant. How can I help you today?" });
    }
    const lastUserMessage = messages[messages.length - 1];
    if (lastUserMessage.role !== "user") {
      return NextResponse.json({ reply: "Please send a message and I'll help you!" });
    }
    const faqAnswer = findFAQMatch(lastUserMessage.content);
    if (faqAnswer) {
      return NextResponse.json({ reply: faqAnswer });
    }
    const aiReply = await callMiMoAPI(messages);
    return NextResponse.json({ reply: aiReply });
  } catch {
    return NextResponse.json(
      { reply: "Something went wrong. Please try again or contact +91-591-2486021." },
      { status: 500 }
    );
  }
}
