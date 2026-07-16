"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-green-500 text-2xl" />
          </div>
          <p className="font-bold text-iftm-navy text-lg">Message Sent!</p>
          <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1">Name *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-iftm-primary text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1">Phone *</label>
              <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-iftm-primary text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1">Email *</label>
            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-iftm-primary text-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1">Subject</label>
            <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-iftm-primary text-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold text-iftm-navy uppercase tracking-wider mb-1">Message</label>
            <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Your message..." rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-iftm-primary text-sm resize-none" />
          </div>
          <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-iftm-primary to-iftm-primary-dark text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:shadow-lg transition-all">
            Send Message <i className="fas fa-paper-plane ml-2" />
          </button>
        </form>
      )}
    </div>
  );
}
