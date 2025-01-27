"use client";
import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Calculator, ChevronsLeft, ChevronsRight } from "lucide-react";
import { SessionProvider } from "next-auth/react";
import { useTheme } from "next-themes";
import { GoMegaphone } from "react-icons/go";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { UserNav } from "./UserNav";
import Link from "next/link";

function Header() {
  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
  const { theme } = useTheme();

  const handleCollapseSideBar = () => {
    invokeToggleCollapse();
  };

  const headerVariants = {
    expanded: { paddingLeft: "1rem" },
    collapsed: { paddingLeft: "1rem" },
  };

  const headerStyle = classNames("bg-sidebar  z-50 px-4 shadow-sm", {
    ["sm:pl-[0rem]"]: !toggleCollapse,
    ["sm:pl-[5.6rem]"]: toggleCollapse,
  });

  return (
    <motion.header
      initial={false}
      animate={toggleCollapse ? "collapsed" : "expanded"}
      variants={headerVariants}
      transition={{ duration: 0.3 }}
      className={headerStyle}
    >
      <div className="h-16 flex items-center justify-between">
        <div>
          {toggleCollapse ? (
            <ChevronsLeft
              size={25}
              className={
                theme === "light"
                  ? "text-black hover:scale-110 hover:delay-150 hover:duration-150 cursor-pointer transition-all"
                  : "text-white hover:scale-110 hover:delay-150 hover:duration-150 cursor-pointer transition-all"
              }
              onClick={handleCollapseSideBar}
            />
          ) : (
            <ChevronsRight
              size={25}
              className={
                theme === "light"
                  ? "text-black hover:scale-110 hover:delay-150 hover:duration-150 cursor-pointer transition-all"
                  : "text-white hover:scale-110 hover:delay-150 hover:duration-150 cursor-pointer transition-all"
              }
              onClick={handleCollapseSideBar}
            />
          )}
        </div>

        <div className="flex items-center gap-8">
          <ThemeSwitcher />
          <GoMegaphone className="cursor-pointer" />

          <SessionProvider>
            <Link href={"/dashboard/calculator"}>
              <Calculator />
            </Link>
            <UserNav />
          </SessionProvider>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
