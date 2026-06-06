import Reveal from "./Reveal";

const HIGHLIGHTS = [
  { stat: "Since 1997", label: "Nearly thirty years in gold" },
  { stat: "City-wide", label: "Branches across the city" },
  { stat: "Our workshop", label: "Goldsmiths on our own team" },
];

function Gem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6 3h12l3 5-9 13L3 8z" />
      <path d="M3 8h18M9 3 6 8l6 13 6-13-3-5M9 8l3 13 3-13" />
    </svg>
  );
}

export default function PoePoeGold() {
  return (
    <section id="poe-poe-gold" className="px-1 pb-16 pt-4 sm:pb-24 sm:pt-6">
      {/* Heading */}
      <Reveal>
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Our Group &middot; Poe Poe Gold
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light leading-[1.12] tracking-[-0.005em] sm:text-[48px]">
          Gold, jewelry, and a workshop of our own
        </h2>
      </Reveal>

      {/* Intro */}
      <Reveal delay={120} className="mx-auto mt-10 max-w-2xl sm:mt-12">
        <p className="text-center text-[15px] leading-relaxed text-foreground/65 sm:text-base">
          Poe Poe Gold Jewelry &amp; Pawn has been part of Myanmar&rsquo;s gold
          trade since 1997 &mdash; close to thirty years now. We&rsquo;ve grown
          one branch at a time across the city, and the reason is simple: people
          trust us with their gold. Whether they&rsquo;re buying a piece, selling
          one, or borrowing against it, we make sure that trust holds up.
        </p>
      </Reveal>

      {/* In-house workshop — the standout */}
      <Reveal delay={200} className="mx-auto mt-12 max-w-3xl sm:mt-14">
        <div className="relative overflow-hidden rounded-[28px] border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.07] via-amber-400/[0.04] to-transparent px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg shadow-amber-500/30 ring-1 ring-inset ring-white/25">
              <Gem className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                We make our jewelry ourselves
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/65">
                Here&rsquo;s what really sets us apart: we have our own goldsmith
                workshop. The pieces we sell are made by master craftsmen on our
                own team &mdash; not bought in from somewhere else. So we can
                stand behind the work, keep a close watch on quality, and make
                something custom when you want it, start to finish.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Highlights */}
      <div className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-[24px] border border-foreground/10 bg-foreground/10 sm:mt-14 sm:grid-cols-3">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal
            key={h.stat}
            delay={120 + i * 90}
            className="bg-background px-6 py-7 text-center"
          >
            <p className="font-serif text-2xl font-light text-foreground sm:text-3xl">
              {h.stat}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/55">
              {h.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
