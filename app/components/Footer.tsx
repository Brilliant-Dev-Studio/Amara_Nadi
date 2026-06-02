import Image from "next/image";
import logo from "@/public/logo.png";
import Reveal from "./Reveal";

const MENU = [
  { label: "Services", href: "#services" },
  { label: "Why choose us", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it work", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const CONTACT = [
  { label: "hello@amaranadi.com", href: "mailto:hello@amaranadi.com" },
  { label: "+95 9 123 456 789", href: "tel:+959123456789" },
  { label: "Yangon, Myanmar", href: null },
];

const linkClass =
  "text-sm text-foreground/55 transition-colors duration-200 hover:text-brand-blue";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-foreground/10 bg-foreground/[0.02]">
      <div className="mx-auto w-full max-w-[1230px] px-5 pb-10 pt-14 sm:px-6 sm:pt-16">
        <Reveal className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div className="max-w-xs">
          <Image
            src={logo}
            alt="Amara Nadi"
            className="h-20 w-auto sm:h-24"
          />
          <p className="mt-6 text-sm leading-relaxed text-foreground/55">
            Connecting Myanmar&rsquo;s finest raw and processed human hair with
            global manufacturers.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">Menu</h3>
          <ul className="mt-5 space-y-3">
            {MENU.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">Follow us:</h3>
          <ul className="mt-5 space-y-3">
            {SOCIAL.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-5 space-y-3">
            {CONTACT.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} className={linkClass}>
                    {c.label}
                  </a>
                ) : (
                  <span className="text-sm text-foreground/55">{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Bottom bar */}
      <Reveal
        delay={120}
        className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-foreground/10 pt-8 text-sm text-foreground/55"
      >
        <span>© 2026 Amara Nadi Co., Ltd.</span>
        <span className="h-1 w-1 rounded-full bg-brand-red" />
        <span>All rights reserved.</span>
      </Reveal>
      </div>
    </footer>
  );
}
