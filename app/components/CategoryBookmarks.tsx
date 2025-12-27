"use client";

import { Category, categories } from "../data/products";

interface CategoryBookmarksProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export default function CategoryBookmarks({
  selectedCategory,
  onSelectCategory,
}: CategoryBookmarksProps) {
  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col">
      {/* "All" bookmark */}
      <button
        onClick={() => onSelectCategory(null)}
        className={`relative flex items-center justify-center py-2 px-1 text-xs font-medium transition-all
          ${
            selectedCategory === null
              ? "bg-red-600 text-white pl-2 pr-3 rounded-r-md shadow-lg"
              : "bg-red-500/80 text-white/90 rounded-r-sm hover:bg-red-600 hover:pl-2 hover:pr-3"
          }`}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        전체
      </button>

      {/* Category bookmarks */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`relative flex items-center justify-center py-2 px-1 text-xs font-medium transition-all mt-1
            ${
              selectedCategory === category
                ? "bg-red-600 text-white pl-2 pr-3 rounded-r-md shadow-lg"
                : "bg-red-500/80 text-white/90 rounded-r-sm hover:bg-red-600 hover:pl-2 hover:pr-3"
            }`}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}

