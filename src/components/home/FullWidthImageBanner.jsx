import React from 'react';

export default function FullWidthImageBanner({
  image = "/images/Final_Images/image16.jpeg",
  alt = "Architectural minimalist aluminium sliding door and window systems",
  height = "h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px]",
  id = "home-full-width-banner"
}) {
  return (
    <section
      id={id}
      className="w-full relative overflow-hidden bg-neutral-900 border-y border-[#E2E2E2]"
    >
      <div className={`w-full ${height}`}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
