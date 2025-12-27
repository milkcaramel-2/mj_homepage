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
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full">
      {/* Main Image Container */}
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
                sizes="(max-width: 320px) 100vw, 320px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Clickable Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`relative w-12 h-12 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? "border-stone-800"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} - 썸네일 ${index + 1}`}
                fill
                className="object-cover"
                sizes="48px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
