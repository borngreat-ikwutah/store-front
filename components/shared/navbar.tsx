"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { NavbarItems } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNav from "./mobile-nav";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <nav className="h-20 border-b justify-between font-medium bg-white flex items-center">
      <Link href="/" className="pl-6">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Funroad
        </span>
      </Link>

      <MobileNav
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        items={NavbarItems}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {NavbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.label}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex h-full">
        <Button
          asChild
          variant="secondary"
          className="border-l border-b-0 border-t-0 border-r h-full bg-white px-12 hover:bg-pink-400 transition-colors text-lg rounded-none"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-l border-b-0 border-t-0  h-full bg-black text-white px-12 hover:bg-pink-400 hover:text-black transition-colors text-lg rounded-none"
        >
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>

      <div className="lg:hidden flex items-center justify-center">
        <Button
          variant="ghost"
          onClick={() => setIsSidebarOpen(true)}
          className="size-12 border-transparent bg-white"
        >
          <MenuIcon className="size-[36px]" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
