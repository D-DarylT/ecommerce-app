
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout } from "../store/userSlice";
import { FaUserCircle } from "react-icons/fa";

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


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [showAccount, setShowAccount] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  // Simulate registration state (in real app, use user state)
  const [registered, setRegistered] = useState(false);

  // Hide navbar on scroll down, show on scroll up
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300",
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          {/*<div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Landing</HoveredLink>
          </div>*/}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Catalog">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/catalog">All Products</HoveredLink>
            <HoveredLink href="/product/1">Product Detail</HoveredLink>
            <HoveredLink href="/cart">Cart</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Dashboard">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/dashboard">User Dashboard</HoveredLink>
            <HoveredLink href="/supplier">Supplier Portal</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/testimonials">Testimonials</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
        {/* Auth logic */}
        {!user.isAuthenticated ? (
          <div className="relative flex items-center gap-4">
            <MenuItem setActive={setActive} active={active} item="Auth">
              <div className="flex flex-col space-y-4 text-sm">
                <a
                  href="/register"
                  className="cursor-pointer text-neutral-700 dark:text-neutral-200 hover:text-cyan-400 px-2 py-1 rounded transition font-semibold flex items-center gap-2"
                >
                  Register
                </a>
                <HoveredLink href="/login">Login</HoveredLink>
              </div>
            </MenuItem>
          </div>
        ) : (
          <MenuItem setActive={setActive} active={active} item="Account">
            <div className="flex flex-col space-y-4 text-sm">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400 text-gray-900 font-bold hover:bg-cyan-300 transition-all"
                onClick={() => setShowAccount((v) => !v)}
              >
                <FaUserCircle className="text-2xl" />
                {user.user?.name || "Account"}
              </button>
              {showAccount && (
                <div className="mt-2 p-4 bg-gray-900 rounded-lg shadow-lg text-cyan-200">
                  <div className="mb-2 font-bold">Account Details</div>
                  <div>Name: {user.user?.name || "User"}</div>
                  <div>Email: {user.user?.email || "user@email.com"}</div>
                  <button
                    className="mt-4 px-4 py-2 rounded bg-cyan-400 text-gray-900 font-bold hover:bg-cyan-300 transition-all"
                    onClick={() => dispatch(logout())}
                  >Logout</button>
                </div>
              )}
            </div>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default Navbar;
