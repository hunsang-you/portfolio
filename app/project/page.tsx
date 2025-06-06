"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import ProjectDetail from "@/components/project-detail"

export default function ProjectPage() {
  useEffect(() => {
    // URL에 해시가 있으면 해당 위치로 스크롤, 없으면 맨 위로
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }, 100) // 페이지 로딩 후 약간의 지연
      }
    } else {
      // 해시가 없으면 맨 위로 스크롤
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">프로젝트 상세</h1>
          <p className="text-xl text-muted-foreground">각 프로젝트의 개발 과정과 기술적 도전을 자세히 소개합니다</p>
        </div>
        <ProjectDetail />
      </main>
    </div>
  )
}
