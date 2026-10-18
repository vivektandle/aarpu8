import React from 'react';

/**
 * AarpuGeometricAccent Component
 * Generates subtle geometric decorations inspired by the Aarpu logo language:
 * - Diamond outline (#E2E2E2 / #8A8A8A)
 * - Red accent square/block (#FF393B)
 * - Thin architectural technical line
 * - Modular grid dots/crosses
 */
export default function AarpuGeometricAccent({
  type = 'accent-block', // 'accent-block' | 'diamond' | 'line' | 'heading-tag' | 'grid'
  className = '',
  number = null,
  text = null,
}) {
  if (type === 'heading-tag') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <span className="w-2 h-2 bg-[#FF393B] rounded-xs shrink-0" />
        {number && (
          <span className="font-mono text-xs font-bold text-[#FF393B] tracking-widest">
            {number}
          </span>
        )}
        {text && (
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#5F5F5F]">
            {text}
          </span>
        )}
      </div>
    );
  }

  if (type === 'diamond') {
    return (
      <div className={`relative shrink-0 pointer-events-none ${className}`}>
        <div className="w-8 h-8 border border-[#E2E2E2] rotate-45 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-[#FF393B]" />
        </div>
      </div>
    );
  }

  if (type === 'line') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-1.5 h-1.5 bg-[#FF393B] rounded-xs shrink-0" />
        <div className="h-[1px] bg-[#E2E2E2] flex-1" />
      </div>
    );
  }

  if (type === 'grid') {
    return (
      <div className={`grid grid-cols-3 gap-1 w-6 h-6 shrink-0 opacity-40 ${className}`}>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 ${i === 4 ? 'bg-[#FF393B]' : 'bg-[#8A8A8A]'}`}
          />
        ))}
      </div>
    );
  }

  // Default: accent-block
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="w-2.5 h-2.5 bg-[#FF393B] shrink-0" />
      <span className="w-1.5 h-1.5 bg-[#E2E2E2] shrink-0" />
    </div>
  );
}
