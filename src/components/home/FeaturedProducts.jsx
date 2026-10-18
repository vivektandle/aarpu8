import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoGallery } from '@/components/ui/gallery';

export default function FeaturedProducts({ onOpenQuoteModal }) {
  const navigate = useNavigate();

  // Create photo items mapped to Aarpu's architectural minimal systems
  // Exactly 5 items with title and category matching the Explore Our Portfolio design
  const productPhotos = [
    {
      id: 'featured-panoramic',
      order: 0,
      direction: 'left',
      src: '/panaromic.jpeg',
      title: 'Panoramic',
      category: 'Beyond the Frame',
      alt: 'Panoramic - Beyond the Frame',
    },
    {
      id: 'featured-minimalist',
      order: 1,
      direction: 'right',
      src: '/image10.jpeg',
      title: 'Minimalist',
      category: 'Less Frame. More Vision',
      alt: 'Minimalist - Less Frame. More Vision',
    },
    {
      id: 'featured-slimline',
      order: 2,
      direction: 'left',
      src: '/slimline.jpeg',
      title: 'Slimline',
      category: 'Reduced Sightlines',
      alt: 'Slimline - Reduced Sightlines',
    },
    {
      id: 'featured-seamless',
      order: 3,
      direction: 'right',
      src: '/seamless.jpeg',
      title: 'Seamless',
      category: 'Architectural Continuity',
      alt: 'Seamless - Architectural Continuity',
    },
    {
      id: 'featured-linear',
      order: 4,
      direction: 'left',
      src: '/linear.jpeg',
      title: 'Linear',
      category: 'Geometric Precision',
      alt: 'Linear - Geometric Precision',
    },
  ];

  return (
    <section className="w-full py-4 sm:py-5 md:py-6 bg-white border-y border-[#E2E2E2] overflow-hidden relative">
      <div className="w-full">
        <PhotoGallery
          animationDelay={0.2}
          title="Explore Our Products"
          titleClassName="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight"
          buttonText="See More Products"
          onButtonClick={() => navigate('/products')}
          photosData={productPhotos}
          photoWidth={280}
          photoHeight={350}
          showImageDetails={true}
        />
      </div>
    </section>
  );
}
