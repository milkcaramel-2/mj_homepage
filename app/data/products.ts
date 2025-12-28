// Product data structure for 메고지고 별내역점
// All product data is stored here for easy management

export type Category = "떡" | "탕 재료" | "음료" | "군것질" | "선물세트";

export interface Product {
  id: string;
  name: string;
  subtitle: string; // Bold text above product name
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  category: Category;
  link: string;
  images: string[];
}

// Category configuration
export const categories: Category[] = [
  "떡",
  "탕 재료",
  "음료",
  "군것질",
  "선물세트",
];

// All products - add new products here
export const products: Product[] = [
  {
    id: "4797491254",
    name: "식품조리용 실리콘 푸드매쉬 2매입 ( 다회용 )",
    subtitle: "식품조리용 실리콘 푸드매쉬 2매입 ( 다회용 )", // Change this later
    originalPrice: 990,
    salePrice: 490,
    discountPercent: 50,
    category: "떡",
    link: "https://smartstore.naver.com/ricepiemy/products/4797491254",
    images: [
      "https://shop-phinf.pstatic.net/20200129_183/1580254348711yzzcc_JPEG/17615891319490032_1950375509.jpg",
      "https://shop-phinf.pstatic.net/20200129_179/1580254510736K3eUw_JPEG/17616053343629717_326468147.jpg",
      "https://shop-phinf.pstatic.net/20200129_294/1580253963698n0xML_JPEG/17615506299627616_67802890.jpg",
      "https://shop-phinf.pstatic.net/20200129_262/1580253970343q4VTz_JPEG/17615512770704089_765662635.jpg",
    ],
  },
  {
    id: "5846370302",
    name: "메고지고 꾸덕 그릭요거트 발효용기",
    subtitle: "메고지고 꾸덕 그릭요거트 발효용기", // Change this later
    originalPrice: 5900,
    salePrice: 5900,
    discountPercent: 0,
    category: "음료",
    link: "https://naver.me/xbj5KDua",
    images: [
      "https://shop-phinf.pstatic.net/20210907_66/1630991394214QEjNg_JPEG/32127177929351575_1765482681.jpg",
      "https://shop-phinf.pstatic.net/20210907_109/1630991385515rm4dQ_JPEG/32127213329063061_197782166.jpg",
      "https://shop-phinf.pstatic.net/20210907_77/1630991406888XxCyS_JPEG/32127186614759790_269774330.jpg",
    ],
  },
];

// Helper function to get products by category
export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

// Helper function to format price in Korean Won
export function formatPrice(price: number): string {
  return price.toLocaleString("ko-KR") + "원";
}
