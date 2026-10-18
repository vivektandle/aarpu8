import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductLightbox({ isOpen, onClose, images, currentIndex, onIndexChange }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 max-w-7xl mx-auto w-full">
        <span className="text-xs font-mono font-bold text-[#111111]">
          IMAGE {currentIndex + 1} OF {images.length}
        </span>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#F8F8F8] hover:bg-[#E5E5E5] text-[#111111] transition-colors cursor-pointer border border-[#E5E5E5]"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center py-4">
        
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={() => onIndexChange((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-white border border-[#E5E5E5] shadow-md hover:bg-[#F8F8F8] text-[#111111] transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Image Display */}
        <div className="max-h-[80vh] max-w-full overflow-hidden rounded-xl bg-[#F8F8F8] border border-[#E5E5E5] shadow-xs">
          <img
            src={currentImage}
            alt={`Product View ${currentIndex + 1}`}
            className="max-h-[80vh] w-auto object-contain mx-auto"
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={() => onIndexChange((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-white border border-[#E5E5E5] shadow-md hover:bg-[#F8F8F8] text-[#111111] transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

      </div>

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 max-w-2xl mx-auto overflow-x-auto py-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onIndexChange(idx)}
              className={`w-16 h-12 rounded-lg overflow-hidden border cursor-pointer transition-all shrink-0 ${
                idx === currentIndex
                  ? 'border-[#111111] ring-2 ring-[#111111]/20 opacity-100'
                  : 'border-[#E5E5E5] opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

    </div>
  );
}
