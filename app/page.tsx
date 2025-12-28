"use client";

import Image from "next/image";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/dsj_152?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen w-full bg-stone-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/logo.png"
              alt="메고지고 별내역점"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>

          {/* Instagram Button */}
          <button
            onClick={handleInstagramClick}
            className="flex-shrink-0 p-1 hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <Image
              src="/insta.png"
              alt="Instagram"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </button>
        </div>
      </header>

      {/* Main Content - Scrollable List */}
      <main className="w-full max-w-md mx-auto pt-14 pb-6 px-4">
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
