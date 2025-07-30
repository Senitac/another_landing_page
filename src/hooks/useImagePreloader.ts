
import { useState, useEffect } from 'react';

export function useImagePreloader(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      return;
    }

    let isCancelled = false;
    const img = new Image();
    img.src = src;

    const handleLoad = async () => {
      try {
        await img.decode();
        if (!isCancelled) {
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Failed to decode image:', src, error);
      }
    };

    img.addEventListener('load', handleLoad);

    return () => {
      isCancelled = true;
      img.removeEventListener('load', handleLoad);
    };
  }, [src]);

  return isLoaded;
}
