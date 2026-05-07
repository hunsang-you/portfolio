"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import ProjectDetail from "@/components/project-detail";

export default function ProjectPage() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            프로젝트 상세
          </h1>
          <p className="text-xl text-muted-foreground">
            AI 기능 구현, 프론트엔드 개발, 협업 과정에서 배운 내용을 정리했습니다.
          </p>
        </div>
        <ProjectDetail />
      </main>
    </div>
  );
}
