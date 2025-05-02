import Link from "next/link";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

interface NavbarItem {
  href: string;
  label: React.ReactNode;
}

interface MobileNavProps {
  items: NavbarItem[];
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const MobileNav = ({ items, isOpen, onOpenChange }: MobileNavProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                onClick={() => onOpenChange(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t">
            <Link
              href="/sign-in"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            onClick={() => onOpenChange(false)}
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
