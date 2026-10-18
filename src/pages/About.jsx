import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Hero, { ABOUT_SLIDES } from '../components/home/Hero';
import ContactCTA from '../components/home/ContactCTA';
import { TIMELINE_EVENTS } from '../constants/companyData';
import AarpuGeometricAccent from '../components/common/AarpuGeometricAccent';

export default function About({ onOpenQuoteModal }) {
  return (
    <>
      <SEO
        title="About Aarpu | Architectural Aluminium Systems"
        description="Discover Aarpu company history, architectural glass engineering, 18mm interlocks and sustainable manufacturing standards."
      />

      <main className="pb-16 bg-white min-h-screen text-[#171717] overflow-x-hidden">
        {/* Same Hero Slider with About Us Text */}
        <Hero onOpenQuoteModal={onOpenQuoteModal} slides={ABOUT_SLIDES} />

        {/* Content Container */}
        <div className="pt-10 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
           

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight">
              Engineering Precision in Aluminium Windows, Doors & Facades
            </h1>
          </div>

          {/* About Us Content in Box Shape */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-black/10 shadow-xs">
            <div className="text-[#5F5F5F] text-xs sm:text-sm md:text-base leading-relaxed font-sans space-y-4 text-justify">
              <p>
                “aarpu” is an indian based in the engineering, distribution and design of aluminium windows, doors and facade solutions. “aarpu” is a platform that offers homeowners, businesses and professional’s informative articles on the latest design trends, best aluminium prices and best architectural practices in the aluminium door and window sector. We have dedicated ourselves to excellence since our inception. Our journey began with a vision to revolutionize the way people perceive and experience doors and windows. With a relentless commitment to quality, craftsmanship and innovation, we have emerged as a trusted name in the industry, catering to diverse residential, commercial and institutional projects.
              </p>
              <p>
                What sets us apart is our unwavering focus on precision engineering and superior materials. Every product that bears the “aarpu” seal undergoes rigorous testing and quality assurance measures to ensure it meets the highest standards of performance, durability and aesthetics.
              </p>
            </div>
          </div>
        </div>

        {/* Architectural Image Banner - Full Width */}
        <section className="w-full relative overflow-hidden bg-neutral-900 border-y border-[#E2E2E2] my-10">
          <div className="w-full h-[150px] sm:h-[190px] md:h-[230px] lg:h-[260px]">
            <img
              src="/images/Final_Images/image2.jpeg"
              alt="Aarpu minimalist architectural window and sliding door systems"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Middle Content: Vision & Commitment Grid + Timeline */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Vision & Commitment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group relative bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-[#FF393B] p-5 sm:p-6 md:p-7 transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md">
              <h2 className="text-base sm:text-lg font-bold font-display text-[#171717] group-hover:text-[#FF393B] transition-colors mb-2">
                Our Vision
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] leading-relaxed font-sans text-justify">
                To be a trusted partner for architects, contractors and property owners, delivering premium aluminium window and door systems that combine minimalist design, innovation, sustainability and lasting performance. We aim to shape modern living through elegant architectural solutions that elevate both residential and commercial spaces.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-[#FF393B] p-5 sm:p-6 md:p-7 transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md">
              <h2 className="text-base sm:text-lg font-bold font-display text-[#171717] group-hover:text-[#FF393B] transition-colors mb-2">
                Our Commitment
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] leading-relaxed font-sans text-justify">
                We continuously evolve through innovation, advanced architectural technologies and team development. By investing in knowledge, precision and craftsmanship, we strive to deliver high-performance systems that meet contemporary standards of aesthetics, functionality, durability and architectural excellence.
              </p>
            </div>
          </div>

          {/* Company Timeline - Our Journey. Our Evolution. */}
          <div className="space-y-6 sm:space-y-6">
            <div className="text-center space-y-1.5 max-w-3xl mx-auto">
              <span className="text-[18px] font-mono uppercase tracking-widest text-[#FF393B] font-semibold">
                Company Timeline
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-light tracking-tight text-[#171717] leading-tight">
                Our Journey. Our Evolution.
              </h2>
            </div>

            {/* Minimal Gap Layout for 5 Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {TIMELINE_EVENTS.map((evt, index) => (
                <motion.div
                  key={evt.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-white rounded-xl overflow-hidden border border-black/10 hover:border-[#FF393B] p-4 sm:p-4.5 transition-all duration-300 transform hover:-translate-y-0.5 shadow-2xs hover:shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-[#FF393B] bg-[#F7F7F7] px-2.5 py-0.5 rounded-lg border border-[#E2E2E2] group-hover:border-[#FF393B]/40 transition-colors shadow-2xs">
                        {evt.step}
                      </span>
                    </div>

                    <div className="pt-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold font-display text-[#171717] group-hover:text-[#FF393B] transition-colors mb-2 uppercase tracking-wide leading-snug">
                        {evt.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] leading-relaxed font-sans text-justify">
                        {evt.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Width Image Section with Quote Text Below */}
        <section
          id="about-quote-banner"
          className="w-full relative overflow-hidden bg-white border-y border-[#E2E2E2] my-10"
        >
          {/* Full-Width Image */}
          <div className="w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[460px] relative overflow-hidden bg-neutral-900">
            <img
              src="/images/Final_Images/image3.jpeg"
              alt="Aarpu minimalist aluminium systems and architectural living"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Text Below Image / Tagline Card */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 text-center">
            <div className="group relative bg-white rounded-2xl border border-black/10 hover:border-[#FF393B] p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-md">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-light text-[#171717] leading-relaxed tracking-wide">
                “aarpu” brings together performance, comfort and refined design to create architectural systems that complement modern living.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Content: Contact CTA */}
        <ContactCTA onOpenQuoteModal={onOpenQuoteModal} />
      </main>
    </>
  );
}
