import React from 'react';

function getLeftShowcaseImage(product) {
  if (!product) return null;
  const id = (product.id || '').toLowerCase();
  const slug = (product.slug || '').toLowerCase();
  const name = (product.name || '').toLowerCase();

  // 1. AP 17 SLIDE ECOSHIELD
  if (slug.includes('ap-17') || id.includes('ap-17') || (name.includes('17') && name.includes('ecoshield')) || name.includes('ap 17')) {
    return '/images/AP 17 Slide Ecoshield.jpeg';
  }

  // 2. AP 18 SLIDE LUXORIA
  if (slug.includes('18') || id.includes('18') || (name.includes('18') && name.includes('luxoria')) || name.includes('ap 18')) {
    return '/images/AP 18 Side Luxoria.jpeg';
  }

  // 3. AP 19 SLIDE GLISSAR
  if (slug.includes('19') || id.includes('19') || (name.includes('19') && name.includes('glissar')) || name.includes('ap 19')) {
    return '/images/AP 19 Slide Glissar.jpeg';
  }

  // 4. AP 34 CURTAIN WALL
  if (slug.includes('34') || id.includes('34') || name.includes('34') || name.includes('curtain wall')) {
    return '/images/AP 34 Curtain Wall.jpeg';
  }

  // 5. AP 38 SWING ECOSHIELD
  if (slug.includes('38') || id.includes('38') || (name.includes('38') && name.includes('swing')) || name.includes('swing 38')) {
    return '/images/AP 38 Swing Ecoshield.jpeg';
  }

  return null;
}

function getRightShowcaseImage(product) {
  if (!product) return null;
  const id = (product.id || '').toLowerCase();
  const slug = (product.slug || '').toLowerCase();
  const name = (product.name || '').toLowerCase();

  // AP 18 SLIDE LUXORIA and AP 17 SLIDE ECOSHIELD - ap1.jpeg
  const isAp18 = slug.includes('18') || id.includes('18') || (name.includes('18') && name.includes('luxoria')) || name.includes('ap 18');
  const isAp17 = slug.includes('17') || id.includes('17') || (name.includes('17') && name.includes('ecoshield')) || name.includes('ap 17');
  if (isAp18 || isAp17) {
    return '/ap1.jpeg';
  }

  // AP 38 SWING ECOSHIELD - ap2.jpeg
  const isAp38 = slug.includes('38') || id.includes('38') || (name.includes('38') && name.includes('swing')) || (name.includes('38') && name.includes('ecoshield')) || name.includes('ap 38');
  if (isAp38) {
    return '/ap2.jpeg';
  }

  // AP 20 SLIDE ROLLUP and AP 19 SLIDE GLISSAR - ap3.jpeg
  const isAp20 = slug.includes('20') || id.includes('20') || (name.includes('20') && name.includes('rollup')) || name.includes('ap 20');
  const isAp19 = slug.includes('19') || id.includes('19') || (name.includes('19') && name.includes('glissar')) || name.includes('ap 19');
  if (isAp20 || isAp19) {
    return '/ap3.jpeg';
  }

  return null;
}

export default function ProductShowcaseRow({ product }) {
  const customLeftImage = getLeftShowcaseImage(product);
  const leftImage = customLeftImage || product.images?.[1] || product.mainImage;
  
  const customRightImage = getRightShowcaseImage(product);
  // Choose right image prioritizing custom right image, otherwise fallback avoiding duplicate with left image
  let rightImage = customRightImage || product.images?.[2] || product.images?.[0] || product.mainImage;
  if (!customRightImage) {
    if (rightImage === leftImage && product.images?.[1] && product.images[1] !== leftImage) {
      rightImage = product.images[1];
    } else if (rightImage === leftImage && product.images?.[0] && product.images[0] !== leftImage) {
      rightImage = product.images[0];
    }
  }

  return (
    <section id="product-showcase-row-section" className="space-y-6 pt-6 border-t border-[#E2E2E2]">
      {/* Two-Line Paragraph Before the Images */}
      <div className="w-full text-center">
        <p className="text-xs sm:text-sm md:text-base text-[#5F5F5F] font-sans leading-relaxed text-center w-full">
          {product.name} is engineered to deliver expansive panoramic openings with ultra-slim sightlines, seamlessly uniting structural resilience with refined architectural elegance for contemporary facades. Each system undergoes rigorous extrusion precision and surface-finishing quality checks to guarantee effortless glide dynamics, acoustic insulation and enduring weather protection.
        </p>
      </div>

      {/* SECTION HEADING & SUPPORTING TEXT */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#FF393B]" />
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#666666]">
           System elevation & combination
  </h2>
        </div>
        <p className="text-sm text-[#5F5F5F]">
         Innovative collection enables the creation of multiple configurations using the same fundamental profiles.
        
        </p>
      </div>

      {/* Two Images in the Same Row (Left and Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Left Image */}
        <div className="rounded-xl overflow-hidden border border-[#E2E2E2] bg-neutral-100 aspect-[16/10] sm:aspect-[16/11] relative group">
          <img
            src={leftImage}
            alt={`${product.name} Architectural Facade View`}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Image */}
        <div className="rounded-xl overflow-hidden border border-[#E2E2E2] bg-neutral-100 aspect-[16/10] sm:aspect-[16/11] relative group">
          <img
            src={rightImage}
            alt={`${product.name} Interior Sightline & Profile Integration`}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
