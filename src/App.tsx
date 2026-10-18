import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { LenisProvider } from './context/LenisContext';
import ProgressBar from './components/common/ProgressBar';
import WhatsAppButton from './components/common/WhatsAppButton';
import { Navbar1 } from './components/ui/navbar-1';
import Footer from './components/footer/Footer';
import QuoteModal from './components/common/QuoteModal';
import AppRoutes from './routes/AppRoutes';
import { useMediaProtection } from './hooks/useMediaProtection';

export default function App() {
  useMediaProtection();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <LenisProvider>
          <div className="relative min-h-screen bg-[#F2F2F2] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white pt-0">
            <ProgressBar />
            
            {/* Global Navbar with Logo, Navigation Links & Enquiry Button */}
            <Navbar1 onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
            
            <AppRoutes onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
            
            <Footer />

            {/* Floating Action Button (WhatsApp placed where Scroll to top was) */}
            <WhatsAppButton />

            {/* Quote Modal */}
            <QuoteModal
              isOpen={isQuoteModalOpen}
              onClose={() => setIsQuoteModalOpen(false)}
            />

            {/* Toast Notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  color: '#1A1A1A',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }
              }}
            />
          </div>
        </LenisProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
