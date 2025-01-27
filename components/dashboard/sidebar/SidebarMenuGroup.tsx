"use client";

import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import { SideNavItemGroup } from "@/types/type";
import classNames from "classnames";
import { SideBarMenuItem } from "./SidebarMenuItem";
import { useEffect, useState } from "react";
import { fetchSession } from "@/lib/session";

const SideBarMenuGroup = ({ menuGroup }: { menuGroup: SideNavItemGroup }) => {
  const { toggleCollapse } = useSideBarToggle();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInSession: any = await fetchSession();

        setUser(userInSession.user);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchData();
  }, []);

  const menuGroupTitleSyle = classNames(
    "py-4 tracking-[.1rem] font-medium uppercase text-sm text-sidebar-foreground ",
    {
      "text-center": toggleCollapse,
    }
  );

  return (
    <>
      <h3 className={menuGroupTitleSyle}>
        {!toggleCollapse ? menuGroup.title : "..."}
      </h3>
      {user &&
        menuGroup.menuList?.map((item, index) => {
          if (item.role.includes(user.role) || item.role.includes("all")) {
            return <SideBarMenuItem key={index} item={item} />;
          }
          return null;
        })}
    </>
  );
};

export default SideBarMenuGroup;
