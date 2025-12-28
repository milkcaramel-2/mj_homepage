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
      className="flex flex-col w-full bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer active:scale-[0.99] transition-transform"
      onClick={handleClick}
    >
      {/* Image Gallery with Thumbnails */}
      <div className="p-3" onClick={(e) => e.stopPropagation()}>
        <ImageSwiper images={product.images} productName={product.name} />
      </div>

      {/* Product Info */}
      <div className="px-3 pb-3">
        {/* Product Name */}
        <h2 className="text-sm font-medium text-stone-800 leading-snug line-clamp-2 mb-2">
          {product.name}
        </h2>

        {/* Price Row with Discount */}
        <div className="flex items-center gap-1.5">
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
