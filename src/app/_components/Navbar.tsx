// components/shared/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../public/logo.png"
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-black dark:bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 border-b border-white/10 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <picture>
            <img src={logo.src} alt="" className="h-10" />
          </picture>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ name, href }) => (
            <div className="relative group" key={name}>
              <Link
                href={href}
                className={
                  pathName === href
                    ? "border-b-2 border-sky-500 dark:text-white"
                    : "border-b-0  dark:text-white hover:text-sky-500 dark:hover:text-green-300"
                }
              >
                {name}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black dark:bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm border-b"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
