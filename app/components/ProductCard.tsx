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
      className="flex flex-row w-full bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer active:scale-[0.99] transition-transform"
      onClick={handleClick}
    >
      {/* Image - Left Side */}
      <div className="w-32 h-32 flex-shrink-0">
        <ImageSwiper images={product.images} productName={product.name} compact />
      </div>

      {/* Product Info - Right Side */}
      <div className="flex flex-col justify-center flex-grow p-3 min-w-0">
        {/* Product Name */}
        <h2 className="text-sm font-medium text-stone-800 leading-snug line-clamp-2 mb-2">
          {product.name}
        </h2>

        {/* Price Row with Discount */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.discountPercent > 0 && (
            <span className="text-red-500 font-bold text-sm">
              {product.discountPercent}%
            </span>
          )}
          <span className="text-base font-bold text-stone-900">
            {formatPrice(product.salePrice)}
          </span>
          {product.discountPercent > 0 && (
            <span className="text-xs text-stone-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
