"use client";

import { useState, useRef, useEffect } from "react";
import { giniFAQs } from "@/components/gini-knowledge";

interface Message {
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
  showLanguageOptions?: boolean;
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

/* ─── Female Assistant Avatar ─── */
function GiniAvatar({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="24" cy="24" r="24" fill="url(#giniGrad)" />
      {/* Hair */}
      <ellipse cx="24" cy="18" rx="13" ry="12" fill="#2D1B4E" />
      <path d="M11 18c0-7 5.8-12 13-12s13 5 13 12c0 2-1 3-2 3H13c-1 0-2-1-2-3z" fill="#2D1B4E" />
      {/* Face */}
      <ellipse cx="24" cy="22" rx="9" ry="10" fill="#FDDCB5" />
      {/* Eyes */}
      <ellipse cx="20.5" cy="21" rx="1.5" ry="1.8" fill="#1a1a2e" />
      <ellipse cx="27.5" cy="21" rx="1.5" ry="1.8" fill="#1a1a2e" />
      <circle cx="21" cy="20.3" r="0.5" fill="white" />
      <circle cx="28" cy="20.3" r="0.5" fill="white" />
      {/* Eyebrows */}
      <path d="M18.5 18.5c0.5-1 1.5-1.5 2.5-1" stroke="#2D1B4E" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M29.5 18.5c-0.5-1-1.5-1.5-2.5-1" stroke="#2D1B4E" strokeWidth="0.8" strokeLinecap="round" />
      {/* Nose */}
      <path d="M24 23c-0.5 0.5-0.3 1.2 0 1.5" stroke="#E8C9A0" strokeWidth="0.6" strokeLinecap="round" />
      {/* Smile */}
      <path d="M21 26c1.5 1.5 4.5 1.5 6 0" stroke="#C4756E" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Blush */}
      <ellipse cx="18" cy="24.5" rx="1.5" ry="0.8" fill="#F5B0A5" opacity="0.4" />
      <ellipse cx="30" cy="24.5" rx="1.5" ry="0.8" fill="#F5B0A5" opacity="0.4" />
      {/* Hair strands */}
      <path d="M12 14c2-4 6-6 12-6s10 2 12 6" stroke="#3D2B5E" strokeWidth="1.5" fill="none" />
      {/* Headset */}
      <path d="M10 20c0-8 6-14 14-14s14 6 14 14" stroke="#C8A96E" strokeWidth="2" fill="none" />
      <rect x="8" y="18" width="4" height="7" rx="2" fill="#C8A96E" />
      <rect x="36" y="18" width="4" height="7" rx="2" fill="#C8A96E" />
      {/* Microphone */}
      <path d="M36 25c0 0 1 3 1 4s-0.5 2-1 2" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Shirt collar */}
      <path d="M16 34c2-3 5-4 8-4s6 1 8 4" fill="#C8A96E" />
      <path d="M18 34l6-3 6 3" fill="#E8D5A8" />
      {/* Body hint */}
      <path d="M10 48c2-6 8-10 14-10s12 4 14 10" fill="#C8A96E" />
      <defs>
        <linearGradient id="giniGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a1040" />
          <stop offset="1" stopColor="#0a0e2a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function GiniChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"greet" | "name" | "language" | "chat">("greet");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState<"en" | "hi" | "">("");
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Voice assistant state
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) recognitionRef.current.abort();
      if (synthRef.current) synthRef.current.cancel();
    };
  }, []);

  function speak(text: string) {
    if (!synthRef.current || !voiceEnabled) return;
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    // Try to pick an Indian English / Hindi voice
    const voices = synthRef.current.getVoices();
    const preferred = voices.find(
      (v) => (language === "hi" && v.lang.startsWith("hi")) || (language === "hi" && v.lang === "hi-IN")
    ) || voices.find((v) => v.lang === "en-IN") || voices.find((v) => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    synthRef.current.speak(utterance);
  }

  function startListening() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser. Please use Chrome.");
      return;
    }
    if (recognitionRef.current) recognitionRef.current.abort();
    synthRef.current?.cancel();

    const recognition = new SpeechRecognition();
    recognition.lang = language === "hi" ? "hi-IN" : "en-IN";
    recognition.interimResults = true;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      if (event.results[0].isFinal) {
        setIsListening(false);
        // Auto-send after final result
        setTimeout(() => {
          setInput(transcript);
          handleSendWithText(transcript);
        }, 300);
      }
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true);
  }

  function stopListening() {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }

  function toggleVoice() {
    setVoiceEnabled((prev) => {
      if (prev) synthRef.current?.cancel();
      return !prev;
    });
  }

  // Auto-show teaser pop-up after 3 seconds
  useEffect(() => {
    if (teaserDismissed || isOpen) return;
    const timer = setTimeout(() => setShowTeaser(true), 3000);
    return () => clearTimeout(timer);
  }, [teaserDismissed, isOpen]);

  // Auto-dismiss teaser after 8 seconds
  useEffect(() => {
    if (!showTeaser) return;
    const timer = setTimeout(() => setShowTeaser(false), 8000);
    return () => clearTimeout(timer);
  }, [showTeaser]);

  useEffect(() => {
    if (isOpen && step === "greet") {
      setStep("name");
      simulateTyping("Hey! Welcome to IFTM University. I'm Gini, your admission guide. What's your name?");
    }
  }, [isOpen, step]);

  function simulateTyping(text: string) {
    const typingMsg: Message = { role: "assistant", content: "", isTyping: true };
    setMessages((prev) => [...prev, typingMsg]);
    const delay = Math.min(800 + text.length * 15, 2500);
    setTimeout(() => {
      setMessages((prev) => {
        const updated = [...prev];
        const lastIdx = updated.length - 1;
        updated[lastIdx] = { role: "assistant", content: text, isTyping: false };
        return updated;
      });
      // Speak the response if voice is enabled
      if (voiceEnabled) speak(text);
    }, delay);
  }

  function showLanguageSelection() {
    const langMsg: Message = {
      role: "assistant",
      content: language === "hi"
        ? `${userName}, aap kis language mein baat karna chahenge?`
        : `${userName}, which language would you prefer to chat in?`,
      showLanguageOptions: true,
    };
    setMessages((prev) => [...prev, langMsg]);
  }

  function handleLanguageSelect(lang: "en" | "hi") {
    setLanguage(lang);
    setStep("chat");
    const userMsg: Message = { role: "user", content: lang === "hi" ? "Hindi" : "English" };
    setMessages((prev) => [...prev, userMsg]);
    if (lang === "hi") {
      simulateTyping(`Bahut accha ${userName}! Ab aap Hindi mein pooch sakte ho. Main aapki kya madad kar sakta hoon?`);
    } else {
      simulateTyping(`Great ${userName}! You can now ask me anything in English. How can I help you?`);
    }
  }

  async function handleSendWithText(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev.filter((m) => !m.isTyping && !m.showLanguageOptions), userMessage]);
    setInput("");

    if (step === "name") {
      setUserName(trimmed);
      setStep("language");
      setTimeout(() => showLanguageSelection(), 500);
      return;
    }

    const faqAnswer = findFAQMatch(trimmed);
    if (faqAnswer) {
      simulateTyping(faqAnswer);
      return;
    }

    setIsLoading(true);
    try {
      const chatMessages = [
        ...messages.filter((m) => !m.isTyping && !m.showLanguageOptions).map((m) => ({ role: m.role, content: m.content })),
        { role: "user", content: trimmed },
      ];

      const response = await fetch("/api/gini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMessages, userName, language }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        simulateTyping(data.reply);
      } else {
        throw new Error("API failed");
      }
    } catch {
      setIsLoading(false);
      simulateTyping(language === "hi" ? "Mujhe abhi connect hone mein problem ho rahi hai. Call karo +91-591-2486021." : "I'm having trouble connecting. Please call +91-591-2486021.");
    }
  }

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev.filter((m) => !m.isTyping && !m.showLanguageOptions), userMessage]);
    setInput("");

    if (step === "name") {
      setUserName(trimmed);
      setStep("language");
      setTimeout(() => showLanguageSelection(), 500);
      return;
    }

    const faqAnswer = findFAQMatch(trimmed);
    if (faqAnswer) {
      simulateTyping(faqAnswer);
      return;
    }

    setIsLoading(true);
    try {
      const chatMessages = [
        ...messages.filter((m) => !m.isTyping && !m.showLanguageOptions).map((m) => ({ role: m.role, content: m.content })),
        { role: "user", content: trimmed },
      ];

      const response = await fetch("/api/gini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMessages, userName, language }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        simulateTyping(data.reply);
      } else {
        throw new Error("API failed");
      }
    } catch {
      setIsLoading(false);
      const lowerInput = trimmed.toLowerCase();
      let fallback = "";

      if (language === "hi") {
        if (lowerInput.includes("fee") || lowerInput.includes("cost")) {
          fallback = "Fee details ke liye admission office call karo +91-591-2486021. Scholarship bhi milti hai merit basis pe.";
        } else if (lowerInput.includes("admission") || lowerInput.includes("apply")) {
          fallback = "Online apply karo hamari website se. Help chahiye toh call karo +91-591-2486021.";
        } else if (lowerInput.includes("placement") || lowerInput.includes("job")) {
          fallback = "IFTM ka placement record accha hai. 500+ companies aati hain - TCS, Infosys, Amazon, Google.";
        } else if (lowerInput.includes("course") || lowerInput.includes("programme")) {
          fallback = "50+ programmes hain - Engineering, Pharmacy, MBA, Law, sab hai. Kaunsa field interest karta hai?";
        } else {
          fallback = "Mujhe abhi connect hone mein problem ho rahi hai. Call karo +91-591-2486021.";
        }
      } else {
        if (lowerInput.includes("fee") || lowerInput.includes("cost")) {
          fallback = "For fee details, please contact our admission office at +91-591-2486021. Scholarships are available for meritorious students.";
        } else if (lowerInput.includes("admission") || lowerInput.includes("apply")) {
          fallback = "You can apply online at our admissions portal. For help, call +91-591-2486021.";
        } else if (lowerInput.includes("placement") || lowerInput.includes("job")) {
          fallback = "IFTM has 90%+ placement rate with 500+ recruiters including TCS, Infosys, Amazon, Google.";
        } else if (lowerInput.includes("course") || lowerInput.includes("programme")) {
          fallback = "We offer 50+ programmes across 12 schools. Which field interests you?";
        } else {
          fallback = "I'm having trouble connecting right now. Please call +91-591-2486021 for assistance.";
        }
      }

      simulateTyping(fallback);
    }
  }

  function handleOpen() {
    setIsOpen(true);
    setShowTeaser(false);
    setTeaserDismissed(true);
  }

  return (
    <>
      {/* ─── Teaser Pop-up (shows after 3s) ─── */}
      {showTeaser && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-bounce-slow">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-[260px] cursor-pointer" onClick={handleOpen}>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45" />
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <GiniAvatar size={40} />
              </div>
              <div>
                <p className="text-sm font-bold text-iftm-navy mb-0.5">Need Help?</p>
                <p className="text-xs text-gray-500 leading-relaxed">Hi! I&apos;m Gini, your admission assistant. Ask me anything about IFTM!</p>
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setShowTeaser(false); setTeaserDismissed(true); }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* ─── Chat Button ─── */}
      <button
        onClick={() => isOpen ? setIsOpen(false) : handleOpen()}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center overflow-hidden"
        aria-label="Chat with Gini"
        style={{ background: "linear-gradient(135deg, #1a1040, #0a0e2a)" }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <GiniAvatar size={56} />
        )}
      </button>

      {/* ─── Chat Window ─── */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" style={{ height: "480px" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-iftm-navy to-[#1a1040] text-white px-4 py-3 flex items-center gap-3">
            <GiniAvatar size={36} />
            <div className="flex-1">
              <h3 className="font-bold text-sm">Gini</h3>
              <p className="text-[11px] text-white/60 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online • IFTM Admission Guide
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={"flex " + (msg.role === "user" ? "justify-end" : "justify-start")}>
                {msg.role === "assistant" && (
                  <div className="flex-shrink-0 mr-2 mt-1">
                    <GiniAvatar size={24} />
                  </div>
                )}
                <div
                  className={"max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed " +
                    (msg.role === "user"
                      ? "bg-iftm-primary text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none")}
                >
                  {msg.isTyping ? (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  ) : msg.showLanguageOptions ? (
                    <div>
                      <p className="mb-3">{msg.content}</p>
                      <div className="flex gap-2">
                        <button onClick={() => handleLanguageSelect("en")} className="px-4 py-2 bg-iftm-navy text-white rounded-lg text-sm font-medium hover:bg-iftm-navy-light transition-colors">English</button>
                        <button onClick={() => handleLanguageSelect("hi")} className="px-4 py-2 bg-iftm-primary text-white rounded-lg text-sm font-medium hover:bg-red-800 transition-colors">Hindi</button>
                      </div>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {isLoading && !messages.some((m) => m.isTyping) && (
              <div className="flex justify-start">
                <div className="flex-shrink-0 mr-2 mt-1"><GiniAvatar size={24} /></div>
                <div className="bg-gray-100 px-3 py-2 rounded-xl rounded-bl-none text-sm">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2 items-center">
              {/* Voice toggle */}
              <button
                type="button"
                onClick={toggleVoice}
                className={`p-2 rounded-lg transition-colors ${voiceEnabled ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                title={voiceEnabled ? "Voice ON" : "Voice OFF"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {voiceEnabled ? (
                    <>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </>
                  ) : (
                    <>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </>
                  )}
                </svg>
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  isListening
                    ? (language === "hi" ? "Sun raha hoon..." : "Listening...")
                    : step === "name" ? "Enter your name..."
                    : language === "hi" ? "Apna sawaal likhein..."
                    : "Type your message..."
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-iftm-navy"
                disabled={isLoading || step === "language"}
              />

              {/* Mic button */}
              <button
                type="button"
                onClick={isListening ? stopListening : startListening}
                disabled={isLoading || step === "language"}
                className={`p-2 rounded-lg transition-all ${isListening ? "bg-red-500 text-white animate-pulse" : "bg-iftm-navy text-white hover:bg-iftm-navy-light"} disabled:opacity-50 disabled:cursor-not-allowed`}
                title={isListening ? "Stop listening" : "Speak"}
              >
                {isListening ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                )}
              </button>

              <button
                type="submit"
                disabled={isLoading || !input.trim() || step === "language"}
                className="px-4 py-2 bg-iftm-navy text-white rounded-lg text-sm font-medium hover:bg-iftm-navy-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </form>

            {/* Voice status */}
            {(isListening || isSpeaking) && (
              <div className="mt-2 flex items-center gap-2 text-xs">
                {isListening && (
                  <span className="flex items-center gap-1 text-red-500">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    {language === "hi" ? "Sun raha hoon..." : "Listening..."}
                  </span>
                )}
                {isSpeaking && (
                  <span className="flex items-center gap-1 text-green-600">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {language === "hi" ? "Bol raha hoon..." : "Speaking..."}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </>
  );
}
