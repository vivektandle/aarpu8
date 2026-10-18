import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyData';

const PRESET_QUESTIONS = [
  {
    id: 'quote',
    title: 'Get a Project Quote & Estimate',
    message: 'Hello Aarpu team, I would like to get a quote and cost estimate for my project.'
  },
  {
    id: 'sliding',
    title: 'Minimal Sliding Systems (AP 17-20)',
    message: 'Hello, I want to inquire about Aarpu minimal sliding glass systems and sightlines.'
  },
  {
    id: 'cad',
    title: 'Request CAD Drawings & Catalog',
    message: 'Hi Aarpu team, could you please share the technical CAD drawings and product catalog?'
  },
  {
    id: 'visit',
    title: 'Book a Consultation / Site Visit',
    message: 'Hello, I would like to schedule an architectural consultation / site visit for our project.'
  },
  {
    id: 'custom',
    title: 'Talk to an Architectural Specialist',
    message: 'Hi Aarpu team, I have a custom architectural requirement and would like to speak with a specialist.'
  }
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [hasOpened, setHasOpened] = useState(false);
  const widgetRef = useRef(null);

  const whatsappNumber = COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '');

  const openWhatsApp = (msg) => {
    const encoded = encodeURIComponent(msg || 'Hello Aarpu Team, I am interested in your minimal aluminium systems.');
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customMessage.trim()) return;
    openWhatsApp(customMessage.trim());
    setCustomMessage('');
  };

  // Close on Escape or click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
    if (!hasOpened) setHasOpened(true);
  };

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-5 sm:right-6 z-40">
      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[295px] sm:w-[320px] bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col text-[#171717] font-sans select-none"
          >
            {/* WhatsApp Chatbot Header with Aarpu Logo */}
            <div className="bg-[#075E54] text-white px-3.5 py-2.5 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="h-11 px-3 bg-white rounded-xl flex items-center justify-center border border-white/20 shadow-xs overflow-hidden">
                    <img
                      src="/aarpu-logo.png"
                      alt="Aarpu Logo"
                      className="h-8 w-auto object-contain max-w-[95px]"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-[#25D366] text-[#075E54] text-[9px] font-bold tracking-wider uppercase rounded-full border border-white shadow-xs flex items-center gap-1 leading-tight">
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
                    Online
                  </span>
                </div>

               
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-3 bg-[#EFEAE2]/60 max-h-[340px] overflow-y-auto space-y-2.5">
              {/* Date stamp */}
              <div className="text-center">
                <span className="text-[9.5px] font-mono bg-white/80 text-slate-500 px-2.5 py-0.5 rounded-full shadow-2xs">
                  Today
                </span>
              </div>

              {/* Bot Greeting Bubble with Aarpu Branding */}
              <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-xs text-xs space-y-1.5 border border-black/5">
                
                <p className="text-slate-700 text-[11.5px] leading-relaxed">
                  Hi there! 👋 Welcome to Aarpu. How can we assist with your architectural windows or doors project today?
                </p>
                <span className="text-[9px] font-mono text-slate-400 block text-right">
                  Just now ✓✓
                </span>
              </div>

              {/* Pre-listed Quick Questions */}
              <div className="space-y-1 pt-1">
                <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-600 px-1">
                  Frequently Asked:
                </p>
                <div className="space-y-1.5">
                  {PRESET_QUESTIONS.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => openWhatsApp(q.message)}
                      className="w-full text-left bg-white hover:bg-[#E7F8EE] border border-black/10 hover:border-[#25D366]/50 rounded-xl px-2.5 py-2 text-[11px] text-slate-800 font-medium transition-all duration-150 flex items-center justify-between gap-2 shadow-2xs group cursor-pointer"
                    >
                      <span className="group-hover:text-[#075E54] line-clamp-1 leading-snug">
                        {q.title}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#25D366] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Input Bar */}
            <form onSubmit={handleCustomSubmit} className="p-2.5 bg-white border-t border-black/10 flex items-center gap-1.5">
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-slate-50 border border-black/10 focus:border-[#25D366] rounded-full px-3 py-1.5 text-xs text-[#1A1A1A] placeholder-slate-400 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Send WhatsApp message"
                className="w-7 h-7 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shrink-0 shadow-xs cursor-pointer transition-transform active:scale-95"
              >
                <Send className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Widget */}
      <div className="flex items-center gap-2">
        {/* "Chat with us" text on the left side of the widget */}
        {!isOpen && (
          <motion.button
            type="button"
            onClick={toggleChatbot}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            whileHover={{ scale: 1.04, x: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 bg-white/95 hover:bg-white text-[#171717] px-3.5 py-2 rounded-full shadow-lg hover:shadow-xl border border-black/10 transition-all duration-200 cursor-pointer backdrop-blur-md"
            aria-label="Chat with us"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-semibold tracking-tight text-[#171717] select-none whitespace-nowrap">
              Chat with us
            </span>
          </motion.button>
        )}

        {/* Circular Widget with WhatsApp Logo */}
        <motion.button
          type="button"
          onClick={toggleChatbot}
          aria-label={isOpen ? "Close WhatsApp chatbot" : "Open WhatsApp chatbot"}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-pointer shrink-0"
        >
          {/* Subtle notification badge when closed and not opened yet */}
          {!isOpen && !hasOpened && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF393B] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                1
              </span>
            </>
          )}

          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M17.507 14.307l-.009.075c-.238-.12-1.406-.694-1.624-.773-.219-.079-.378-.119-.538.12-.16.239-.617.773-.756.932-.14.16-.279.18-.518.06-.239-.12-1.01-.372-1.923-1.187-.711-.634-1.191-1.417-1.33-1.656-.14-.239-.015-.368.105-.487.108-.107.239-.279.359-.418.12-.14.16-.239.24-.398.08-.16.04-.299-.02-.419-.06-.119-.538-1.294-.737-1.772-.194-.467-.392-.403-.538-.411-.14-.007-.299-.009-.458-.009-.16 0-.418.06-.637.299-.219.239-.837.817-.837 1.993 0 1.175.856 2.311.976 2.471.12.16 1.685 2.572 4.083 3.607 1.426.616 1.986.674 2.698.568.793-.118 1.624-.664 1.853-1.305.23-.641.23-1.19.16-1.305-.07-.116-.259-.187-.498-.306zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.944.557 3.76 1.523 5.305L2 22l4.82-1.503c1.492.87 3.228 1.365 5.08 1.365 5.524 0 10.012-4.488 10.012-10.012C21.912 6.488 17.564 2 12.04 2zm0 18.232c-1.602 0-3.096-.46-4.364-1.258l-.313-.196-3.245 1.013 1.037-3.155-.205-.327a8.213 8.213 0 01-1.26-4.307c0-4.561 3.71-8.271 8.271-8.271 4.562 0 8.272 3.71 8.272 8.271 0 4.562-3.71 8.272-8.272 8.272z" />
            </svg>
          )}
        </motion.button>
      </div>
    </div>
  );
}
