'use client';

import { memo, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@/lib/site-content';
import ProgressiveImage from '@/components/ProgressiveImage';

interface GalleryLightboxProps {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryLightbox = memo(function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const activeItem = items[activeIndex];

  // Keyboard navigation + preload adjacent high-res WebP images for instant slide switching
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);

    if (items.length > 1) {
      const nextIdx = (activeIndex + 1) % items.length;
      const prevIdx = (activeIndex - 1 + items.length) % items.length;
      [items[nextIdx].src, items[prevIdx].src].forEach((url) => {
        const img = new window.Image();
        img.src = url;
      });
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, items, onClose, onPrev, onNext]);

  if (!activeItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.title}
      className="fixed inset-0 z-50 bg-[#16110E]/85 backdrop-blur-xl flex items-center justify-center p-4"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer transition-colors"
        aria-label="Close gallery lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={onPrev}
        className="hidden sm:flex absolute left-5 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white items-center justify-center cursor-pointer transition-colors"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="max-w-4xl w-full bg-[#16110E] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
        <div className="relative aspect-[16/10] w-full">
          <ProgressiveImage
            key={activeItem.src}
            src={activeItem.src}
            blurDataURL={activeItem.blurDataURL}
            alt={activeItem.title}
            fill
            quality={85}
            sizes="(max-width: 1024px) 100vw, 896px"
            showSpinner
            shimmerClassName="bg-[#241A13]"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-5 sm:p-6 flex items-center justify-between text-[#FFFBF4]">
          <div>
            <p className="text-xs text-[#D6C7B6]">{activeItem.caption}</p>
            <p className="font-display text-lg font-semibold">
              {activeItem.title}
            </p>
          </div>
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={onPrev}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="hidden sm:flex absolute right-5 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white items-center justify-center cursor-pointer transition-colors"
        aria-label="Next photo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
});

export default GalleryLightbox;
