import React from 'react';
import SEO from '../components/common/SEO';
import ScrollReveal from '../components/common/ScrollReveal';
import Hero from '../components/home/Hero';
import MinimalismIntro from '../components/home/MinimalismIntro';
import FullWidthImageBanner from '../components/home/FullWidthImageBanner';
import FullWidthVideoBanner from '../components/home/FullWidthVideoBanner';
import AboutPreview from '../components/home/AboutPreview';
import StatsSection from '../components/home/StatsSection';
import ProcessTimeline from '../components/home/ProcessTimeline';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import WhyAarpu from '../components/home/WhyAarpu';
import ContactCTA from '../components/home/ContactCTA';

export default function Home({ onOpenQuoteModal }) {
  return (
    <>
      <SEO
        title="Aarpu | Award-Winning Minimal Aluminium Doors & Windows"
        description="Aarpu manufactures luxury minimal aluminium doors, invisible frames, casement windows and curtain wall glass systems."
      />

      <main className="relative bg-[#F2F2F2] text-[#1A1A1A] min-h-screen overflow-hidden">
        <Hero onOpenQuoteModal={onOpenQuoteModal} showArrows={false} isHome={true} />

        <ScrollReveal yOffset={35} duration={0.8}>
          <MinimalismIntro />
        </ScrollReveal>

        {/* Video 1 in full width with no text or buttons */}
        <ScrollReveal yOffset={35} duration={0.8}>
          <FullWidthVideoBanner
            id="home-video1-banner"
            src="/Final_Videos/video1.mp4"
            playbackRate={0.7}
          />
        </ScrollReveal>

        {/* <ScrollReveal yOffset={35} duration={0.8}>
          <FullWidthImageBanner
            id="home-minimalism-banner"
            image="/images/Final_Images/image16.jpeg"
            alt="Aarpu minimalist architectural living spaces and precision aluminium systems"
          />
        </ScrollReveal> */}

        <ScrollReveal yOffset={35} duration={0.8}>
          <ProcessTimeline />
        </ScrollReveal>

        <ScrollReveal yOffset={35} duration={0.8}>
          <FeaturedProducts onOpenQuoteModal={onOpenQuoteModal} />
        </ScrollReveal>

        <ScrollReveal yOffset={35} duration={0.8}>
          <StatsSection />
        </ScrollReveal>

        <ScrollReveal yOffset={35} duration={0.8}>
          <ProjectsShowcase />
        </ScrollReveal>

        <ScrollReveal yOffset={35} duration={0.8}>
          <WhyAarpu />
        </ScrollReveal>

        <ScrollReveal yOffset={35} duration={0.8}>
          <FullWidthImageBanner
            id="home-about-transition-banner"
            image="/images/Final_Images/image15.jpeg"
            alt="Aarpu minimalist architectural living spaces and precision aluminium systems"
          />
        </ScrollReveal>

        <ScrollReveal yOffset={35} duration={0.8}>
          <AboutPreview />
        </ScrollReveal>
        
        <ScrollReveal yOffset={35} duration={0.8}>
          <ContactCTA onOpenQuoteModal={onOpenQuoteModal} />
        </ScrollReveal>
      </main>
    </>
  );
}

