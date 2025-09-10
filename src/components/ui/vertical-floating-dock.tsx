
import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconHome,
  IconShoppingCart,
  IconHeart,
  IconHistory,
  IconDashboard,
  IconPackage,
  IconTruck,
  IconUser,
  IconLogin,
  IconLogout,
  IconCategory,
} from "@tabler/icons-react";
import { useAuth } from "../../contexts/auth-context";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  authRequired?: boolean;
  roles?: string[];
}

export function VerticalFloatingDock(): React.JSX.Element {
  const { user, isAuthenticated, logout } = useAuth();

  // Common items for all users
  const commonItems: DockItem[] = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Products",
      icon: <IconCategory className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/products",
    },
  ];

  // Public items (non-authenticated)
  const publicItems: DockItem[] = [
    {
      title: "Login",
      icon: <IconLogin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/auth",
    },
  ];

  // Customer items
  const customerItems: DockItem[] = [
    {
      title: "Cart",
      icon: <IconShoppingCart className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/cart",
      authRequired: true,
      roles: ["customer"],
    },
    {
      title: "Favorites",
      icon: <IconHeart className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/favorites",
      authRequired: true,
      roles: ["customer"],
    },
    {
      title: "Order History",
      icon: <IconHistory className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/orders",
      authRequired: true,
      roles: ["customer"],
    },
  ];

  // Admin/Supplier items
  const adminItems: DockItem[] = [
    {
      title: "Dashboard",
      icon: <IconDashboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/dashboard",
      authRequired: true,
      roles: ["admin", "supplier"],
    },
    {
      title: "Inventory",
      icon: <IconPackage className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/inventory",
      authRequired: true,
      roles: ["admin", "supplier"],
    },
    {
      title: "Orders",
      icon: <IconHistory className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/admin-orders",
      authRequired: true,
      roles: ["admin", "supplier"],
    },
    {
      title: "Shipments",
      icon: <IconTruck className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/shipments",
      authRequired: true,
      roles: ["admin", "supplier"],
    },
  ];

  // Profile/Account items
  const accountItems: DockItem[] = [
    {
      title: "Profile",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/profile",
      authRequired: true,
    },
    {
      title: "Logout",
      icon: <IconLogout className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
      authRequired: true,
    },
  ];

  // Filter items based on authentication and role
  const filterItems = (items: DockItem[]): DockItem[] => {
    return items.filter((item) => {
      if (item.authRequired && !isAuthenticated) return false;
      if (item.roles && isAuthenticated && (!user || !item.roles.includes(user.role))) return false;
      return true;
    });
  };

  // Combine all items based on user state
  const allItems = [
    ...commonItems,
    ...(!isAuthenticated ? publicItems : []),
    ...filterItems(customerItems),
    ...filterItems(adminItems),
    ...filterItems(accountItems),
  ];

  // Handle logout click
  const handleItemClick = (href: string, title: string) => {
    if (title === "Logout") {
      logout();
    }
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <FloatingDock
        items={allItems.map(item => ({
          ...item,
          onClick: () => handleItemClick(item.href, item.title)
        }))}
        className="flex-col p-4 gap-6"
      />
    </div>
  );
}
