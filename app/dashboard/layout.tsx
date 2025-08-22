import { AppSidebar } from "app/components/app-sidebar"
import { ChartAreaInteractive } from "app/components/chart-area-interactive"
import { DataTable } from "app/components/data-table"
import { SectionCards } from "app/components/section-cards"
import { SiteHeader } from "app/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "app/components/ui/sidebar"

import data from "./data.json"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="sidebar" className="border-gray-700" />
      <SidebarInset>
        <SiteHeader title="Dashboard" />
        <div className="flex flex-1 flex-col bg-black">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
