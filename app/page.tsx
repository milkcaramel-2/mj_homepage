"use client";

import { useState, useRef, useEffect } from "react";
import { products, categories, Category, getProductsByCategory } from "./data/products";
import CategoryBookmarks from "./components/CategoryBookmarks";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter products by selected category
  const displayedProducts = selectedCategory
    ? getProductsByCategory(selectedCategory)
    : products;

  // Reset scroll position when category changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedCategory]);

  return (
    <div className="h-screen w-full bg-stone-100 overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-md mx-auto px-4 py-3">
          <h1 className="text-base font-bold text-stone-800 text-center">
            메고지고 별내역점
          </h1>
        </div>
      </header>

      {/* Category Bookmarks - Left Side */}
      <CategoryBookmarks
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Content - Snap Scrolling */}
      <main
        ref={scrollContainerRef}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory pt-12 pb-4 pl-8 pr-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product, index) => (
            <section
              key={product.id}
              className="snap-start h-[calc(100vh-4rem)] w-full max-w-sm mx-auto flex items-center justify-center py-4"
            >
              <div className="w-full h-full max-h-[600px]">
                <ProductCard product={product} />
              </div>
            </section>
          ))
        ) : (
          <section className="snap-start h-[calc(100vh-4rem)] w-full flex items-center justify-center">
            <div className="text-center text-stone-500">
              <p className="text-lg font-medium">상품이 없습니다</p>
              <p className="text-sm mt-2">다른 카테고리를 선택해주세요</p>
            </div>
          </section>
        )}

        {/* Scroll Indicator */}
        {displayedProducts.length > 1 && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
            <div className="flex gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm">
              {displayedProducts.map((_, index) => (
                <div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-stone-300"
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
