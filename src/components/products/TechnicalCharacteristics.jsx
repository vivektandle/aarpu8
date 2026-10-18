import React from 'react';

export default function TechnicalCharacteristics({ characteristics }) {
  if (!characteristics) return null;

  const entries = Object.entries(characteristics);

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-[#FF393B]" />
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
          TECHNICAL CHARACTERISTICS
        </h2>
      </div>

      <div className="bg-white border border-[#E2E2E2] rounded-xl overflow-hidden shadow-2xs">
        <div className="divide-y divide-[#E2E2E2]">
          {entries.map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between px-4 py-2.5 text-xs font-mono bg-white hover:bg-[#F9F9F9] transition-colors"
            >
              <span className="uppercase text-[#666666] font-semibold mr-2 truncate">
                {key}
              </span>
              <span className="font-bold text-[#171717] text-right shrink-0">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
