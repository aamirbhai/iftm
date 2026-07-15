"use client";

import dynamic from "next/dynamic";

const GiniChatbot = dynamic(() => import("./GiniChatbot"), { ssr: false });

export default function GiniChatbotWrapper() {
  return <GiniChatbot />;
}
