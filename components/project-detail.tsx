"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Calendar, ExternalLink, Github, Globe, Users } from "lucide-react";
import { projects } from "@/constants/projects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function isGifFile(src: string | any): boolean {
  if (typeof src === "string") return src.toLowerCase().endsWith(".gif");
  if (src && typeof src === "object" && src.src) {
    return src.src.toLowerCase().endsWith(".gif");
  }
  return false;
}

function getMediaSrc(src: string | any): string {
  if (typeof src === "string") return src;
  if (src && typeof src === "object" && src.src) return src.src;
  return "";
}

function openImageInNewTab(src: string, alt: string) {
  const newWindow = window.open("", "_blank");
  if (!newWindow) return;

  newWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${alt}</title>
        <style>
          body {
            margin: 0;
            padding: 20px;
            background: #050505;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: system-ui, -apple-system, sans-serif;
          }
          img {
            max-width: 96vw;
            max-height: 92vh;
            object-fit: contain;
            border-radius: 8px;
          }
          button {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border: 0;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
          }
        </style>
      </head>
      <body>
        <button onclick="window.close()">x</button>
        <img src="${src}" alt="${alt}" />
      </body>
    </html>
  `);
  newWindow.document.close();
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const animation = useScrollAnimation();
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || project.image.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHovered) api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isHovered, project.image.length]);

  return (
    <div className="flex justify-center">
      <Card
        id={`project-${project.id}`}
        ref={animation.ref}
        className={`w-[760px] max-w-full overflow-hidden scroll-mt-24 transition-all duration-1000 ${
          animation.isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="relative h-[320px] bg-muted/30">
          {project.image.length > 1 ? (
            <Carousel
              className="h-full w-full"
              opts={{ loop: true }}
              setApi={setApi}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CarouselContent>
                {project.image.map((media, mediaIndex) => (
                  <CarouselItem key={mediaIndex}>
                    <button
                      type="button"
                      className="group relative h-[320px] w-full cursor-pointer"
                      onClick={() =>
                        openImageInNewTab(
                          getMediaSrc(media),
                          `${project.title} 이미지 ${mediaIndex + 1}`,
                        )
                      }
                    >
                      {isGifFile(media) ? (
                        <img
                          src={getMediaSrc(media)}
                          alt={`${project.title} 이미지 ${mediaIndex + 1}`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <Image
                          src={media || "/placeholder.svg"}
                          alt={`${project.title} 이미지 ${mediaIndex + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 760px"
                        />
                      )}
                      <div className="absolute right-3 top-3 rounded-full bg-background/80 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          ) : (
            <button
              type="button"
              className="group relative h-full w-full cursor-pointer"
              onClick={() =>
                openImageInNewTab(getMediaSrc(project.image[0]), project.title)
              }
            >
              <Image
                src={project.image[0] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 760px"
              />
              <div className="absolute right-3 top-3 rounded-full bg-background/80 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                <ExternalLink className="h-4 w-4" />
              </div>
            </button>
          )}
        </div>

        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <CardTitle className="mb-3 text-2xl">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                {project.duration && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.duration}
                  </div>
                )}
                {project.team && (
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {project.team}
                  </div>
                )}
              </div>
            </div>
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
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="leading-relaxed text-muted-foreground">
            {project.detailedDescription || project.description}
          </p>

          {project.role && (
            <div>
              <h4 className="mb-2 font-semibold">담당 역할</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.role}
              </p>
            </div>
          )}

          <div>
            <h4 className="mb-2 font-semibold">사용 기술</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {project.features && (
            <div>
              <h4 className="mb-2 font-semibold">맡은 작업</h4>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start text-sm text-muted-foreground"
                  >
                    <span className="mr-2 text-primary">-</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div>
              <h4 className="mb-2 font-semibold">고민했던 점</h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start text-sm text-muted-foreground"
                  >
                    <span className="mr-2 text-primary">-</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function ProjectDetail() {
  return (
    <div className="space-y-12">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
