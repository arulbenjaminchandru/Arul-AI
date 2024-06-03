"use client";

import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const technologies = [
  // {
  //   title: "React",
  //   image: "/tech/react.png",
  //   version: "18.2",
  //   purpose: "User Interface",
  // },
  // {
  //   title: "NextJS",
  //   image: "/tech/nextJS_2.png",
  //   version: "13.4",
  //   purpose: "React's Framework",
  // },
  // {
  //   title: "TypeScript",
  //   image: "/tech/typescript.png",
  //   version: "5.1",
  //   purpose: "Type Safety",
  // },
  // {
  //   title: "Tailwind CSS",
  //   image: "/tech/tailwind_2.png",
  //   version: "3.3",
  //   purpose: "CSS Enchancer",
  // },
  // {
  //   title: "Shadcn/ui",
  //   image: "/tech/shadcn.png",
  //   version: "0.3",
  //   purpose: "Comps Lib",
  // },
  // {
  //   title: "Clerk",
  //   image: "/tech/clerk.png",
  //   version: "4.22",
  //   purpose: "User Auth",
  // },
  // {
  //   title: "Prisma",
  //   image: "/tech/prisma.png",
  //   version: "5.0",
  //   purpose: "ORM (DB)",
  // },
  // {
  //   title: "Zod",
  //   image: "/tech/zod.png",
  //   version: "3.21",
  //   purpose: "TS Enhancer",
  // },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        An Open AI wrapper for code, chat and image Generation
      </h2>
    </div>
  );
};

export default LandingContent;
