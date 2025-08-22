import { Separator } from "app/components/ui/separator"
import { SidebarTrigger } from "app/components/ui/sidebar"

export function SiteHeader({ title }: {
  title: string;
}) {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b border-gray-700 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 hover:bg-primary" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4 bg-gray-700"
        />
        <h1 className="text-base font-medium">{title}</h1>

      </div>
    </header>
  )
}
