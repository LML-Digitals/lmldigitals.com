"use client";
import { SIDENAV_ITEMS } from "@/components/dashboard/sidebar/SideNavItems";
import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import logo from "@/public/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideBarMenuGroup from "./SidebarMenuGroup";

export const SideBar = () => {
  const [mounted, setMounted] = useState(false);
  const { toggleCollapse } = useSideBarToggle();

  const asideVariants = {
    expanded: { width: "14rem" },
    collapsed: { width: "5.4rem" },
  };

  useEffect(() => setMounted(true), []);

  return (
    <motion.aside
      initial={false}
      animate={toggleCollapse ? "collapsed" : "expanded"}
      variants={asideVariants}
      transition={{ duration: 0.2 }}
      className="sidebar h-full shadow-sm shadow-slate-500/40"
    >
      <div className="relative flex flex-col h-full">
        <div className="sidebar-top flex items-center px-3.5 py-4 fixed z-50 w-full border-b mb-2">
          <div className="flex items-center gap-4 px-0">
            {mounted && (
              <Link href={"/dashboard"}>
                <Image
                  src={logo}
                  width={45}
                  height={45}
                  alt="logo-portal"
                  className="hover:scale-110 hover:delay-150 hover:duration-150 transition-all rounded-xl"
                />
              </Link>
            )}
            {!toggleCollapse && (
              <h1 className="font-bold text-base tracking-wide">Portal</h1>
            )}
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden transition duration-300 ease-in-out mt-[4rem]">
          <div className="flex flex-col gap-1 px-4">
            {SIDENAV_ITEMS.map((item, idx) => (
              <SideBarMenuGroup key={idx} menuGroup={item} />
            ))}
          </div>
        </nav>
      </div>
    </motion.aside>
  );
};
