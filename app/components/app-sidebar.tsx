"use client"

import * as React from "react"
import {
  IconAward,
  IconBook2,
  IconCamera,
  IconCertificate,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileInvoice,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconLayoutDashboard,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconUserStar,
} from "@tabler/icons-react"

import { NavDocuments } from "app/components/nav-documents"
import { NavMain } from "app/components/nav-main"
import { NavSecondary } from "app/components/nav-secondary"
import { NavUser } from "app/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "app/components/ui/sidebar"
import Image from "next/image"
import { useAuth } from "@/context/auth-context" 

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconLayoutDashboard,
    },
    {
      title: "Estudantes",
      url: "/students",
      icon: IconUsers,
    },
    {
      title: "Cursos",
      url: "/dashboard/courses",
      icon: IconBook2,
    },
    {
      title: "Faturas",
      url: "/dashboard/invoices",
      icon: IconFileInvoice,
    },
    {
      title: "Equipe",
      url: "/dashboard/team",
      icon: IconUserStar,
    },
    {
      title: "Certificados",
      url: "/dashboard/certificates",
      icon: IconCertificate,
    },
    {
      title: "Emblemas",
      url: "/dashboard/badgets",
      icon: IconAward,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth()
  return (
    <Sidebar collapsible="offcanvas" {...props} >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="!pl-0"
            >
              <a href="#">
                <Image src="/logo.svg" alt="SKHOLÉ" width={128} height={128} />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{
          name: user?.role || "Usuário",
          email: user?.email || "email@example.com",
          avatar: user?.avatar || "/avatars/avatar-1.png",
        }} />
      </SidebarFooter>
    </Sidebar>
  )
}
