"use client"

import * as React from "react"
import {
  BarChart3,
  Users,
  MessageCircle,
  Heart,
  Repeat2,
  Eye,
  TrendingUp,
  Calendar,
  Hash,
  Settings,
  ChevronUp,
  User2,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Gilbert Sahumada",
    email: "gilbert@example.com",
    avatar: "/avatars/gilbert.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: BarChart3,
    },
    {
      title: "Social Graph",
      url: "/social-graph",
      icon: Users,
    },
    {
      title: "Interactions",
      url: "/interactions",
      icon: MessageCircle,
      items: [
        {
          title: "Mentions",
          url: "/interactions/mentions",
        },
        {
          title: "Replies",
          url: "/interactions/replies",
        },
        {
          title: "DMs",
          url: "/interactions/dms",
        },
      ],
    },
    {
      title: "Engagement",
      url: "/engagement",
      icon: Heart,
      items: [
        {
          title: "Likes",
          url: "/engagement/likes",
        },
        {
          title: "Retweets",
          url: "/engagement/retweets",
        },
        {
          title: "Comments",
          url: "/engagement/comments",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: TrendingUp,
      items: [
        {
          title: "Tweet Performance",
          url: "/analytics/tweets",
        },
        {
          title: "Follower Growth",
          url: "/analytics/followers",
        },
        {
          title: "Reach & Impressions",
          url: "/analytics/reach",
        },
      ],
    },
    {
      title: "Content",
      url: "/content",
      icon: Hash,
      items: [
        {
          title: "Top Tweets",
          url: "/content/top-tweets",
        },
        {
          title: "Hashtags",
          url: "/content/hashtags",
        },
        {
          title: "Media",
          url: "/content/media",
        },
      ],
    },
    {
      title: "Schedule",
      url: "/schedule",
      icon: Calendar,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BarChart3 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Twitter Analytics</span>
                  <span className="truncate text-xs">Social Metrics</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/profile">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <User2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{data.user.name}</span>
                  <span className="truncate text-xs">{data.user.email}</span>
                </div>
                <ChevronUp className="ml-auto size-4" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}