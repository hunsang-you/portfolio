"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { projects } from "@/constants/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const animation = useScrollAnimation();

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
        <div className="h-[300px] relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 500px"
          />
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
            <div className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <Link href={project.github}>
                  <Github className="h-4 w-4 mr-1" />
                  GitHub
                </Link>
              </Button>
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
