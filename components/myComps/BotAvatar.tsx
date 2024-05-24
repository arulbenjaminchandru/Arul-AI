import React from "react";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  const { user } = useUser();
  return (
    <h1></h1>
  );
};

export default BotAvatar;
