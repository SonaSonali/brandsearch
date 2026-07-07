import Navbar from "./components/layout/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import TrendingProducts from "./components/sections/TrendingProducts/TrendingProducts";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />

      <main className="flex-1 space-y-8 mt-[15px] mr-[19px] rounded-[20px] bg-[#F1F1F1] pt-[21px] pr-[33px] pl-[40px] pb-[40px]">
        <Navbar />

        <TrendingProducts />
      </main>
    </div>
  );
}
