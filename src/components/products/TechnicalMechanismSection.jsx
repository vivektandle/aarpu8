import React, { useState } from 'react';
import TechnicalMechanismCard from './TechnicalMechanismCard';
import { renderTechnicalDrawing, renderMechanismGif } from './TechnicalVisualRenderers';

export default function TechnicalMechanismSection({ visuals = [], productName = "Aarpu System" }) {
  const [zoomVisual, setZoomVisual] = useState(null);
  const [zoomTab, setZoomTab] = useState('drawing');

  if (!visuals || visuals.length === 0) return null;

  return (
    <section className="py-12 border-t border-[#E2E2E2] space-y-8">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#FF393B]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
              Aarpu Engineering Specifications
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
            TECHNICAL DRAWINGS & MECHANISM ANIMATIONS
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] max-w-2xl mt-1">
            Explore 3D CAD cross-sections paired with live mechanical movement animations for {productName}.
          </p>
        </div>

        {/* LEGEND / BADGE */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-[#666666] bg-[#F7F7F7] px-3.5 py-2 rounded-lg border border-[#E2E2E2] shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#171717]" />
            <span>CAD Drawing</span>
          </div>
          <span className="text-[#CCCCCC]">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF393B]" />
            <span>Mechanism GIF</span>
          </div>
        </div>
      </div>

      {/* 3-COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visuals.map((visual) => (
          <TechnicalMechanismCard
            key={visual.id || visual.title}
            visual={visual}
            productName={productName}
            onOpenZoom={(v, tab) => {
              setZoomVisual(v);
              setZoomTab(tab);
            }}
          />
        ))}
      </div>

      {/* LIGHTBOX MODAL FOR ZOOM VIEW */}
      {zoomVisual && (
        <div className="fixed inset-0 z-50 bg-[#171717]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white border border-[#E2E2E2] rounded-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-[#E2E2E2] pb-4">
              <div>
                <div className="text-[10px] font-mono font-bold text-[#FF393B] tracking-widest uppercase">
                  {zoomVisual.indexNumber} &bull; High Resolution CAD Inspector
                </div>
                <h3 className="text-lg font-bold text-[#171717]">
                  {zoomVisual.title}
                </h3>
              </div>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setZoomVisual(null)}
                className="p-2 hover:bg-[#F5F5F5] rounded-full text-[#171717] transition-colors"
              >
                <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" strokeWidth="2" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* MODAL TAB SWITCHER */}
            <div className="flex justify-center gap-2">
              <button
                type="button"
                onClick={() => setZoomTab('drawing')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  zoomTab === 'drawing'
                    ? 'bg-[#171717] text-white shadow-md'
                    : 'bg-[#F5F5F5] text-[#666666] hover:text-[#171717]'
                }`}
              >
                CAD CROSS-SECTION DRAWING
              </button>
              <button
                type="button"
                onClick={() => setZoomTab('gif')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                  zoomTab === 'gif'
                    ? 'bg-[#FF393B] text-white shadow-md'
                    : 'bg-[#F5F5F5] text-[#666666] hover:text-[#171717]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                MECHANISM GIF MOTION
              </button>
            </div>

            {/* LARGE VISUAL DISPLAY */}
            <div className="bg-[#FAFAFA] border border-[#E2E2E2] rounded-xl p-8 min-h-[320px] flex items-center justify-center relative">
              <div className="w-full max-w-xl">
                {zoomTab === 'drawing'
                  ? renderTechnicalDrawing(zoomVisual.typeKey)
                  : renderMechanismGif(zoomVisual.typeKey)}
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="text-xs text-[#666666] font-mono border-t border-[#E2E2E2] pt-4 flex flex-col sm:flex-row justify-between gap-2">
              <span>{zoomVisual.subtitle}</span>
              <span className="text-[#171717] font-semibold">{productName} Specification</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
