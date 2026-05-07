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
            AI 기능을 서비스 흐름으로 연결하는 개발자
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            React와 Next.js 기반 프론트엔드 경험을 바탕으로 FastAPI,
            OpenAI API, 임베딩 기반 검색, 데이터 흐름을 함께 다룹니다.
            사용자의 입력이 AI 기능과 API, 검색 결과, 화면 상태로 자연스럽게
            이어지는 서비스를 만드는 데 관심이 있습니다.
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
                      <h4 className="font-semibold">충남대학교 물리학과 졸업</h4>
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
                  <h4 className="font-semibold">AI를 실제 기능으로 연결</h4>
                  <p className="text-sm text-muted-foreground">
                    모델 호출에서 끝나지 않고 입력, API, 데이터, 검색 결과,
                    사용자 화면까지 이어지는 흐름을 중요하게 생각합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">사용자 흐름 중심 개발</h4>
                  <p className="text-sm text-muted-foreground">
                    정상 동작뿐 아니라 대기 상태, 실패 상태, 재시도, 결과 확인
                    흐름까지 함께 고려하는 서비스를 만들고자 합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">프론트엔드와 AI 역량의 결합</h4>
                  <p className="text-sm text-muted-foreground">
                    사용자와 가장 가까운 화면 구현 경험을 바탕으로 AI 기능이
                    실제 서비스 안에서 이해하기 쉽고 안정적으로 쓰이도록
                    만드는 개발자가 되는 것이 목표입니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">협업과 기록</h4>
                  <p className="text-sm text-muted-foreground">
                    PM 역할을 수행하며 기능 우선순위, GitHub Issue/PR, 일정
                    관리를 경험했습니다. 문제와 결정 과정을 기록하고 공유하는
                    협업 방식을 선호합니다.
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
                Tools
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
