import Image from "next/image";
import usLogo from "../../../public/image/us-logo.png";
import { FaCaretUp } from "react-icons/fa";
import {
  Bookmark,
  ChevronUp,
  LineChart,
  MoreVertical,
} from "lucide-react";

interface PlatformMetric {
  platform: "facebook" | "instagram" | "google";
  value: string;
  total: string;
}

// Update these paths to match the actual filenames inside your /public/image folder.
const PLATFORM_ICON_SRC: Record<PlatformMetric["platform"], string> = {
  facebook: "/image/facebook.png",
  instagram: "/image/instagram.png",
  google: "/image/google.png",
};

interface TrendingProductCardProps {
  avatarSrc?: string;
  store: string;
  category: string;
  unitSold: string;
  traffic?: string;
  trafficValue?: string;
  trafficLabel?: string;
  sparkline?: number[];
  image?: string;
  thumbnails?: string[];
  productName: string;
  priceRange: string;
  gmv: string;
  totalGmv: string;
  dailyRange: string;
  growthPercent?: string;
  countryFlag?: string;
  country?: string;
  platformMetrics?: PlatformMetric[];
  onSave?: () => void;
  onAnalyze?: () => void;
  onExpand?: () => void;
}

const DEFAULT_SPARKLINE = [30, 45, 35, 55, 40, 60, 50, 70, 65, 85, 75, 95];

