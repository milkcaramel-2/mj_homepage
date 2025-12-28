// Product data structure for 메고지고 별내역점
// All product data is stored here for easy management

export type Category = "떡" | "탕 재료" | "음료" | "군것질" | "선물세트";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
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
    subtitle: "식품조리용 실리콘 푸드매쉬 2매입 ( 다회용 )",
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
    subtitle: "메고지고 꾸덕 그릭요거트 발효용기",
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
  {
    id: "3",
    name: "ASMR 황금 고구마칩 260g, 24개",
    subtitle: "ASMR 황금 고구마칩 260g, 24개",
    originalPrice: 120000,
    salePrice: 84000,
    discountPercent: 30,
    category: "군것질",
    link: "https://naver.me/FBa2MRW0",
    images: [
      "https://shop-phinf.pstatic.net/20251222_227/1766390276845FjuX2_JPEG/37409717964480666_227494031.jpg",
      "https://shop-phinf.pstatic.net/20251021_238/1761012935033aGWuz_JPEG/95145875167710259_924870173.jpg",
      "https://shop-phinf.pstatic.net/20251021_270/1761012941123wIvJc_JPEG/95145881255605666_1146301507.jpg",
      "https://shop-phinf.pstatic.net/20251021_169/1761012946232tdn6s_JPEG/95145807314867418_1568971017.jpg",
      "https://shop-phinf.pstatic.net/20251021_63/1761012951445zxySt_JPEG/8882445189669006_2074681008.jpg",
      "https://shop-phinf.pstatic.net/20251021_23/1761012956089gJDIH_JPEG/95145842993404053_1611686563.jpg",
      "https://shop-phinf.pstatic.net/20251021_19/1761012964605rdjA0_JPEG/12584928686347007_641408393.jpg",
      "https://shop-phinf.pstatic.net/20251021_43/17610129692659XB7u_JPEG/46857308232268898_134343309.jpg",
      "https://shop-phinf.pstatic.net/20251021_205/1761012981065cdy4j_JPEG/43919646639646660_1168457407.jpg",
      "https://shop-phinf.pstatic.net/20251028_57/1761621394111257om_JPEG/1161410912488675_237571123.jpg",
    ],
  },
  {
    id: "4",
    name: "메고지고 꾸덕 그릭요거트메이커 1L 플레인요플레 리코타치즈 요구르트 국내제조기",
    subtitle: "메고지고 꾸덕 그릭요거트메이커 1L 플레인요플레 리코타치즈 요구르트 국내제조기",
    originalPrice: 9900,
    salePrice: 9900,
    discountPercent: 0,
    category: "음료",
    link: "https://naver.me/xoQ8G2y8",
    images: [
      "https://shop-phinf.pstatic.net/20240220_286/1708411156193z9X3l_PNG/109546991029296853_1572296043.png",
      "https://shop-phinf.pstatic.net/20240220_138/1708411203100WYb8K_PNG/109547037935846202_1417395473.png",
      "https://shop-phinf.pstatic.net/20250328_40/1743137391733hyufg_JPEG/61440698677626069_1060157283.jpg",
      "https://shop-phinf.pstatic.net/20250328_160/1743137400237qJ3Is_JPEG/6125631384183197_12100478.jpg",
    ],
  },
  {
    id: "5",
    name: "메고지고 마이쪄세트 습식쌀가루 1kg 포함 백설기찜기 스팀 가정용 전기 떡제조기",
    subtitle: "메고지고 마이쪄세트 습식쌀가루 1kg 포함 백설기찜기 스팀 가정용 전기 떡제조기",
    originalPrice: 120000,
    salePrice: 39900,
    discountPercent: 66,
    category: "떡",
    link: "https://naver.me/xpBAj8hg",
    images: [
      "https://shop-phinf.pstatic.net/20200123_176/157973949689594xdO_PNG/17100235337849316_2091073970.png",
      "https://shop-phinf.pstatic.net/20200123_282/1579739491150w957f_PNG/17100229773718964_508750283.png",
      "https://shop-phinf.pstatic.net/20200306_131/1583461471904gObGz_JPEG/20822210518447342_598096047.jpg",
      "https://shop-phinf.pstatic.net/20200130_213/15803507104354631k_JPEG/17714098943762761_1344116805.jpg",
      "https://shop-phinf.pstatic.net/20200130_42/1580350544376YRNqQ_JPEG/17713932884408377_264294338.jpg",
      "https://shop-phinf.pstatic.net/20191017_117/15712756090855qgux_JPEG/8638997626558613_395313255.jpg",
      "https://shop-phinf.pstatic.net/20200306_198/1583460880849vk8jD_JPEG/20823214401848319_398603514.jpg",
    ],
  },
  {
    id: "6",
    name: "ASMR 황금 고구마칩 260g, 1개",
    subtitle: "ASMR 황금 고구마칩 260g, 1개",
    originalPrice: 5000,
    salePrice: 3900,
    discountPercent: 22,
    category: "군것질",
    link: "https://naver.me/x7jdeTKv",
    images: [
      "https://shop-phinf.pstatic.net/20251222_227/1766390276845FjuX2_JPEG/37409717964480666_227494031.jpg",
      "https://shop-phinf.pstatic.net/20251021_238/1761012935033aGWuz_JPEG/95145875167710259_924870173.jpg",
      "https://shop-phinf.pstatic.net/20251021_270/1761012941123wIvJc_JPEG/95145881255605666_1146301507.jpg",
      "https://shop-phinf.pstatic.net/20251021_169/1761012946232tdn6s_JPEG/95145807314867418_1568971017.jpg",
    ],
  },
  {
    id: "7",
    name: "찹쌀 누룽지팝스낵 POP RICE 무가당, 288g, 1개",
    subtitle: "찹쌀 누룽지팝스낵 POP RICE 무가당, 288g, 1개",
    originalPrice: 5000,
    salePrice: 3900,
    discountPercent: 22,
    category: "군것질",
    link: "https://naver.me/58jdqPmV",
    images: [
      "https://shop-phinf.pstatic.net/20251203_247/1764758016790QzMSO_JPEG/98890956885625422_1459163184.jpg",
      "https://shop-phinf.pstatic.net/20251028_290/1761620236253yy2qr_JPEG/322008003129905_404261053.jpg",
      "https://shop-phinf.pstatic.net/20251028_262/1761619994678pSYra_JPEG/24084145754827149_1134049782.jpg",
      "https://shop-phinf.pstatic.net/20251028_299/1761620261746cDMkE_JPEG/9767322490087192_1540754370.jpg",
      "https://shop-phinf.pstatic.net/20251023_9/1761189009023tiFpf_JPEG/7867430080984888_318383377.jpg",
      "https://shop-phinf.pstatic.net/20251023_228/1761188975694MeWmt_JPEG/47033314671768656_1871046214.jpg",
      "https://shop-phinf.pstatic.net/20251023_82/1761190617293OXSeJ_JPEG/95323478398466854_2039225574.jpg",
      "https://shop-phinf.pstatic.net/20251023_77/1761188998223iHv0T_JPEG/5432972743565357_2135059479.jpg",
      "https://shop-phinf.pstatic.net/20251203_170/1764757517595oCQQo_JPEG/98890330644682618_539917341.jpg",
    ],
  },
  {
    id: "8",
    name: "찹쌀 누룽지팝스낵 POP RICE 무가당, 288g, 20개",
    subtitle: "찹쌀 누룽지팝스낵 POP RICE 무가당, 288g, 20개",
    originalPrice: 100000,
    salePrice: 68000,
    discountPercent: 32,
    category: "군것질",
    link: "https://naver.me/xPUmYErp",
    images: [
      "https://shop-phinf.pstatic.net/20251203_247/1764758016790QzMSO_JPEG/98890956885625422_1459163184.jpg",
      "https://shop-phinf.pstatic.net/20251028_290/1761620236253yy2qr_JPEG/322008003129905_404261053.jpg",
      "https://shop-phinf.pstatic.net/20251028_262/1761619994678pSYra_JPEG/24084145754827149_1134049782.jpg",
      "https://shop-phinf.pstatic.net/20251028_299/1761620261746cDMkE_JPEG/9767322490087192_1540754370.jpg",
    ],
  },
  {
    id: "9",
    name: "메고지고 동동 호박식혜 500ml 페트병 국내산단호박 냉동",
    subtitle: "메고지고 동동 호박식혜 500ml 페트병 국내산단호박 냉동",
    originalPrice: 5500,
    salePrice: 3500,
    discountPercent: 36,
    category: "음료",
    link: "https://naver.me/FW0hTso5",
    images: [
      "https://shop-phinf.pstatic.net/20241206_12/1733474722647WfqaS_JPEG/9962098886717168_1103543419.jpg",
      "https://shop-phinf.pstatic.net/20241206_210/1733474747838sorbV_JPEG/6294801950176686_1076866580.jpg",
      "https://shop-phinf.pstatic.net/20241206_165/1733474754138Rs5iz_JPEG/66858365945154192_1455676.jpg",
      "https://shop-phinf.pstatic.net/20241206_86/1733474768978xWgU3_JPEG/46719260790284677_380945032.jpg",
      "https://shop-phinf.pstatic.net/20241206_232/17334755920170PYmR_JPEG/52033686417770779_1149096159.jpg",
    ],
  },
  {
    id: "10",
    name: "메고지고 프리미엄 생강식혜 일도차 냉동 컵식혜 150ml",
    subtitle: "메고지고 프리미엄 생강식혜 일도차 냉동 컵식혜 150ml",
    originalPrice: 2000,
    salePrice: 1000,
    discountPercent: 50,
    category: "음료",
    link: "https://naver.me/xS1aBmVm",
    images: [
      "https://shop-phinf.pstatic.net/20240919_105/1726739895456wzzod_PNG/60872748040955462_313761743.png",
      "https://shop-phinf.pstatic.net/20240919_75/1726739901952Ifex3_JPEG/60872755094328147_1957981559.jpg",
      "https://shop-phinf.pstatic.net/20240919_152/1726739911496rQf3l_JPEG/6688676137945169_318271291.jpg",
      "https://shop-phinf.pstatic.net/20240919_213/172673991660304jPE_JPEG/12635747629339056_2094317210.jpg",
      "https://shop-phinf.pstatic.net/20240919_218/17267399208148BRdV_JPEG/1301854955275206_1670656990.jpg",
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
