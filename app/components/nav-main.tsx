"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "app/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "app/components/ui/sidebar"
import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className={
              item.title === "Dashboard" ? "bg-primary text-primary-foreground hover:bg-primary/10 hover:text-green-300 active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear py-1.5 rounded-[4px]" : ""
            }>
              <SidebarMenuButton tooltip={item.title} asChild >
                <Link href={item.url}>

                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>

              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