// Update these paths to match the actual filenames inside your /public/image folder.
const DEFAULT_MAIN_IMAGE = "/image/trending-pro1.png";
const DEFAULT_THUMBNAILS = ["/image/trending-pro2.png", "/image/trending-pro3.png"];

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex h-10 items-end gap-[3px]">
      {data.map((value, i) => (
        <div
          key={i}
          className="w-1.5 rounded-full bg-emerald-500"
          style={{ height: `${Math.max(12, (value / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

export default function TrendingProductCard({
  store,
  category,
  unitSold,
  traffic,
  trafficValue,
  trafficLabel = "apr traffic",
  sparkline = DEFAULT_SPARKLINE,
  avatarSrc = "/image/trending-logo.png",
  image = DEFAULT_MAIN_IMAGE,
  thumbnails = DEFAULT_THUMBNAILS,
  productName,
  priceRange,
  gmv,
  totalGmv,
  dailyRange,
  growthPercent = "+0.0%",
  countryFlag = "🇺🇸",
  country = "USA",
  platformMetrics = [],
  onSave,
  onAnalyze,
  onExpand,
}: TrendingProductCardProps) {
  const trafficDisplay = trafficValue ?? traffic ?? "0k";
  const platformLabel = {
    facebook: "Facebook",
    instagram: "Instagram",
    google: "Google",
  } as const;

  return (
    <div className="w-full max-w-sm rounded-[10px] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="relative h-[26px] w-[26px] overflow-hidden rounded-full border border-slate-200 bg-slate-50">
            <Image src={avatarSrc} alt="NORDIC BEAUTY" fill className="object-cover" />
          </div>
          <h3 className="text-[18px] leading-6 font-medium text-[#141617]">{store}</h3>
        </div>
        <button
          type="button"
          aria-label="More options"
          className="text-slate-400 transition hover:text-slate-600"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Unit sold + category */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[#808B96] text-[14px] leading-[20px] font-normal">
          Unit Sold:
        </span>
        <span className="text-[#141617] text-[14px] leading-[20px] font-normal">
          {unitSold}
        </span>
        <span className="rounded-full bg-[#00C43717] px-[10px] py-[6px] text-[10px] font-normal text-[#00C438]">
          {category}
        </span>
      </div>

      {/* Traffic + sparkline */}
      <div className="mt-3 flex items-center justify-between">
        <p className="text-[26px] leading-[34px] font-medium text-[#141617]">
          {trafficDisplay}{" "}
          <span className="text-[14px] leading-[20px] font-normal text-[#808B96]">{trafficLabel}</span>
        </p>
        <Sparkline data={sparkline} />
      </div>

      {/* Image + thumbnails */}
      <div className="mt-4 grid  grid-cols-[2fr_1fr] grid-rows-2 gap-3">
        <div className="relative col-span-1 row-span-2 overflow-hidden rounded-[24px] border border-black/20 bg-slate-100 h-[145px]">
          <Image src={image} alt={productName} fill className="object-cover" />
        </div>
        {thumbnails.slice(0, 2).map((thumb, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-[20px] border border-black/20 bg-slate-100 h-[70px]"
          >
            <Image
              src={thumb}
              alt={`${productName} thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Product name */}
      <p className="mt-3 truncate text-[14px] leading-[24px] font-normal text-[#141617]">
        {productName}
      </p>

      <div className="my-2" />

      {/* Price */}
      <p className="text-[14px] leading-[20px] font-normal text-[#808B96]">
        Price: <span className="font-normal text-[#141617]">{priceRange}</span>
      </p>

      <div className="my-3 border-t border-slate-100" />

      {/* GMV */}
      <div className="flex items-center justify-between text-[14px] leading-[20px] font-normal">
        <span className="text-[#808B96]">
          GMV <span className="font-normal text-[#38CA6E]">{gmv}</span>
        </span>
        <span className="text-slate-500">
          Total GMV: <span className="font-semibold text-slate-900">{totalGmv}</span>
        </span>
      </div>

      <div className="my-3 border-t border-slate-100" />

      {/* Daily range + growth */}
      <div className="flex items-center justify-between">
        <p className="text-[20px] leading-[26px] font-medium text-[#141617]">{dailyRange}</p>
        <span className="flex items-center gap-0.5 text-[14px] leading-[20px] font-normal text-[#38CA6E]">
          <FaCaretUp size={14} />
          {growthPercent}
        </span>
      </div>

          {/* Country */}
      <div className="mt-2 flex items-center gap-[11px] text-sm text-slate-600">
        <span className="relative h-4 w-4 overflow-hidden rounded-full">
          <Image src={usLogo} alt="USA" fill className="object-cover" />
        </span>
        <span className="text-[14px] leading-[20px] font-normal text-[#808B96]">{country}</span>
      </div>

      <div className="my-3 border-t border-slate-100" />

      {/* Platform metrics */}
      <div className="grid grid-cols-3 gap-3">
        {platformMetrics.map((metric) => (
          <div key={metric.platform}>
            <div className="flex items-center gap-1.5">
              <span className="relative grid h-7 w-7">
                <Image
                  src={PLATFORM_ICON_SRC[metric.platform]}
                  alt={platformLabel[metric.platform]}
                  fill
                  className="object-contain p-1"
                />
              </span>
              <span className="text-[12px] leading-none font-normal text-[#808B96]">
                {platformLabel[metric.platform]}
              </span>
            </div>
            <p className="mt-1.5 text-[12px] leading-[12px] font-normal tracking-[3%] text-[#808B96]">
              <span className="font-bold text-[14px] leading-[20px] text-[#141617]">{metric.value}</span>
              /{metric.total}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[40px]" />

      {/* Footer actions */}
      <div className="flex items-center gap-4 justify-end">
        <button
          type="button"
          onClick={onSave}
          className="flex items-center gap-1.5 text-[13.6px] leading-[19.43px] font-medium text-[#3C3D51] transition hover:text-slate-900"
        >
          <Bookmark size={16} />
          Save
        </button>

        {/* <button
          type="button"
          onClick={onExpand}
          aria-label="Expand"
          className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-400 transition hover:bg-slate-50"
        >
          <ChevronUp size={14} />
        </button> */}

        <button
          type="button"
          onClick={onAnalyze}
          className="flex h-[39px] w-[108px] items-center justify-center gap-2 rounded-[10px] px-3 text-[13.6px] leading-[19.43px] font-medium text-[#3C3D51] transition"
          style={{
            background: "#F5F5F5",
          }}
        >
          <span className="grid h-4 w-4 place-items-center rounded-[8px] border border-[#3C3D51] text-[#3C3D51]">
            <LineChart size={12} />
          </span>
          Analize
        </button>
      </div>
    </div>
  );
}
