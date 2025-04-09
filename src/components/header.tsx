"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathName = usePathname();
  const LinkData = [
    {
      path: "/performance",
      text: "Performance",
    },
    {
      path: "/reliability",
      text: "Reliability",
    },
    {
      path: "/scale",
      text: "Scale",
    },
  ];

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between contianer mx-auto text-white p-8">
        <Link
          className={`text-3xl font-bold ${
            pathName === "/" ? "text-purple-600" : ""
          }`}
          href={"/"}
        >
          Home
        </Link>
        <div className="space-x-4 text-xl">
          {LinkData.map((item) => {
            return (
              <Link
                key={item.path}
                href={item.path}
                className={pathName === item.path ? "text-purple-500" : ""}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
