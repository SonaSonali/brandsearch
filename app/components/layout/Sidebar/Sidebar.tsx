import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { menuItems, supportItems } from "../../../data/sidebar";
import brandSearchLogo from "../../../public/image/brandsearchlogo.png";

export default function Sidebar() {
  return (
    <aside className="sticky left-0 top-0 flex h-full min-h-screen w-77.75 flex-col justify-between overflow-hidden bg-[#0f172a] px-7 pb-10 pt-10 text-white shadow-[8px_0px_21px_0px_#878C9D14]">
      <div className="relative z-10 flex h-full flex-col justify-between">
      <div>
        <Link href="/" className="mb-4 flex items-start justify-start px-1">
          <div className="flex h-auto w-43.5 items-center justify-start overflow-visible bg-transparent shadow-none">
            <Image
              src={brandSearchLogo}
              alt="BrandSearch logo"
              width={174}
              height={174}
              className="h-auto w-43.5 object-contain"
            />
          </div>
        </Link>

        <div className="relative mb-10 mt-13 px-4 text-[14px] font-normal uppercase leading-5 text-[#989EAD]">
          MENU
          <span className="absolute top-1/2 left-[60px] h-px w-[25px] -translate-y-1/2 bg-[#989EAD]"></span>
        </div>

        <nav className="space-y-[10px]">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              href={item.href}
              image={item.image}
              isActive={item.href === "/dashboard"}
            />
          ))}
        </nav>
      </div>

        <div className="mt-[42px] border-t border-slate-700 pt-[50px]">
          <div className="relative mb-[30px] px-4 text-[14px] font-normal uppercase leading-[20px] text-[#989EAD]">
            Support
            <span className="absolute top-1/2 left-[90px] h-px w-[25px] -translate-y-1/2 bg-[#989EAD]" />
          </div>
          <div className="space-y-[10px]">
            {supportItems.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
