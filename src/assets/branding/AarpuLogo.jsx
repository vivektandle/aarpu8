import React, { useState } from 'react';
import logoImg from './aarpu-logo.png';

/**
 * Aarpu Official Brand Logo Component
 * High-resolution brand logo with automatic vector SVG fallback
 */
export default function AarpuLogo({
  variant = 'full', // 'full' | 'mark' | 'text'
  theme = 'dark',   // 'dark' | 'light' (dark text for light background, white text for dark background)
  className = '',
  height = 64,
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
      {!hasError ? (
        <img
          src={logoImg}
          alt="Aarpu Architectural Aluminium"
          style={{ height: `${height}px`, width: 'auto', minHeight: `${height}px` }}
          className={`object-contain transition-opacity duration-300 block ${
            theme === 'light' ? 'brightness-0 invert' : ''
          }`}
          onError={() => {
            setHasError(true);
          }}
        />
      ) : (
        /* Fallback Vector SVG in case webp image fails to load */
        <svg
          viewBox="0 0 580 160"
          style={{ height: `${height}px`, width: 'auto' }}
          className="block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Diamond Outline on Left */}
          <polygon
            points="75,10 145,80 75,150 5,80"
            stroke="#8A8A8A"
            strokeWidth="3"
            fill="none"
          />

          {/* Red Geometric Emblem (#FF393B) */}
          <g fill="#FF393B">
            <polygon points="85,38 108,15 108,38" />
            <rect x="111" y="15" width="23" height="23" rx="1.5" />
            <rect x="137" y="15" width="23" height="23" rx="1.5" />
            <polygon points="163,15 186,38 163,38" />

            <rect x="85" y="41" width="23" height="23" rx="1.5" />
            <rect x="163" y="41" width="23" height="23" rx="1.5" />

            <rect x="85" y="67" width="23" height="23" rx="1.5" />
            <rect x="163" y="67" width="23" height="23" rx="1.5" />

            <polygon points="85,93 108,93 108,116" />
            <rect x="111" y="93" width="23" height="23" rx="1.5" />
            <polygon points="137,93 160,93 137,116" />
            <rect x="163" y="93" width="23" height="23" rx="1.5" />

            <rect x="163" y="119" width="23" height="23" rx="1.5" />
          </g>

          {/* Wordmark */}
          <text
            x="208"
            y="114"
            fill={theme === 'light' ? '#FFFFFF' : '#171717'}
            fontSize="112"
            fontWeight="500"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            letterSpacing="-0.03em"
          >
            aarpu
          </text>
        </svg>
      )}
    </div>
  );
}


