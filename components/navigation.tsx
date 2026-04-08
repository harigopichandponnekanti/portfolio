"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "About", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed md:static bottom-0 left-0 right-0 md:relative bg-gradient-to-r from-[#1E1E1E] to-[#2C2C2C] border-b border-[#333333] px-4 md:px-8 py-4 z-50">
      <div className="flex gap-4 md:gap-8 flex-wrap justify-center md:justify-start">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-xs md:text-sm font-medium transition-colors pb-2 border-b-2 ${
              pathname === item.href
                ? "text-[#667eea] border-[#667eea]"
                : "text-[#6c6b70] border-transparent hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
