import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyData';

export default function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Systems & Products', path: '/products' },
    { name: 'Portfolio & Projects', path: '/portfolio' },
    { name: 'Contact & Consultation', path: '/contact' }
  ];

  return (
    <footer className="relative bg-[#FFF8F8] text-[#171717] pt-14 pb-16 border-t border-[#FF393B]/[0.32] overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-architecture-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Three Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pb-12 border-b border-[#E2E2E2]">
          
          {/* COLUMN 1: Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block py-0.5" aria-label="Aarpu Home">
              <img
                src="/aarpu-logo.png"
                alt="Aarpu Architectural Aluminium"
                className="h-[54px] sm:h-[66px] md:h-[76px] lg:h-[82px] w-auto object-contain block"
              />
            </Link>
            <p className="text-[#5F5F5F] text-xs sm:text-sm leading-relaxed font-normal max-w-sm text-justify">
              Aarpu manufactures minimal aluminium sliding interlocks, swing glass doors and structural curtain wall systems for modern architecture.
            </p>
          </div>

          {/* COLUMN 2: Nav Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF393B]" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#171717]">
                Quick Navigation
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#5F5F5F] hover:text-[#FF393B] transition-colors inline-flex items-center gap-1.5 group py-0.5"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF393B]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Address & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF393B]" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#171717]">
                Headquarters &amp; Address
              </h3>
            </div>
            
            <div className="space-y-3 text-xs font-sans text-[#5F5F5F]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF393B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-semibold text-[#171717]">Address: </span>
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#FF393B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-semibold text-[#171717]">Hours: </span>
                  {COMPANY_INFO.workingHours}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF393B] shrink-0" />
                <div className="font-mono">
                  <span className="font-sans font-semibold text-[#171717]">Phone: </span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#FF393B] transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF393B] shrink-0" />
                <div className="font-mono">
                  <span className="font-sans font-semibold text-[#171717]">Email: </span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#FF393B] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8A8A] font-mono">
          <p>&copy; {new Date().getFullYear()} Aarpu Architectural Aluminium. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
