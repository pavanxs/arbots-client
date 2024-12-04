import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-background via-blue-950/10 to-blue-900/20">
        <div className="container">
          <SidebarTrigger />
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
