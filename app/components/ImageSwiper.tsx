"use client";

import Image from "next/image";
import { useState, useRef, TouchEvent } from "react";

interface ImageSwiperProps {
  images: string[];
  productName: string;
}

export default function ImageSwiper({ images, productName }: ImageSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold && currentIndex < images.length - 1) {
      // Swipe left - next image
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -threshold && currentIndex > 0) {
      // Swipe right - previous image
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div
        className="relative aspect-square w-full overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              <Image
                src={img}
                alt={`${productName} - ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 448px) 100vw, 448px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === index
                  ? "w-4 bg-white"
                  : "w-1.5 bg-white/50"
              }`}
              aria-label={`이미지 ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Swipe Hint (only on first image) */}
      {currentIndex === 0 && images.length > 1 && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 text-xs">
          <svg
            className="w-5 h-5 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

