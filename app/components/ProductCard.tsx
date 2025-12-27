"use client";

import { Product, formatPrice } from "../data/products";
import ImageSwiper from "./ImageSwiper";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleClick = () => {
    window.open(product.link, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="flex flex-col h-full w-full bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
      onClick={handleClick}
    >
      {/* Image Swiper */}
      <div className="flex-shrink-0">
        <ImageSwiper images={product.images} productName={product.name} />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow p-4">
        {/* Product Name */}
        <h2 className="text-sm font-medium text-stone-800 leading-snug line-clamp-2 mb-3">
          {product.name}
        </h2>

        {/* Price Row with Discount */}
        <div className="flex items-center gap-2 mt-auto">
          {product.discountPercent > 0 && (
            <span className="text-red-500 font-bold text-base">
              {product.discountPercent}%
            </span>
          )}
          <span className="text-lg font-bold text-stone-900">
            {formatPrice(product.salePrice)}
          </span>
          {product.discountPercent > 0 && (
            <span className="text-xs text-stone-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* CTA Hint */}
        <p className="mt-3 text-xs text-stone-400 text-center">
          탭하여 구매하기
        </p>
      </div>
    </article>
  );
}

