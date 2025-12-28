"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageSwiperProps {
  images: string[];
  productName: string;
  onImageClick: () => void;
}

export default function ImageSwiper({ images, productName, onImageClick }: ImageSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full">
      {/* Main Image Container - Clickable to redirect */}
      <div
        className="relative aspect-square w-full overflow-hidden rounded-lg cursor-pointer"
        onClick={onImageClick}
      >
        <Image
          src={images[currentIndex]}
          alt={`${productName} - ${currentIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 384px) 100vw, 384px"
          priority={currentIndex === 0}
        />

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Horizontally Scrollable Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-14 h-14 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
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
                sizes="56px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
