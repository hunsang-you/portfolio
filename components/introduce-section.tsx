"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code, GraduationCap, Heart } from "lucide-react";
import Photo from "@/assets/photo.jpg";
import { skillsInfo, toolsInfo } from "@/constants/skillLevel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function IntroduceSection() {
  const heroAnimation = useScrollAnimation();
  const educationAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const skillsAnimation = useScrollAnimation();
  const toolsAnimation = useScrollAnimation();
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);

  const renderLevelStars = (level: number) => (
    <div className="mb-2 mt-1 flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`mr-1 h-4 w-4 rounded-sm ${
            i < level ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );

  return (
    <TooltipProvider delayDuration={300} skipDelayDuration={0}>
      <div className="space-y-8">
        <div
          ref={heroAnimation.ref}
          className={`space-y-4 text-center transition-all duration-1000 ${
            heroAnimation.isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-4xl font-bold tracking-tight">
            프론트엔드를 시작으로 AI 서비스까지, 다양한 기술을 경험하며 성장하는
            개발자 유헌상입니다
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            프론트엔드 구현을 중심으로 시작해, 최근 프로젝트에서는 FastAPI 기반
            API 구현과 LLM 기능 연동까지 경험을 넓혀왔습니다. 사용자 화면과
            백엔드 응답, AI 결과가 자연스럽게 이어지도록 구현하며, 새로운 기술을
            빠르게 학습해 프로젝트에 적용하고 싶습니다.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <Card
              ref={educationAnimation.ref}
              className={`w-[500px] max-w-full transition-all delay-200 duration-1000 ${
                educationAnimation.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  학력 & 교육
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-shrink-0">
                    <div className="mx-auto h-32 w-32 md:mx-0 md:h-40 md:w-40">
                      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-primary/10 shadow-lg">
                        <Image
                          src={Photo || "/placeholder.svg"}
                          alt="프로필 사진"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="font-semibold">
                        충남대학교 물리학과 졸업
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        2013.03 ~ 2020.02
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        삼성 청년 SW 아카데미 수료
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        2022.07 ~ 2023.06
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        프로젝트 캠프 : Next.js 1기
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        2024.05 ~ 2024.08
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        SK Networks Family AI 23기
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        2025.11 ~ 2026.05
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Card
              ref={valuesAnimation.ref}
              className={`w-[500px] max-w-full transition-all delay-300 duration-1000 ${
                valuesAnimation.isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  가치관 & 목표
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">
                    기능은 화면에서 완성된다고 생각합니다
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    기능이 돌아가는지만 보지 않습니다. 사용자가 어떤 순서로
                    입력하고, 기다리고, 결과를 확인하는지까지 같이 봅니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    AI 기능은 실패하는 순간까지 설계합니다
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    생성형 AI는 응답 시간이 길고 결과도 매번 달라질 수 있습니다.
                    그래서 로딩, 실패, 재시도, 상태 초기화처럼 사용자가 실제로
                    마주하는 순간까지 함께 챙기려 합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    프론트엔드는 제 출발점입니다
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    화면 구현에서 시작해 API와 AI 기능까지 다루는 쪽으로 넓혀
                    왔습니다. 사용자가 보는 부분과 서버에서 처리되는 부분을 함께
                    이해하는 개발자로 성장하고 있습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">기록하며 함께 맞춰 갑니다</h4>
                  <p className="text-sm text-muted-foreground">
                    PM 역할을 맡으며 기능 우선순위와 일정을 조율했습니다. 작업
                    내용과 결정 이유를 남겨 팀원이 같은 맥락에서 움직일 수 있게
                    하는 편입니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center">
          <Card
            ref={skillsAnimation.ref}
            className={`w-[500px] max-w-full transition-all delay-400 duration-1000 ${
              skillsAnimation.isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillsInfo.map((skill, index) => (
                  <Tooltip
                    key={skill.name}
                    open={openTooltip === `skill-${skill.name}`}
                    onOpenChange={(open) => {
                      setOpenTooltip(open ? `skill-${skill.name}` : null);
                    }}
                  >
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        className={`cursor-default transition-all duration-500 hover:bg-secondary/80 ${
                          skillsAnimation.isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {skill.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-[300px] border border-border bg-card p-4 shadow-lg"
                    >
                      <div>
                        <h4 className="mb-1 text-lg font-semibold">
                          {skill.name}
                        </h4>
                        {renderLevelStars(skill.level)}
                        <ul className="mt-2 space-y-1">
                          {skill.description.map((desc, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <span className="mr-2 text-primary">-</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card
            ref={toolsAnimation.ref}
            className={`w-[500px] max-w-full transition-all delay-400 duration-1000 ${
              toolsAnimation.isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                DevOps / Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {toolsInfo.map((tool, index) => (
                  <Tooltip
                    key={tool.name}
                    open={openTooltip === `tool-${tool.name}`}
                    onOpenChange={(open) => {
                      setOpenTooltip(open ? `tool-${tool.name}` : null);
                    }}
                  >
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        className={`cursor-default transition-all duration-500 hover:bg-secondary/80 ${
                          toolsAnimation.isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {tool.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-[300px] border border-border bg-card p-4 shadow-lg"
                    >
                      <div>
                        <h4 className="mb-1 text-lg font-semibold">
                          {tool.name}
                        </h4>
                        {renderLevelStars(tool.level)}
                        <ul className="mt-2 space-y-1">
                          {tool.description.map((desc, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <span className="mr-2 text-primary">-</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
