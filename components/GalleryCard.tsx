'use client';

import { memo } from 'react';
import { Expand } from 'lucide-react';
import type { GalleryItem } from '@/lib/site-content';
import ProgressiveImage from '@/components/ProgressiveImage';

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onSelect: (index: number) => void;
  className: string;
  sizes: string;
}

const GalleryCard = memo(function GalleryCard({
  item,
  index,
  onSelect,
  className,
  sizes,
}: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className={`group relative rounded-3xl overflow-hidden bg-[#2C1E16] border border-[#2C1E16]/15 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C1E16] shadow-sm ${className}`}
    >
      <ProgressiveImage
        src={item.thumbSrc}
        blurDataURL={item.blurDataURL}
        alt={item.title}
        fill
        quality={78}
        sizes={sizes}
        shimmerClassName="bg-[#3B2D23]"
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#16110E]/80 via-[#16110E]/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

      <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <Expand className="w-4 h-4" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-[#FFFBF4]">
        <p className="text-[11px] font-medium text-[#FFFBF4]/80">{item.caption}</p>
        <h3 className="font-display text-base sm:text-lg font-semibold leading-snug">
          {item.title}
        </h3>
      </div>
    </button>
  );
});

export default GalleryCard;
