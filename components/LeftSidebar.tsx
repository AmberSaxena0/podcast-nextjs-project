"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const pathName = usePathname();
  const route = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href={"/"}
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image
            src={require("../public/icons/logo.svg")}
            alt={"logo"}
            width={23}
            height={27}
          />

          <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">
            VoiceVibes
          </h1>
        </Link>
        {sidebarLinks.map((item, index) => {
          const isActive = pathName === item.route;
          return (
            <Link
              key={index}
              href={item.route}
              className={cn(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
                { "bg-nav-focus border-r-4 border-orange-1": isActive }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={30}
                height={30}
              />
              <p>{item.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
