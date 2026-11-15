'use client';

import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import type { GalleryItem } from '@/lib/site-content';
import GalleryCard from '@/components/GalleryCard';

const GalleryLightbox = dynamic(() => import('@/components/GalleryLightbox'), {
  ssr: false,
});

export default function GalleryContainer({ items }: { items: GalleryItem[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const featuredItem = items[0];
  const secondaryItems = items.slice(1);

  const handleOpen = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + items.length) % items.length,
    );
  }, [items.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % items.length,
    );
  }, [items.length]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 items-stretch">
        {featuredItem && (
          <GalleryCard
            item={featuredItem}
            index={0}
            onSelect={handleOpen}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full md:w-1/2 min-h-[260px] sm:min-h-[320px] md:min-h-[460px]"
          />
        )}

        <div className="w-full md:w-1/2 flex flex-wrap gap-4 sm:gap-5">
          {secondaryItems.map((item, offsetIdx) => (
            <GalleryCard
              key={item.src}
              item={item}
              index={offsetIdx + 1}
              onSelect={handleOpen}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.625rem)] h-[220px]"
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          activeIndex={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
