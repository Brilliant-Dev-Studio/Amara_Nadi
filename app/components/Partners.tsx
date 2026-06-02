import type { ReactNode } from "react";

/* Placeholder partner logos — swap with real brand logos. */
const PARTNERS: { name: string; icon: ReactNode }[] = [
  {
    name: "Northwind",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <circle cx="8" cy="12" r="6" />
        <circle cx="16" cy="12" r="6" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Vertex",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    name: "Quanta",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="3.5" />
        <rect x="3" y="14" width="7" height="7" rx="3.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    name: "Lumen",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2 22 12 12 22 2 12z" />
      </svg>
    ),
  },
  {
    name: "Cascade",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-6 w-6">
        <path d="M5 8c4 0 4 8 8 8M11 8c4 0 4 8 8 8" />
      </svg>
    ),
  },
  {
    name: "Beacon",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2l2.4 5.6L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.4z" />
      </svg>
    ),
  },
];

function LogoItem({ name, icon }: { name: string; icon: ReactNode }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 text-foreground/45 transition-colors duration-300 hover:text-foreground/80">
      {icon}
      <span className="text-2xl font-bold tracking-tight">{name}</span>
    </span>
  );
}

export default function Partners() {
  // Duplicate the set so the -50% translate loops seamlessly.
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="pb-8 pt-8 sm:pb-10 sm:pt-10">
      <p className="text-center text-sm font-semibold text-foreground/80">
        We&rsquo;ve partnered with:
      </p>

      <div className="marquee mt-10 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
          {row.map((p, i) => (
            <LogoItem key={i} name={p.name} icon={p.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
