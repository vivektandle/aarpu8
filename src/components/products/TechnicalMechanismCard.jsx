import React, { useState } from 'react';
import { renderTechnicalDrawing, renderMechanismGif } from './TechnicalVisualRenderers';

export default function TechnicalMechanismCard({ visual, productName, onOpenZoom }) {
  const [activeTab, setActiveTab] = useState('drawing'); // 'drawing' | 'gif'

  return (
    <div className="bg-white border border-[#E2E2E2] hover:border-[#171717] rounded-xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group">
      
      {/* CARD HEADER */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-white bg-[#FF393B] px-2 py-0.5 rounded-sm">
              {visual.indexNumber || '01'}
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#666666]">
              Aarpu Engineering Visual
            </span>
          </div>

          {/* TAB SWITCHER */}
          <div className="inline-flex bg-[#F5F5F5] p-1 rounded-lg border border-[#E2E2E2] text-[10px] font-mono font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('drawing')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === 'drawing'
                  ? 'bg-[#171717] text-white shadow-xs'
                  : 'text-[#666666] hover:text-[#171717]'
              }`}
            >
              CAD DRAWING
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gif')}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                activeTab === 'gif'
                  ? 'bg-[#FF393B] text-white shadow-xs'
                  : 'text-[#666666] hover:text-[#171717]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              MECHANISM GIF
            </button>
          </div>
        </div>

        {/* VISUAL CONTAINER */}
        <div className="relative bg-[#FAFAFA] border border-[#EEEEEE] rounded-lg p-3 my-4 min-h-[220px] flex items-center justify-center overflow-hidden">
          
          {/* Subtle Background Architectural Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* ACTIVE CONTENT */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {activeTab === 'drawing' ? (
              <div className="w-full h-full flex flex-col items-center justify-center">
                {renderTechnicalDrawing(visual.typeKey)}
                <div className="mt-2 text-[9px] font-mono uppercase tracking-widest text-[#888888]">
                  CAD Cross-Section Blueprint
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                {renderMechanismGif(visual.typeKey)}
                <div className="mt-2 text-[9px] font-mono uppercase tracking-widest text-[#FF393B] font-semibold">
                  Live Mechanism Motion Loop
                </div>
              </div>
            )}
          </div>

          {/* ZOOM / LIGHTBOX BUTTON */}
          <button
            type="button"
            onClick={() => onOpenZoom && onOpenZoom(visual, activeTab)}
            className="absolute bottom-2 right-2 p-1.5 bg-white/90 hover:bg-[#171717] hover:text-white border border-[#E2E2E2] rounded-md text-[10px] font-mono transition-all opacity-80 hover:opacity-100 flex items-center gap-1 shadow-xs"
            title="Enlarge Technical Detail"
          >
            <svg className="w-3 h-3 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
            </svg>
            <span>Zoom</span>
          </button>
        </div>

        {/* CARD CONTENT */}
        <div className="space-y-1.5 mt-2">
          <h3 className="text-sm font-bold text-[#171717] tracking-tight group-hover:text-[#FF393B] transition-colors">
            {visual.title}
          </h3>
          <p className="text-xs font-mono text-[#666666]">
            {visual.subtitle}
          </p>
          <p className="text-xs text-[#555555] leading-relaxed line-clamp-2 pt-1">
            {visual.description}
          </p>
        </div>
      </div>

      {/* CARD FOOTER */}
      <div className="pt-4 mt-4 border-t border-[#F0F0F0] flex items-center justify-between text-[10px] font-mono text-[#777777]">
        <span>{productName}</span>
        <button
          type="button"
          onClick={() => setActiveTab(activeTab === 'drawing' ? 'gif' : 'drawing')}
          className="hover:text-[#171717] underline underline-offset-2"
        >
          Switch to {activeTab === 'drawing' ? 'Mechanism' : 'Drawing'} →
        </button>
      </div>

    </div>
  );
}
