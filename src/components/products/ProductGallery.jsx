import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import ProductLightbox from './ProductLightbox';

export default function ProductGallery({ images, name }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImg = images[activeIdx] || images[0];

  return (
    <div className="space-y-4">
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
        PRODUCT GALLERY
      </h2>

      {/* Main Feature Display */}
      <div 
        onClick={() => setIsLightboxOpen(true)}
        className="group relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F8F8F8] border border-[#E5E5E5] cursor-pointer shadow-xs hover:border-[#111111]/30 transition-colors"
      >
        <img
          src={currentImg}
          alt={`${name} Gallery Image`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Hover Fullscreen Hint */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs p-2.5 rounded-full border border-[#E5E5E5] text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`aspect-[4/3] rounded-xl overflow-hidden border cursor-pointer transition-all ${
                idx === activeIdx
                  ? 'border-[#111111] ring-2 ring-[#111111]/20 opacity-100'
                  : 'border-[#E5E5E5] opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <ProductLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={images}
        currentIndex={activeIdx}
        onIndexChange={setActiveIdx}
      />
    </div>
  );
}
