"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();

  const logoutHandler = async () => {
    await authClient.signOut();

    router.push("/");
  };
  return (
    <Button onClick={logoutHandler} variant={"outline"}>
      Logout
    </Button>
  );
};
