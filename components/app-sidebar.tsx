"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Coins,
  Users,
  Activity,
  MessageSquare,
  Twitter,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Paaavam",
    email: "Paavam@CryptoDAO.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "CryptoDAO",
      logo: Coins,
      plan: "Pro Plan",
    },
    {
      name: "NFT Community",
      logo: Users,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Activity,
      isActive: true,
      items: [
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
        {
          title: "Performance",
          url: "/dashboard/performance",
        },
      ],
    },
    {
      title: "Bot Management",
      url: "/bots",
      icon: Bot,
      items: [
        {
          title: "Telegram Bots",
          url: "/bots/telegram",
        },
        {
          title: "Twitter Bots (Soon)",
          url: "/bots/twitter",
        },
      ],
    },
    {
      title: "Community",
      url: "/community",
      icon: Users,
      items: [
        {
          title: "Members",
          url: "/community/members",
        },
        {
          title: "Engagement",
          url: "/community/engagement",
        },
      ],
    },
    {
      title: "Rewards",
      url: "/rewards",
      icon: Coins,
      items: [
        {
          title: "Distribution Rules",
          url: "/rewards/rules",
        },
        {
          title: "Transaction History",
          url: "/rewards/history",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Telegram Engagement",
      url: "/projects/telegram-engagement",
      icon: MessageSquare,
    },
    {
      name: "Twitter Growth",
      url: "/projects/twitter-growth",
      icon: Twitter,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
