"use client";

import Image from "next/image";
import { useState } from "react";

// Product data scraped from Naver Smart Store
const product = {
  id: "4797491254",
  name: "식품조리용 실리콘 푸드매쉬 2매입 ( 다회용 )",
  originalPrice: 990,
  salePrice: 490,
  discountPercent: 50,
  link: "https://smartstore.naver.com/ricepiemy/products/4797491254",
  images: [
    "https://shop-phinf.pstatic.net/20200129_183/1580254348711yzzcc_JPEG/17615891319490032_1950375509.jpg",
    "https://shop-phinf.pstatic.net/20200129_179/1580254510736K3eUw_JPEG/17616053343629717_326468147.jpg",
    "https://shop-phinf.pstatic.net/20200129_294/1580253963698n0xML_JPEG/17615506299627616_67802890.jpg",
    "https://shop-phinf.pstatic.net/20200129_262/1580253970343q4VTz_JPEG/17615512770704089_765662635.jpg",
  ],
};

function formatPrice(price: number): string {
  return price.toLocaleString("ko-KR") + "원";
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleProductClick = () => {
    window.open(product.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
        <div className="max-w-md mx-auto px-4 py-3">
          <h1 className="text-lg font-bold text-stone-800 text-center">
            메고지고 별내역점
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto pb-20">
        {/* Product Card */}
        <article 
          className="bg-white cursor-pointer"
          onClick={handleProductClick}
        >
          {/* Main Image */}
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 448px) 100vw, 448px"
              priority
            />
            
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discountPercent}% OFF
            </div>
          </div>

          {/* Image Gallery Thumbnails */}
          <div className="flex gap-2 p-3 overflow-x-auto">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`relative w-16 h-16 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-stone-800"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} - 이미지 ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>

          {/* Product Info */}
          <div className="p-4 border-t border-stone-100">
            <h2 className="text-base font-medium text-stone-800 leading-snug mb-3">
              {product.name}
            </h2>
            
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-stone-900">
                {formatPrice(product.salePrice)}
              </span>
              <span className="text-sm text-stone-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            </div>

            {/* CTA Hint */}
            <p className="mt-4 text-xs text-stone-500 text-center">
              탭하여 상품 페이지로 이동
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200">
        <div className="max-w-md mx-auto px-4 py-3">
          <button
            onClick={handleProductClick}
            className="w-full bg-stone-800 text-white font-medium py-3 rounded-lg hover:bg-stone-700 active:bg-stone-900 transition-colors"
          >
            구매하러 가기
          </button>
        </div>
      </footer>
    </div>
  );
}
