import React, { useState } from "react";
import { BackgroundBeams as GlobalBackgroundBeams } from "./ui/background-beams";
import { TracingBeam } from "./ui/tracing-beam";
import Chatbot from "./Chatbot";
import Loader from "./Loader";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout } from "../store/userSlice";
import { FaUserCircle } from "react-icons/fa";
import LoginModal from "./LoginModal";

function Navbar({ className }: { className?: string }) {
  const user = useSelector((state: RootState) => state.user);
  const [isHovered, setIsHovered] = useState(false);
  // Dynamic dock links based on user role
  const dockLinks: { title: string; icon: React.ReactNode; href: string }[] = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-cyan-600 dark:text-cyan-300" />,
      href: "/home",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-purple-600 dark:text-purple-300" />,
      href: "/catalog",
    },
    ...(user.isAuthenticated && user.user?.role === 'buyer'
      ? [{
          title: "Buyer Dashboard",
          icon: <IconNewSection className="h-full w-full text-green-600 dark:text-green-300" />,
          href: "/buyer-dashboard",
        }]
      : []),
    ...(user.isAuthenticated && ['supplier', 'admin'].includes(user.user?.role as string)
      ? [{
          title: "Supplier/Admin Dashboard",
          icon: <IconNewSection className="h-full w-full text-yellow-600 dark:text-yellow-300" />,
          href: "/supplier-dashboard",
        }]
      : []),
    {
      title: "About",
      icon: <IconExchange className="h-full w-full text-blue-600 dark:text-blue-300" />,
      href: "/about",
    },
    {
      title: "Cart",
      icon: <IconBrandX className="h-full w-full text-pink-600 dark:text-pink-300" />,
      href: "/cart",
    },
    {
      title: "Checkout",
      icon: <IconBrandGithub className="h-full w-full text-gray-800 dark:text-gray-200" />,
      href: "/checkout",
    },
  ];

  // Loader state (simulate loading for demo)
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={cn("w-full", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tracing beam for main content area */}
      <TracingBeam>
        {/* Floating Dock navigation */}
        <div className="fixed top-1/2 left-4 z-50 -translate-y-1/2">
          <FloatingDock items={dockLinks} />
        </div>
      </TracingBeam>
      {/* Chatbot assistant */}
      <Chatbot />
      {/* Loader overlay (demo) */}
      {loading && <Loader />}
      {/* Example: Use isHovered to control dropdowns, highlights, etc. */}
      {/* {isHovered && <div className="absolute top-full left-0 w-full bg-cyan-900">Hovered!</div>} */}
    </nav>
  );
}

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

export default Navbar;
export { FloatingDock };
