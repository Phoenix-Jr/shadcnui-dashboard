"use client";
import React, { useState } from "react";
import { Nav } from "./nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronRight,
  File,
  Inbox,
  LayoutDashboard,
  MessagesSquare,
  Search,
  Send,
  Settings,
  ShoppingCart,
  Trash2,
  Users2,
  UsersRound,
} from "lucide-react";
import { TooltipProvider } from "./tooltip";
import { Button } from "./button";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

type Props = {};

export default function SideNavBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const onlyWidth = useWindowWidth();

  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <TooltipProvider>
      <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
        {!mobileWidth && (
          <div className="absolute right-[-20px] top-7">
            <Button
              variant="secondary"
              className="rounded-full pt-2"
              onClick={toggleSidebar}
            >
              <ChevronRight />
            </Button>
          </div>
        )}
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "Dashboard",
              href: "/",
              icon: LayoutDashboard,
              variant: "default",
            },
            {
              title: "Users",
              href: "/users",
              icon: UsersRound,
              variant: "ghost",
            },
            {
              title: "Orders",
              href: "/orders",
              icon: ShoppingCart,
              variant: "ghost",
            },
            {
              title: "Settings",
              href: "/settings",
              icon: Settings,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </TooltipProvider>
  );
}
