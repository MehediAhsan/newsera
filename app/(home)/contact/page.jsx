'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Send,
} from 'lucide-react';

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '';

const inquiryTypes = [
  'Reader feedback',
  'Story tip',
  'Correction or clarification',
  'Partnership',
  'Something else',
];

export default function ContactPage() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const topic = String(formData.get('topic') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = `[NewsEra] ${topic}`;
    const body = `From: ${name}\nReply-to: ${email}\nTopic: ${topic}\n\n${message}`;
    const recipient = contactEmail ? encodeURIComponent(contactEmail) : '';

    setStatus(
      contactEmail
        ? 'Your email app should open with a draft ready. Review it and send it from there.'
        : 'Your email app should open with a draft ready. Add the newsroom recipient before sending; this site does not send or store the message.'
    );
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 px-6 py-10 text-white shadow-2xl shadow-slate-950/30 sm:px-10 sm:py-14 lg:px-14">
        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to NewsEra
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-200">
            <MessageSquareText className="h-3.5 w-3.5" />
            Contact the newsroom
          </div>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Good journalism starts with
            <span className="text-orange-300"> good questions.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Have feedback, a correction, a story tip, or an idea to work together?
            Choose a topic and send a note to the NewsEra team.
          </p>
        </div>
      </section>

      <div className="grid gap-6 py-8 sm:py-10 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="space-y-4">
          <section className="rounded-[26px] border border-white/10 bg-slate-950 p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/[0.08] text-orange-300">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-white">Email the newsroom</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {contactEmail
                ? 'Your message will be prepared in your default email app so you can review and send it.'
                : 'The contact address has not been configured on this deployment. You can still prepare a draft and choose the recipient in your email app.'}
            </p>
            {contactEmail ? (
              <a
                href={`mailto:${contactEmail}`}
                className="mt-5 inline-flex items-center gap-2 break-all text-sm font-semibold text-orange-200 transition hover:text-orange-100"
              >
                {contactEmail}
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            ) : (
              <div className="mt-5 rounded-xl border border-amber-300/15 bg-amber-300/[0.05] px-3 py-2 text-xs leading-5 text-amber-100/80">
                Site owner: set <code className="rounded bg-black/20 px-1 py-0.5">NEXT_PUBLIC_CONTACT_EMAIL</code> to publish a contact address.
              </div>
            )}
          </section>

          <section className="rounded-[26px] border border-white/10 bg-slate-950 p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300">
              <Clock3 className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-white">A note before you write</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Include a story link and the relevant details if your message is about a
              specific article. Please don&apos;t include passwords or sensitive personal information.
            </p>
            <Link href="/news" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-200">
              Browse recent coverage
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </section>
        </aside>

        <section className="rounded-[26px] border border-white/10 bg-slate-950 p-6 sm:p-8">
          <div className="mb-7">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">Write to us</div>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">What&apos;s on your mind?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Submitting opens an email draft in your device&apos;s email app. Nothing is sent or stored by this website.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-200">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={80}
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/10"
                  placeholder="How should we address you?"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-200">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/10"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-topic" className="mb-2 block text-sm font-medium text-slate-200">What is this about?</label>
              <select
                id="contact-topic"
                name="topic"
                required
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/10"
              >
                <option value="" disabled>Select a topic</option>
                {inquiryTypes.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
              </select>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-200">Your message</label>
                <span className="text-xs text-slate-500">Keep it under 4,000 characters</span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                minLength={10}
                maxLength={4000}
                required
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/10"
                placeholder="Share the details that will help us understand your message..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Prepare email draft
              <Send className="h-4 w-4" />
            </button>

            {status && (
              <p role="status" className="flex items-start gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-3 text-sm leading-6 text-emerald-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                {status}
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}
