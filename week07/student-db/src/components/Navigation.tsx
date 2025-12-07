//@Author: Sebastian Hilger

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navigation component with menu links
 * Highlights the active page
 */
export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Students" },
    { href: "/filter", label: "Filter" },
    { href: "/imprint", label: "Imprint" },
  ];

  return (
    <nav>
      <ul className="flex space-x-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded transition-colors ${
                  isActive
                    ? "bg-white text-blue-600 font-semibold"
                    : "hover:bg-blue-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
