"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Code } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Photo from "@/assets/photo.jpg";

export default function IntroduceSection() {
  const heroAnimation = useScrollAnimation();
  const educationAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const skillsAnimation = useScrollAnimation();

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML/CSS",
    "Python",
  ];
  const tools = ["Git", "Figma", "notion", "discord"];

  return (
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
          사용자 경험을 중시하는 주니어 프론트엔드 개발자 유헌상입니다.
          <br />
          깔끔하고 직관적인 웹 서비스를 만들어가고 있습니다.
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
                        src={Photo}
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
                  빠르게 변화하는 기술 트렌드에 맞춰 꾸준히 학습하고 성장하고자
                  합니다.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">협업과 소통</h4>
                <p className="text-sm text-muted-foreground">
                  팀원들과의 원활한 소통을 통해 더 나은 결과물을 만들어가고
                  싶습니다.
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
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={`transition-all duration-500 ${
                    skillsAnimation.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
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
              Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className={`transition-all duration-500 ${
                    skillsAnimation.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
