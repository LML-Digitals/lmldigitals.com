"use client";
import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import { SideNavItem } from "@/types/type";
import classNames from "classnames";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export const SideBarMenuItem = ({ item }: { item: SideNavItem }) => {
  const { theme } = useTheme();
  const { toggleCollapse } = useSideBarToggle();

  const pathname = usePathname();

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const inactiveLink = classNames(
    "flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:text-sidebar-muted-foreground  hover:bg-sidebar-muted rounded-md transition duration-200",
    { ["justify-center"]: toggleCollapse }
  );

  const activeLink = classNames(
    "relative flex items-center min-h-[40px] h-full text-sidebar-foreground py-1 px-4 transition-all duration-150 rounded-md transition  bg-gray-100",
    {
      "justify-center w-14 tranisiton-all delay-100 duration-100":
        toggleCollapse,
      "text-black": theme === "dark",
    }
  );

  const navMenuDropdownItem =
    "text-red py-2 px-4 hover:text-sidebar-muted-foreground transition duration-200 rounded-md";

  const dropdownMenuHeaderLink = classNames(inactiveLink, {
    ["bg-sidebar-muted rounded-b-none"]: subMenuOpen,
  });
  return (
    <>
      {item.submenu ? (
        <div className="min-w-[18px]">
          <a
            className={`${dropdownMenuHeaderLink} ${
              pathname.includes(item.path) ? activeLink : ""
            }`}
            onClick={toggleSubMenu}
          >
            <div className="min-w-[20px]">{item.icon}</div>
            {!toggleCollapse && (
              <>
                <span className="ml-3 text-base leading-6 font-semibold">
                  {item.title}
                </span>
                <BsChevronRight
                  className={`${
                    subMenuOpen ? "rotate-90" : ""
                  } ml-auto stroke-2 text-xs`}
                />
              </>
            )}
          </a>
          {subMenuOpen && !toggleCollapse && (
            <div className="bg-sidebar-muted border-l-4">
              <div className="grid gap-y-2 px-10 leading-5 py-3">
                {item.subMenuItems?.map((subItem, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={subItem.path}
                      className={`${navMenuDropdownItem} ${
                        subItem.path === pathname
                          ? " text-sidebar-muted-foreground font-medium "
                          : " text-sidebar-foreground"
                      }`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="hover:pl-1 transition-all   hover:duration-150">
          <Link
            href={item.path}
            className={`${inactiveLink} ${
              item.path === pathname ? activeLink : ""
            }`}
          >
            <div
              className={`absolute left-0 w-1 h-full  ${
                pathname === item.path ? "bg-black w-2 rounded-full h-2" : ""
              }`}
            ></div>
            <div
              className={
                pathname === item.path
                  ? "min-w-[10px] text-black transition-all"
                  : "min-w-[10px]"
              }
            >
              {item.icon}
            </div>
            {!toggleCollapse && (
              <span className="ml-3 leading-4 font-semibold text-sm">
                {item.title}
              </span>
            )}
          </Link>
        </div>
      )}
    </>
  );
};
