import { Plus, Sparkles, TrendingUp, BarChart3 } from "lucide-react";
import NavbarStatItem from "./NavbarStatItem";

const stats = [
  {
    value: "100 millions",
    label: "Top-Selling LIVE Streams",
    imageSrc: "/image/find-lives.png",
    imageShadow: "drop-shadow(12.09px 16.41px 13.82px #1F7B32)",
    boxBg: "background: linear-gradient(180deg, #4EDE67 0%, #4BD2A6 100%);",
    imageWidth: 107,
    imageHeight: 107,
    imageTop: "50%",
    imageRight: "-10px",
    badge: "Find LIVEs",
  },
  {
    value: "100 millions",
    label: "Top Selling Products",
    imageSrc: "/image/find-product.png",
    imageShadow: "drop-shadow(12.09px 16.41px 13.82px #192F7D)",
    boxBg:
  "linear-gradient(180deg, #48AFFE 0%, #486DFE 100%)",
    imageWidth: 129,
    imageHeight: 155,
    imageTop: "48%",
    imageRight: "-15px",
    badge: "Find Products",
  },
  {
    value: "100 millions",
    label: "Top Selling TikTok Shops",
    imageSrc: "/image/find-shop.png",
    imageShadow: "drop-shadow(12.09px 16.41px 13.82px #98400F)",
    boxBg: "background: linear-gradient(147.37deg, #F7C11F -8.79%, #F1591D 83.36%);",
    imageWidth: 88,
    imageHeight: 119,
    imageTop: "52%",
    imageRight: "6px",
    badge: "Find Shops",
  },
  {
    value: "100 millions",
    label: "Fast-Growing Creator Rank",
    imageSrc: "/image/find-creators.png",
    imageShadow: "drop-shadow(12.09px 16.41px 13.82px #501883)",
    boxBg: "background: linear-gradient(147.37deg, #CC95F3 -8.79%, #8B1DF1 83.36%);",
    imageWidth: 150,
    imageHeight: 169,
    imageTop: "50%",
    imageRight: "-35px",
    badge: "Find Creators",
  },
  {
    value: "100 millions",
    label: "Video Smart Slice",
    imageSrc: "/image/ai-creation.png",
    imageShadow: "drop-shadow(12.09px 16.41px 13.82px #856A0F)",
    boxBg: "background: linear-gradient(147.37deg, #F1ED69 -8.79%, #E1AD12 83.36%);",
    imageWidth: 162,
    imageHeight: 162,
    imageTop: "50%",
    imageRight: "-35px",
    badge: "AI Creation",
  },
];

export default function Navbar() {
  return (
    <>
      <div className="rounded-[2rem] bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-row gap-[30px] sm:grid-cols-3">
            <div className="w-fit flex items-center gap-2 text-[#060317] text-[14px] font-semibold leading-[20px]">
              <TrendingUp size={18} />
              <span>23 Products Scaling</span>
            </div>
            <div className="w-fit flex items-center gap-2 text-[#060317] text-[14px] font-semibold leading-[20px]">
              <Sparkles size={18} />
              <span>12 New Brands</span>
            </div>
            <div className="w-fit flex items-center gap-2 text-[#060317] text-[14px] font-semibold leading-[20px]">
              <BarChart3 size={18} />
              <span>Top Niches Today: Beauty</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex h-10 w-[114px] items-center justify-center gap-[6px] rounded-[10px] border border-[#E5E7EB] bg-[#F1F1F1] px-[14px] py-[10px] text-[14px] font-semibold leading-[20px] text-[#060317] transition hover:bg-[#060317] hover:text-white">
              <Plus size={16} />
              Tutorial
            </button>
            <button className="inline-flex h-10 w-[104px] items-center justify-center gap-[6px] rounded-[10px] bg-[#060317] px-[14px] py-[10px] text-[14px] font-semibold leading-[20px] text-white shadow-sm transition hover:bg-[#F1F1F1] hover:text-[#060317]">
              <Plus size={16} />
              New
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-[25px] sm:grid-cols-5">
        {stats.map((stat) => (
          <NavbarStatItem
            key={stat.label}
            imageSrc={stat.imageSrc}
            imageShadow={stat.imageShadow}
            boxBg={stat.boxBg}
            imageWidth={stat.imageWidth}
            imageHeight={stat.imageHeight}
            imageTop={stat.imageTop}
            imageRight={stat.imageRight}
            value={stat.value}
            label={stat.label}
            badge={stat.badge}
          />
        ))}
      </div>
    </>
  );
}
