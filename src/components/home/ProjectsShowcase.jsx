import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoGallery } from '@/components/ui/gallery';
import { PROJECTS_DATA } from '../../constants/projectsData';

export default function ProjectsShowcase() {
  const navigate = useNavigate();

  // Architectural portfolio projects showcase - display images with title and category overlay
  const projectPhotos = PROJECTS_DATA.map((project, idx) => ({
    id: project.id,
    order: idx,
    direction: idx % 2 === 0 ? 'left' : 'right',
    src: project.imageAfter || project.imageBefore,
    title: project.title,
    category: project.category,
    alt: `${project.title} - Aarpu architectural systems`,
  }));

  return (
    <section className="w-full py-4 sm:py-5 md:py-6 bg-[#F7F7F7] border-y border-[#E2E2E2] overflow-hidden relative">
      <div className="w-full">
        <PhotoGallery
          animationDelay={0.2}
          title="Explore Our Portfolio"
          titleClassName="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight"
          buttonText="See More Portfolio"
          onButtonClick={() => navigate('/portfolio')}
          photosData={projectPhotos}
          photoWidth={280}
          photoHeight={350}
          showImageDetails={true}
        />
      </div>
    </section>
  );
}
