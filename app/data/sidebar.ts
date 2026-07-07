import adLibraryImage from "../public/image/ad-library.png";
import brandSearchLogo from "../public/image/brandsearchlogo.png";
import brandsImage from "../public/image/brands.png";
import dashboardImage from "../public/image/dashboard.png";
import spyToolImage from "../public/image/spy-tool.png";
import ugcVideosImage from "../public/image/ugc-videos.png";
import winningProductsImage from "../public/image/winning-products.png";

export const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    image: dashboardImage,
  },
  {
    label: "Winning Products",
    href: "/winning-products",
    image: winningProductsImage,
  },
  {
    label: "Brands",
    href: "/brands",
    image: brandsImage,
    children: [],
  },
  {
    label: "Ad Library",
    href: "/ad-library",
    image: adLibraryImage,
  },
  {
    label: "UGC Videos",
    href: "/ugc-videos",
    image: ugcVideosImage,
  },
];

export const supportItems = [
  {
    label: "Settings",
    href: "/settings",
    icon: "settings" as const,
  },
  {
    label: "Help",
    href: "/help",
    icon: "help" as const,
  },
  {
    label: "Logout",
    href: "/logout",
    icon: "logout" as const,
  },
];