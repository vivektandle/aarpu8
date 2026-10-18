import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import InteractiveProductViewer from './InteractiveProductViewer';

export default function ProductPreviewModal({ isOpen, onClose, product, onOpenQuoteModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto select-none">
      <div 
        className="relative w-full max-w-5xl bg-[#111318] border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-black/80 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF393B] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              PRODUCT PREVIEW &bull; {product.name}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-2 sm:p-4 max-h-[85vh] overflow-y-auto">
          <InteractiveProductViewer
            product={product}
            onOpenQuote={() => {
              onClose();
              if (onOpenQuoteModal) onOpenQuoteModal();
            }}
          />
        </div>
      </div>
    </div>
  );
}
