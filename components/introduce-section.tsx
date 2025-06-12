"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Code } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Photo from "@/assets/photo.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { skillsInfo, toolsInfo } from "@/constants/skillLevel";

export default function IntroduceSection() {
  const heroAnimation = useScrollAnimation();
  const educationAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const skillsAnimation = useScrollAnimation();
  const toolsAnimation = useScrollAnimation();

  // 툴팁 오픈 상태 관리
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);

  // 레벨에 따른 별점 렌더링 함수
  const renderLevelStars = (level: number) => {
    return (
      <div className="flex items-center mt-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-sm mr-1 ${
              i < level ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <TooltipProvider delayDuration={300} skipDelayDuration={0}>
      <div className="space-y-8">
        <div
          ref={heroAnimation.ref}
          className={`text-center space-y-4 transition-all duration-1000 ${
            heroAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl font-bold tracking-tight">안녕하세요! 👋</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            사용자 경험과 편리함을 중요하게 생각하며 힘든 일이 있더라도
            긍정적인, 주니어 프론트엔드 개발자 유헌상입니다.
            <br />
            깔끔하고 직관적인 웹 서비스를 만드는 것을 목표로 하며 다양한 경험을
            하는 것을 좋아합니다.
            <br />
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <Card
              ref={educationAnimation.ref}
              className={`transition-all duration-1000 delay-200 w-[500px] ${
                educationAnimation.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  학력 & 경험
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* 프로필 사진 섹션 */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0">
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
                        <Image
                          src={Photo || "/placeholder.svg"}
                          alt="프로필 사진"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 학력 & 경험 내용 */}
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
                        2022.07 - 2023.06
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Card
              ref={valuesAnimation.ref}
              className={`transition-all duration-1000 delay-300 w-[500px] ${
                valuesAnimation.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
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
                  <h4 className="font-semibold">사용자 중심 개발</h4>
                  <p className="text-sm text-muted-foreground">
                    사용자가 편리하게 사용할 수 있는 인터페이스를 만드는 것을
                    최우선으로 생각합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">지속적인 학습</h4>
                  <p className="text-sm text-muted-foreground">
                    빠르게 변화하는 기술 트렌드에 맞춰 꾸준히 학습하고
                    성장하고자 합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">협업과 소통</h4>
                  <p className="text-sm text-muted-foreground">
                    팀원들과의 원활한 소통을 통해 더 나은 결과물을 만들어가고
                    싶습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">업무태도와 성격</h4>
                  <p className="text-sm text-muted-foreground">
                    잘 해결되지 않는 문제나 어려운 상황이 있더라도 긍정적으로
                    생각하는 자세를 갖고 있습니다. '모든 것이 경험이다' 라는
                    생각으로 배워나가도록 하겠습니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center">
          <Card
            ref={skillsAnimation.ref}
            className={`transition-all duration-1000 delay-400 w-[500px] ${
              skillsAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
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
                      if (open) {
                        setOpenTooltip(`skill-${skill.name}`);
                      } else if (openTooltip === `skill-${skill.name}`) {
                        setOpenTooltip(null);
                      }
                    }}
                  >
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        className={`transition-all duration-500 cursor-default hover:bg-secondary/80 ${
                          skillsAnimation.isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {skill.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="p-4 max-w-[300px] bg-card border border-border shadow-lg"
                    >
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          {skill.name}
                        </h4>
                        {renderLevelStars(skill.level)}
                        <ul className="space-y-1 mt-2">
                          {skill.description.map((desc, i) => (
                            <li key={i} className="text-sm flex items-start">
                              <span className="text-primary mr-2">•</span>
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
            className={`transition-all duration-1000 delay-400 w-[500px] ${
              toolsAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
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
                      if (open) {
                        setOpenTooltip(`tool-${tool.name}`);
                      } else if (openTooltip === `tool-${tool.name}`) {
                        setOpenTooltip(null);
                      }
                    }}
                  >
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        className={`transition-all duration-500 cursor-default hover:bg-secondary/80 ${
                          toolsAnimation.isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {tool.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="p-4 max-w-[300px] bg-card border border-border shadow-lg"
                    >
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          {tool.name}
                        </h4>
                        {renderLevelStars(tool.level)}
                        <ul className="space-y-1 mt-2">
                          {tool.description.map((desc, i) => (
                            <li key={i} className="text-sm flex items-start">
                              <span className="text-primary mr-2">•</span>
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
