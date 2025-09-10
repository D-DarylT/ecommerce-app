import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { IconHome,IconTerminal2,IconNewSection,
  IconExchange,IconBrandX,IconBrandGithub,
 } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import * as React from "react";
import { useRef, useState } from "react";



import { DockItem } from "./floating-dock-types";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}


export function FloatingDock({
  items,
  mobileClassName,
  className,
}: {
  items: DockItem[];
  mobileClassName?: string;
  className?: string;
}): React.JSX.Element {
  return (
    <>
      <FloatingDockMobile items={items} className={mobileClassName} />
      <FloatingDockDesktop items={items} className={className} />
    </>
  );
}

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  // Track mouse position globally for magnetic effect
  const mouseY = useMotionValue(Infinity);
  const dockRef = useRef<HTMLDivElement>(null);

  // Listen for mousemove on window for full magnetic effect
  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseY]);

  return (
    <motion.div
      ref={dockRef}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "fixed top-1/2 left-4 z-50 -translate-y-1/2 flex-col items-center gap-y-4 rounded-2xl bg-gray-50 px-2 py-4 hidden md:flex dark:bg-neutral-900 shadow-lg",
        className,
      )}
    >
      {items.map((item, idx) => (
        <IconContainer mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
  }: {
    mouseY: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    // Calculate distance from cursor to icon center
    const distance = useTransform(mouseY, (val) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!bounds) return Infinity;
      const centerY = bounds.y + bounds.height / 2;
      return Math.abs(val - centerY);
    });

    // Proximity-based scaling: 80px when close, 40px when far
    const size = useTransform(distance, [0, 150], [80, 40]);
    const iconSize = useTransform(distance, [0, 150], [40, 20]);

    // Spring physics for natural motion
    const springSize = useSpring(size, {
      mass: 0.25,
      stiffness: 220,
      damping: 22,
    });
    const springIconSize = useSpring(iconSize, {
      mass: 0.22,
      stiffness: 210,
      damping: 20,
    });

    // Tooltip spring/fade
    // Minimalist, context-aware tooltip with elegant animation
    return (
      <NavLink to={href} end>
        <motion.div
          ref={ref}
          style={{ width: springSize, height: springSize }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={
            `relative flex aspect-square items-center justify-center rounded-full transition-all
            bg-gray-200 dark:bg-neutral-800
            ${hovered ? 'scale-110 shadow-2xl bg-cyan-100 dark:bg-cyan-900' : 'scale-100 shadow-lg'}
            `
          }
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 2, x: "-50%" }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute -top-8 left-1/2 w-fit rounded-lg border px-2 py-0.5 text-xs whitespace-pre pointer-events-none shadow-lg"
                style={{
                  backgroundColor: 'var(--tooltip-bg, #e0f2fe)',
                  borderColor: 'var(--tooltip-border, #38bdf8)',
                  color: 'var(--tooltip-text, #0e7490)',
                }}
                // Theme-adaptive colors
                data-theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
              >
                {title}
                <style>{`
                  [data-theme="light"].absolute {
                    background-color: #e0f2fe;
                    border-color: #38bdf8;
                    color: #0e7490;
                  }
                  [data-theme="dark"].absolute {
                    background-color: #0e7490;
                    border-color: #0e7490;
                    color: #e0f2fe;
                  }
                `}</style>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            style={{ width: springIconSize, height: springIconSize }}
            className={
              `flex items-center justify-center transition-all
              ${hovered ? 'text-cyan-500 dark:text-cyan-300' : 'text-neutral-500 dark:text-neutral-300'}`
            }
          >
            {icon}
          </motion.div>
        </motion.div>
      </NavLink>
    );
}
