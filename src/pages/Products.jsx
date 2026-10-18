import React from 'react';
import SEO from '../components/common/SEO';
import Hero, { PRODUCTS_SLIDES } from '../components/home/Hero';
import ProductGrid from '../components/products/ProductGrid';
import ContactCTA from '../components/home/ContactCTA';
import FullWidthVideoBanner from '../components/home/FullWidthVideoBanner';
import { PRODUCTS } from '../data/products';

export default function Products({ onOpenQuoteModal }) {
  return (
    <>
      <SEO
        title="Product Catalogue | Aarpu Architectural Aluminium Systems"
        description="Explore Aarpu's complete range of architectural aluminium sliding systems, casement windows and curtain wall systems engineered for modern glass."
      />

      <main className="pb-16 bg-white text-[#171717] min-h-screen overflow-x-hidden">
        {/* Same Hero Slider with Aarpu Product Systems Text */}
        <Hero onOpenQuoteModal={onOpenQuoteModal} slides={PRODUCTS_SLIDES} />

        <div className="pt-8 sm:pt-10 w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Header */}
          <div className="text-center w-full space-y-3 px-2">
            {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#171717] tracking-tight">
              Aarpu Product Systems
            </h1> */}
            <p className="text-[#5F5F5F] text-sm sm:text-base md:text-lg font-light w-full leading-relaxed text-justify">
              Every “aarpu” product is developed through careful research into climate conditions, construction practices, architectural context and user requirements. The result is a seamless balance of functionality, aesthetics and lasting performance, designed to integrate naturally with contemporary spaces.
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid products={PRODUCTS} />
        </div>

        {/* Video 2 in full width with no text or buttons before CTA */}
        <div className="pt-10 sm:pt-14">
          <FullWidthVideoBanner
            id="product-video2-banner"
            src="/Final_Videos/video2.mp4"
          />
        </div>

        {/* Contact CTA */}
        <ContactCTA onOpenQuoteModal={onOpenQuoteModal} />
      </main>
    </>
  );
}
