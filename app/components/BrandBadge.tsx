"use client";

import CircularText from "./CircularText";

// "AMARA" (indices 0-4) = red, the rest = blue.
const letterColor = (i: number) => (i <= 4 ? "#d11a1a" : "#0c55bd");

export default function BrandBadge() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden md:block">
      <CircularText
        text="AMARA NADI CO. LTD. • "
        spinDuration={18}
        onHover="speedUp"
        getLetterColor={letterColor}
        className="h-[96px] w-[96px] text-[10px] uppercase tracking-[0.08em]"
      />
    </div>
  );
}
