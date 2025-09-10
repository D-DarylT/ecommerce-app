"use client";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../store/userSlice";
// import Image from "next/image"; // Removed. Use <img> tag instead.

const NAV_LINKS = [
  { label: "Welcome", href: "/" },
  { label: "Power Stations", href: "/products?cat=power-stations" },
  { label: "Solar Arrays", href: "/products?cat=solar-arrays" },
  { label: "Storage Solutions", href: "/products?cat=storage" },
  { label: "My Energy", href: "/dashboard" },
  { label: "Client Stories", href: "/testimonials" },
  { label: "The Architects", href: "/team" },
  { label: "Our Journey", href: "/about" },
  { label: "Get in Touch", href: "/contact" },
];

const NavbarMenu = () => {
  const user = useSelector((state: RootState) => state.user);
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <header className="w-full flex justify-center">
      <nav className="flex w-full max-w-7xl items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500" />
          <span className="text-lg font-bold tracking-wide">NexShop</span>
        </div>
        <div className="flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-1 text-neutral-200 hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}
          {/* Cart icon with badge */}
          <div className="relative ml-4">
            <a href="/cart">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cyan-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 0 0 6.6 17h10.8a1 1 0 0 0 .95-.68L21 13M7 13V6h13" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-fuchsia-500 text-xs text-white rounded-full px-1.5 py-0.5">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </a>
          </div>
          {/* Login/User icon logic */}
          {!user.isAuthenticated ? (
            <div className="ml-6 flex gap-2">
              <a
                href="/login"
                className="px-4 py-2 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition shadow-lg"
              >
                Login
              </a>
              <a
                href="/register"
                className="px-4 py-2 rounded-full bg-fuchsia-600 text-white font-semibold hover:bg-fuchsia-700 transition shadow-lg"
              >
                Register
              </a>
            </div>
          ) : (
            <div className="ml-6 flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                {user.user ? user.user.name[0].toUpperCase() : "U"}
              </div>
              <button
                onClick={() => dispatch(logout())}
                className="text-xs text-neutral-400 hover:text-cyan-400 transition"
                title="Logout"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavbarMenu;
import { motion } from "motion/react";
import type { AnimationGeneratorType } from "motion";

const transition = {
  type: "spring" as AnimationGeneratorType,
  mass: 0.5,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
      <a href={href} className="flex items-center gap-4 no-underline hover:bg-neutral-100 dark:hover:bg-neutral-900 p-2 rounded-lg transition">
        <img
          src={src}
          width={140}
          height={70}
          alt={title}
          className="shrink-0 rounded-md shadow-2xl"
        />
        <div>
          <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
            {typeof title === "string" ? title : ""}
          </h4>
          <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
            {typeof description === "string" ? description : ""}
          </p>
        </div>
      </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};
