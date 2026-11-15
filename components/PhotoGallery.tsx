import { GALLERY_CONTENT } from '@/lib/site-content';
import GalleryContainer from '@/components/GalleryContainer';

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#3B2D23] mb-2">
          {GALLERY_CONTENT.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#16110E] text-balance">
          {GALLERY_CONTENT.heading}
        </h2>
      </div>

      <GalleryContainer items={GALLERY_CONTENT.items} />
    </section>
  );
}
