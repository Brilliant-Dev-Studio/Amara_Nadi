"use client";

import { useState } from "react";
import Image from "next/image";
import contactImg from "@/public/Gemini_Generated_Image_iixvumiixvumiixv.png";
import Reveal from "./Reveal";

const fieldClass =
  "w-full rounded-xl bg-white/10 px-4 py-3.5 text-sm text-white outline-none ring-1 ring-white/15 transition placeholder:text-white/55 focus:ring-white/45 disabled:opacity-60";

// FormSubmit delivers submissions straight to this inbox — no account/key.
// The AJAX endpoint returns JSON so we can keep the inline success state.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/amaranadi.group@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: "New enquiry from amaranadi.com",
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <section
      id="contact"
      className="mt-4 overflow-hidden rounded-[30px] bg-brand-blue text-white"
    >
      <div className="grid lg:grid-cols-2">
        {/* Left — form */}
        <Reveal className="px-6 py-12 sm:px-10 sm:py-14">
          <div className="flex items-center gap-2 text-sm font-medium text-white/75">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            Contact us
          </div>
          <h2 className="mt-5 max-w-md font-serif text-[clamp(2rem,4.5vw,3rem)] font-light leading-[1.1] tracking-[-0.005em]">
            Let&rsquo;s get your next shipment moving
          </h2>

          {status === "sent" ? (
            <p className="mt-10 max-w-md text-lg leading-relaxed text-white/85">
              Thank you — your message has been received. Our team will get back
              to you within one business day. ✦
            </p>
          ) : (
            <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
              {/* Honeypot — hidden from users, catches bots */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />

              <input
                required
                disabled={sending}
                type="text"
                name="name"
                placeholder="Full Name"
                className={fieldClass}
              />
              <input
                required
                disabled={sending}
                type="email"
                name="email"
                placeholder="Email Address"
                className={fieldClass}
              />
              <textarea
                required
                disabled={sending}
                name="message"
                rows={5}
                placeholder="How Can We Help?"
                className={`${fieldClass} resize-none sm:col-span-2`}
              />

              <button
                type="submit"
                disabled={sending}
                className="group mt-2 inline-flex items-center gap-3 justify-self-start rounded-full bg-white py-2 pl-6 pr-2 text-brand-blue-dark transition-colors duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
              >
                <span className="text-sm font-semibold">
                  {sending ? "Sending…" : "Submit your Form"}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-blue text-white transition-transform duration-400 ease-out-expo group-hover:translate-x-0.5">
                  {sending ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4 animate-spin"
                      aria-hidden
                    >
                      <path d="M21 12a9 9 0 1 1-6.2-8.6" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>

              {status === "error" && (
                <p
                  role="alert"
                  className="text-sm leading-relaxed text-brand-red-light sm:col-span-2"
                >
                  Something went wrong sending your message. Please try again, or
                  email us directly at{" "}
                  <a
                    href="mailto:amaranadi.group@gmail.com"
                    className="underline underline-offset-2"
                  >
                    amaranadi.group@gmail.com
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </Reveal>

        {/* Right — image */}
        <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src={contactImg}
            alt="Our experts team at work"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
