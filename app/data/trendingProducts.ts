type PlatformMetric = {
  platform: "facebook" | "instagram" | "google";
  value: string;
  total: string;
};

type TrendingProduct = {
  id: number;
  store: string;
  category: string;
  productName: string;
  traffic: string;
  unitSold: string;
  avatarSrc?: string;
  priceRange: string;
  gmv: string;
  totalGmv: string;
  dailyRange: string;
  country: string;
  platformMetrics: PlatformMetric[];
  image: string;
  thumbnails: string[];
};

export const trendingProducts: TrendingProduct[] = [
  {
    id: 1,
    avatarSrc: "/image/trending-logo.png",
    store: "Medicube US Store",
    category: "Skincare",
    productName: "Rose Glow Serum",
    traffic: "54.2k",
    unitSold: "3.8m",
    priceRange: "$18 - $27",
    gmv: "$142k",
    totalGmv: "$1.2m",
    dailyRange: "$2.8k - $3.4k",
    country: "Sweden",
    platformMetrics: [
      { platform: "facebook", value: "24.5k", total: "3.1M " },
      { platform: "instagram", value: "18.4k", total: "2.6M " },
      { platform: "google", value: "11.3k", total: "1.9M " },
    ],
    image: "/image/trending-pro1.png",
    thumbnails: ["/image/trending-pro2.png", "/image/trending-pro3.png"],
  },
  {
    id: 2,
    avatarSrc: "/image/trending-logo.png",
    store: "Medicube US Store",
    category: "Beauty",
    productName: "Mint Repair Cream",
    traffic: "42.1k",
    unitSold: "2.9m",
    priceRange: "$21 - $29",
    gmv: "$118k",
    totalGmv: "$980k",
    dailyRange: "$2.1k - $2.7k",
    country: "Finland",
    platformMetrics: [
      { platform: "facebook", value: "19.2k", total: "2.4M " },
      { platform: "instagram", value: "14.8k", total: "2.0M " },
      { platform: "google", value: "8.7k", total: "1.3M " },
    ],
    image: "/image/trending-pro2.png",
    thumbnails: ["/image/trending-pro1.png", "/image/trending-pro3.png"],
  },
  {
    id: 3,
    avatarSrc: "/image/trending-logo.png",
    store: "Medicube US Store",
    category: "Makeup",
    productName: "Glow Radiance Oil",
    traffic: "39.8k",
    unitSold: "2.5m",
    priceRange: "$16 - $24",
    gmv: "$104k",
    totalGmv: "$860k",
    dailyRange: "$1.9k - $2.4k",
    country: "Germany",
    platformMetrics: [
      { platform: "facebook", value: "17.9k", total: "2.2M " },
      { platform: "instagram", value: "13.1k", total: "1.7M " },
      { platform: "google", value: "8.0k", total: "1.1M " },
    ],
    image: "/image/trending-pro3.png",
    thumbnails: ["/image/trending-pro1.png", "/image/trending-pro2.png"],
  },
  {
    id: 4,
    avatarSrc: "/image/trending-logo.png",
    store: "Medicube US Store",
    category: "Wellness",
    productName: "Daily Radiance Lotion",
    traffic: "46.7k",
    unitSold: "3.2m",
    priceRange: "$19 - $25",
    gmv: "$128k",
    totalGmv: "$1.05m",
    dailyRange: "$2.4k - $3.0k",
    country: "USA",
    platformMetrics: [
      { platform: "facebook", value: "22.1k", total: "2.8M " },
      { platform: "instagram", value: "16.3k", total: "2.3M " },
      { platform: "google", value: "9.2k", total: "1.4M " },
    ],
    image: "/image/trending-pro1.png",
    thumbnails: ["/image/trending-pro2.png", "/image/trending-pro3.png"],
  },
];
