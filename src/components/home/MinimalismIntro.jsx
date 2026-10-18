import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MinimalismIntro() {
  return (
    <section id="minimalism-performance-section" className="py-10 sm:py-14 px-4 sm:px-6 relative bg-white border-t border-[#E2E2E2] text-[#171717] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="w-full text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light tracking-tight text-[#171717] leading-tight">
            Minimalism, Engineered for Performance
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] font-sans leading-relaxed text-justify">
            “aarpu” creates premium minimalist window/door systems that blend refined aesthetics with advanced performance. Designed to maximize natural light, enhance energy efficiency and create seamless indoor–outdoor connections, our systems bring architectural elegance, precision and functionality to contemporary spaces.
          </p>

          <div className="pt-2 flex justify-end w-full">
            <Link
              to="/about"
              id="minimalism-more-details-btn"
              className="btn-aarpu-primary text-xs py-2 px-5 font-display font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform cursor-pointer inline-flex items-center gap-2"
            >
              <span>More details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
