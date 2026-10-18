import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="404 Page Not Found | Aarpu Minimal Systems" />
      <div className="min-h-screen bg-[#08090a] text-white flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6 glass-panel p-10 rounded-3xl border border-white/20 shadow-2xl">
          <span className="text-6xl font-black font-display text-amber-400">404</span>
          <h1 className="text-2xl font-bold font-display text-white">Architectural View Not Found</h1>
          <p className="text-xs text-gray-400 font-mono">
            The minimal frame specification you requested does not exist or has been relocated.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider hover:bg-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Sanctuary</span>
          </Link>
        </div>
      </div>
    </>
  );
}
