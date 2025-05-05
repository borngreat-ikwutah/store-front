
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


const Footer = () => {
  return (
    <div className={cn("flex items-start text-base font-medium p-6 border-t", inter.className)}>
       {new Date().getFullYear()} © All rights reserved. Funroad Inc
    </div>
  )
}

export default Footer