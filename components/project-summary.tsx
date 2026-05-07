"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import { projects } from "@/constants/projects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function isGifFile(src: string | any): boolean {
  if (typeof src === "string") return src.toLowerCase().endsWith(".gif");
  if (src && typeof src === "object" && src.src) {
    return src.src.toLowerCase().endsWith(".gif");
  }
  return false;
}

function isVideoFile(src: string | any): boolean {
  const pattern = /\.(mp4|webm|ogg|mov)$/i;
  if (typeof src === "string") return pattern.test(src);
  if (src && typeof src === "object" && src.src) return pattern.test(src.src);
  return false;
}

function getMediaSrc(src: string | any): string {
  if (typeof src === "string") return src;
  if (src && typeof src === "object" && src.src) return src.src;
  return "";
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
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight">주요 프로젝트</h2>
        <p className="mt-2 text-muted-foreground">
          AI 서비스 구현 경험과 프론트엔드 프로젝트 경험을 함께 정리했습니다.
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
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 160}ms` }}
          >
            <Link href={`/project#project-${project.id}`} className="block">
              <div className="relative aspect-video bg-muted/30">
                {isVideoFile(project.image[0]) ? (
                  <video
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source src={getMediaSrc(project.image[0])} type="video/mp4" />
                  </video>
                ) : isGifFile(project.image[0]) ? (
                  <img
                    src={getMediaSrc(project.image[0])}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
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
                <CardTitle className="text-lg transition-colors hover:text-primary">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 6).map((tag) => (
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
                    <Github className="mr-1 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                {project.redirect && (
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href={project.redirect}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-1 h-4 w-4" />
                      서비스 보기
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
        className={`text-center transition-all delay-600 duration-1000 ${
          buttonAnimation.isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <Button asChild>
          <Link href="/project">모든 프로젝트 보기</Link>
        </Button>
      </div>
    </div>
  );
}
