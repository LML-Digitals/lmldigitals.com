"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <Button
      variant={"ghost"}
      className="hover:bg-transparent font-light text text-gray-400 p-0 m-0 hover:text-gray-400 hover:underline hover:underline-offset-1"
      onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
    >
      Portal
    </Button>
  );
};

export const LogoutButton = () => {
  const handleSignOut = () => {
    const callbackUrl = `${window.location.origin}/`;
    signOut({ callbackUrl });
  };

  return (
    <Button variant={"destructive"} onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};
