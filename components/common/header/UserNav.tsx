"use client";
import { useSession } from "next-auth/react";
import { LogoutButton } from "../auth/auth";
import ShinyButton from "../../magicui/ShinyButton";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export function UserNav() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const userName = session?.user?.name || "User";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <ShinyButton className="cursor-pointer ">
            <div className="cursor-pointer">
              <AvatarImage
                src={session?.user?.image ? session.user.image : ""}
                alt={session?.user?.name ? session.user.name : ""}
              />
            </div>
          </ShinyButton>
          <AvatarFallback className="border-2 border-red-500">
            {userInitial}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[99998]">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-light leading-none">
              {loading ? "Loading..." : session?.user?.user_name || "..."}
            </p>
            <p className=" text-md font-light  leading-none text-muted-foreground">
              {loading ? "Loading..." : session?.user?.email || "..."}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
