"use client";

import type React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Github,
  Calendar,
  Users,
  Play,
  Pause,
  ExternalLink,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { projects } from "@/constants/projects";
import { useState, useRef, useEffect } from "react";

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

// 이미지를 새 탭에서 여는 함수
function openImageInNewTab(src: string, alt: string) {
  const newWindow = window.open("", "_blank");
  if (newWindow) {
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${alt}</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              background: #000;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              font-family: system-ui, -apple-system, sans-serif;
            }
            .container {
              max-width: 95vw;
              max-height: 95vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 20px;
            }
            img, video {
              max-width: 100%;
              max-height: 80vh;
              object-fit: contain;
              border-radius: 8px;
              box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
            }
            .title {
              color: white;
              text-align: center;
              font-size: 18px;
              font-weight: 500;
            }
            .close-btn {
              position: fixed;
              top: 20px;
              right: 20px;
              background: rgba(255, 255, 255, 0.9);
              border: none;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              cursor: pointer;
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .close-btn:hover {
              background: white;
            }
          </style>
        </head>
        <body>
          <button class="close-btn" onclick="window.close()">×</button>
          <div class="container">
            ${
              src.match(/\.(mp4|webm|ogg|mov)$/i)
                ? `<video controls autoplay muted loop>
                     <source src="${src}" type="video/mp4">
                     Your browser does not support the video tag.
                   </video>`
                : `<img src="${src}" alt="${alt}" />`
            }
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
  }
}

// 비디오 컨트롤 컴포넌트
function VideoPlayer({ src, alt }: { src: string; alt: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openImageInNewTab(src, alt);
  };

  return (
    <div
      className="relative w-full h-full group cursor-pointer"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 비디오 컨트롤 오버레이 */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-3">
          <button
            onClick={togglePlay}
            className="bg-white/80 hover:bg-white/90 rounded-full p-3 transition-colors"
            aria-label={isPlaying ? "일시정지" : "재생"}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-black" />
            ) : (
              <Play className="h-6 w-6 text-black ml-1" />
            )}
          </button>
          <button
            onClick={handleVideoClick}
            className="bg-white/80 hover:bg-white/90 rounded-full p-3 transition-colors"
            aria-label="새 탭에서 열기"
          >
            <ExternalLink className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>

      {/* 비디오 타입 표시 */}
      <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
        VIDEO
      </div>
    </div>
  );
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

  // 자동재생 기능
  useEffect(() => {
    if (!api || project.image.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        api.scrollNext();
      }
    }, 5000); // 5초마다 다음 슬라이드로

    return () => clearInterval(interval);
  }, [api, isHovered, project.image.length]);

  const handleMediaClick = (media: string | any, mediaIndex: number) => {
    const src = getMediaSrc(media);
    const alt = `${project.title} - ${
      isVideoFile(media) ? "비디오" : "이미지"
    } ${mediaIndex + 1}`;
    openImageInNewTab(src, alt);
  };

  return (
    <div className="flex justify-center">
      <Card
        id={`project-${project.id}`}
        ref={animation.ref}
        className={`overflow-hidden scroll-mt-24 transition-all duration-1000 w-[500px] ${
          animation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Carousel for multiple media files */}
        <div className="h-[300px] relative">
          {project.image.length > 1 ? (
            <Carousel
              className="w-full h-full"
              opts={{ loop: true }}
              setApi={setApi}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CarouselContent>
                {project.image.map((media, mediaIndex) => (
                  <CarouselItem key={mediaIndex}>
                    <div className="h-[300px] relative">
                      {isVideoFile(media) ? (
                        // 비디오 파일인 경우
                        <VideoPlayer
                          src={getMediaSrc(media) || ""}
                          alt={`${project.title} - 비디오 ${mediaIndex + 1}`}
                        />
                      ) : isGifFile(media) ? (
                        // GIF 파일인 경우
                        <div
                          className="relative w-full h-full cursor-pointer group"
                          onClick={() => handleMediaClick(media, mediaIndex)}
                        >
                          <img
                            src={getMediaSrc(media) || ""}
                            alt={`${project.title} - 이미지 ${mediaIndex + 1}`}
                            className="w-full h-full object-contain bg-muted/20"
                            loading="lazy"
                          />
                          {/* 호버 오버레이 */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-white/80 hover:bg-white/90 rounded-full p-3 transition-colors">
                              <ExternalLink className="h-6 w-6 text-black" />
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                            GIF
                          </div>
                        </div>
                      ) : (
                        // 일반 이미지인 경우
                        <div
                          className="relative w-full h-full cursor-pointer group"
                          onClick={() => handleMediaClick(media, mediaIndex)}
                        >
                          <Image
                            src={media || "/placeholder.svg"}
                            alt={`${project.title} - 이미지 ${mediaIndex + 1}`}
                            fill
                            className="object-contain bg-muted/20"
                            sizes="(max-width: 768px) 100vw, 500px"
                          />
                          {/* 호버 오버레이 */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-white/80 hover:bg-white/90 rounded-full p-3 transition-colors">
                              <ExternalLink className="h-6 w-6 text-black" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />

              {/* 미디어 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {project.image.map((media, mediaIndex) => (
                  <div
                    key={mediaIndex}
                    className={`w-2 h-2 rounded-full backdrop-blur-sm border border-white/20 ${
                      isVideoFile(media)
                        ? "bg-red-500/70"
                        : isGifFile(media)
                        ? "bg-yellow-500/70"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          ) : (
            // 미디어가 하나인 경우
            <div className="h-[300px] relative">
              {isVideoFile(project.image[0]) ? (
                <VideoPlayer
                  src={getMediaSrc(project.image[0]) || ""}
                  alt={project.title}
                />
              ) : isGifFile(project.image[0]) ? (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => handleMediaClick(project.image[0], 0)}
                >
                  <img
                    src={getMediaSrc(project.image[0]) || ""}
                    alt={project.title}
                    className="w-full h-full object-contain bg-muted/20"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/80 hover:bg-white/90 rounded-full p-3 transition-colors">
                      <ExternalLink className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    GIF
                  </div>
                </div>
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => handleMediaClick(project.image[0], 0)}
                >
                  <Image
                    src={project.image[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain bg-muted/20"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/80 hover:bg-white/90 rounded-full p-3 transition-colors">
                      <ExternalLink className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <Users className="h-4 w-4" />
                  {project.team}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
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
                    사이트 보기
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {project.detailedDescription || project.description}
          </p>

          <div>
            <h4 className="font-semibold mb-2">사용 기술</h4>
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
              <h4 className="font-semibold mb-2">주요 기능</h4>
              <ul className="space-y-1">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div>
              <h4 className="font-semibold mb-2">기술적 도전과 해결</h4>
              <ul className="space-y-1">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
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
