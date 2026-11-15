'use client';

import { memo, useCallback, useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { Loader2 } from 'lucide-react';

interface ProgressiveImageProps extends Omit<ImageProps, 'onLoad'> {
  showSpinner?: boolean;
  shimmerClassName?: string;
}

const ProgressiveImage = memo(function ProgressiveImage({
  src,
  alt,
  className = '',
  showSpinner = false,
  shimmerClassName = 'bg-[#2C1E16]',
  blurDataURL,
  ...rest
}: ProgressiveImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const currentSrcKey = typeof src === 'string' ? src : 'img';
  const isLoaded = loadedSrc === currentSrcKey;

  const handleLoad = useCallback(() => {
    setLoadedSrc(currentSrcKey);
  }, [currentSrcKey]);

  return (
    <>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-10 flex items-center justify-center ${shimmerClassName} animate-pulse`}
        >
          {showSpinner && (
            <div className="w-10 h-10 rounded-full bg-black/35 backdrop-blur-md flex items-center justify-center text-[#FFFBF4]">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          )}
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...rest}
      />
    </>
  );
});

export default ProgressiveImage;
