import { Sidebar } from "@/components/sidebar"
import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/pages/projects"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0D0D0D]">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden pb-20 md:pb-0">
        <Navigation />
        <div className="flex-1 overflow-y-auto scrollbar-custom">
          <Projects />
        </div>
      </main>
    </div>
  )
}
