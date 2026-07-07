import { trendingProducts } from "@/app/data/trendingProducts";
import TrendingProductCard from "./TrendingProductCard";
import { LuCircleChevronRight } from "react-icons/lu";

export default function TrendingProducts() {
  return (
    <section className="mt-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="relative text-[23px] leading-[27px] font-semibold text-[#141617]">
          Trending Products
          <span className="absolute top-1/2 right-[-30px] h-px w-[25px] -translate-y-1/2 bg-[#141617]" />
        </h2>

        <button className="flex items-center gap-[10px] text-[13px] leading-[19px] font-normal text-[#3C3D51] underline">
          Show all
          <LuCircleChevronRight className="text-[#607FF8]" />
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {trendingProducts.map((product) => (
          <TrendingProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
}