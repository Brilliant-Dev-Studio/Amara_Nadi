/* What we have — editorial marquee of Amara Nadi's real offerings. */
const OFFERINGS = [
  "Raw Human Hair",
  "Remy Quality",
  "Single & Double Drawn",
  "Natural Textures",
  "Precision Grading",
  "Bulk Capacity",
  "Ethically Sourced",
  "Global Export",
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 text-brand-red" aria-hidden>
      <path d="m12 2 2.4 6.9L21 11l-6.6 2.1L12 20l-2.4-6.9L3 11l6.6-2.1z" />
    </svg>
  );
}

export default function Partners() {
  // Duplicate the set so the -50% translate loops seamlessly.
  const row = [...OFFERINGS, ...OFFERINGS];
  return (
    <section className="pb-8 pt-8 sm:pb-10 sm:pt-10">
      <p className="text-center text-sm font-semibold text-foreground/80">
        What we bring to the table:
      </p>

      <div className="marquee mt-10 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
          {row.map((item, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 sm:gap-12">
              <span className="text-2xl font-bold tracking-tight text-foreground/55 transition-colors duration-300 hover:text-foreground/90 sm:text-3xl">
                {item}
              </span>
              <Star />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
