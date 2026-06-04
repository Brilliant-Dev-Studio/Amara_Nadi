import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-1 pb-16 pt-4 sm:pb-24 sm:pt-6">
      {/* Heading */}
      <Reveal>
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70">
          <span className="h-2 w-2 rounded-full bg-brand-red" />
          About us
        </div>
        <h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-[30px] font-light leading-[1.12] tracking-[-0.005em] sm:text-[48px]">
          Harmonizing craftsmanship with a sustainable future
        </h2>
      </Reveal>

      {/* Story & Mission */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-x-12 gap-y-10 sm:mt-16 lg:grid-cols-2">
        <Reveal>
          <div className="border-l-2 border-brand-red/60 pl-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Our Story
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/60 sm:text-[15px]">
              Founded on the pillars of reliability, exceptional quality, and
              innovation, Amara Nadi Co., Ltd was established to bring
              Myanmar&rsquo;s natural resources onto the global stage &mdash;
              directly supplying dependable factory-grade semi-products to global
              wig and hair-extension manufacturers.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="border-l-2 border-brand-blue/40 pl-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
              Our Mission
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/60 sm:text-[15px]">
              We invest in a greener, more sustainable future for our nation.
              What sets us apart is stringent quality control, ethically sourced
              practices, and the unique ability to harmonize traditional
              craftsmanship with future green-energy strategies.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
