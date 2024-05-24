import React from "react";
import Link from "next/link";
import MobileSidebar from "./Mobile-sidebar";
import UserInfo from "./UserInfo";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });


const Navbar = () => {
  return (
  <div className="flex flex-col items-center justify-center p-4 bg-[#111827] text-white min-h-[95px] rounded-b-2xl drop-shadow-xl relative">
    <MobileSidebar />
    <Link href="/dashboard" className="flex items-center gap-6">
      <div className="w-16 h-16 relative">
        <Image fill alt="Logo" src="/ezraai.png" />
      </div>
      <h1 className={cn("text-2xl font-bold", montserrat.className)}>
        Ezra AI
      </h1>
    </Link>
    <div className="lg:hidden absolute top-4 right-4">
      <UserInfo />
    </div>
  </div>
  );
};

export default Navbar;
