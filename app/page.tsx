"use client";

import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-stone-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-md mx-auto px-4 py-3">
          <h1 className="text-base font-bold text-stone-800 text-center">
            메고지고 별내역점
          </h1>
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
