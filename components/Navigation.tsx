"use client";
import { NavLinks } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation: React.FC = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState(path);

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
      setPrevPath(path);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      const timeout = setTimeout(() => setIsRouting(false), 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[50] w-[90%] md:w-[50%] max-h-[80px] flex justify-between items-center bg-black border border-white rounded-full px-4 py-4"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link}>
          <nav.icon
            className={`w-[24px] h-[24px] transition-colors duration-300 ${
              path === nav.link ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
