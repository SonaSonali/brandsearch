import clsx from "clsx";
import { CircleHelp, LayoutGrid, LogOut, Settings } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export interface SidebarItemProps {
  label: string;
  href: string;
  image?: string | StaticImageData;
  icon?: "settings" | "help" | "logout";
  isActive?: boolean;
  badge?: number;
  children?: SidebarItemProps[];
}

export default function SidebarItem({
  label,
  href,
  image,
  icon,
  isActive = false,
  badge,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center rounded-lg px-4 py-3 text-[16px] font-medium leading-[20px] tracking-normal transition-all duration-200",
        isActive
          ? "rounded-[10px] bg-[#ffffff61] text-white font-bold shadow-md backdrop-blur-[54px]"
          : "gap-[14px] text-[#FFFFFFDB] hover:bg-white/10 hover:text-white"
      )}
    >
      <div className="flex h-13.75 w-13.75 items-center justify-center">
        {icon ? (
          <div className="flex h-13.75 w-13.75 items-center justify-center text-white">
            {icon === "settings" && <Settings size={24} />}
            {icon === "help" && <CircleHelp size={24} />}
            {icon === "logout" && <LogOut size={24} />}
          </div>
        ) : image ? (
          <Image
            src={image}
            alt={label}
            width={55}
            height={55}
            className="h-13.75 w-13.75 object-contain"
          />
        ) : (
          <LayoutGrid size={24} />
        )}
      </div>

      <span className="flex-1">{label}</span>

      {badge !== undefined && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs text-white">
          {badge}
        </span>
      )}
    </Link>
  );
}