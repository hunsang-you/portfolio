import Navbar from "@/components/navbar"
import IntroduceSection from "@/components/introduce-section"
import ProjectSummary from "@/components/project-summary"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <IntroduceSection />
        <ProjectSummary />
      </main>
    </div>
  )
}
