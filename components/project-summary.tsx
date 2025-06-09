"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { projects } from "@/constants/projects";

// 미디어 타입 확인 함수들
function isGifFile(src: string | any): boolean {
  if (typeof src === "string") {
    return src.toLowerCase().endsWith(".gif");
  }
  if (src && typeof src === "object" && src.src) {
    return src.src.toLowerCase().endsWith(".gif");
  }
  return false;
}

function isVideoFile(src: string | any): boolean {
  if (typeof src === "string") {
    return src.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/i) !== null;
  }
  if (src && typeof src === "object" && src.src) {
    return src.src.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/i) !== null;
  }
  return false;
}

function getMediaSrc(src: string | any): string {
  if (typeof src === "string") {
    return src;
  }
  if (src && typeof src === "object" && src.src) {
    return src.src;
  }
  return ""; // 빈 문자열 반환
}

export default function ProjectSummary() {
  const titleAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const buttonAnimation = useScrollAnimation();

  return (
    <div className="space-y-6">
      <div
        ref={titleAnimation.ref}
        className={`text-center transition-all duration-1000 ${
          titleAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight">주요 프로젝트</h2>
        <p className="text-muted-foreground mt-2">
          지금까지 진행한 프로젝트들을 소개합니다
        </p>
      </div>

      <div
        ref={gridAnimation.ref}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={`overflow-hidden transition-all duration-500 ${
              gridAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <Link href={`/project#project-${project.id}`} className="block">
              <div className="aspect-video relative">
                {isVideoFile(project.image[0]) ? (
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    >
                      <source
                        src={getMediaSrc(project.image[0])}
                        type="video/mp4"
                      />
                    </video>
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      VIDEO
                    </div>
                  </div>
                ) : isGifFile(project.image[0]) ? (
                  <div className="relative w-full h-full">
                    <img
                      src={getMediaSrc(project.image[0]) || ""}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      GIF
                    </div>
                  </div>
                ) : (
                  <Image
                    src={project.image[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Link>
            <CardContent className="pt-0">
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </Link>
                </Button>
                {project.redirect && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                    asChild
                  >
                    <Link
                      href={project.redirect}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      연결
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div
        ref={buttonAnimation.ref}
        className={`text-center transition-all duration-1000 delay-600 ${
          buttonAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <Button asChild>
          <Link href="/project">모든 프로젝트 보기</Link>
        </Button>
      </div>
    </div>
  );
}
