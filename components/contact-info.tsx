"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  HousePlusIcon,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const animation = useScrollAnimation();

  const email = "gjstkd123@naver.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "이메일이 복사되었습니다!",
        description: "클립보드에 이메일 주소가 저장되었습니다.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "복사 실패",
        description: "이메일 복사 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
  };

  const contactItems = [
    {
      icon: Phone,
      label: "전화번호",
      value: "010-9491-7668",
      href: "tel:010-9491-7668",
    },
    {
      icon: MapPin,
      label: "위치",
      value: "청주, 대한민국",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hunsang-you",
      href: "https://github.com/hunsang-you",
    },
    {
      icon: HousePlusIcon,
      label: "Blog",
      value: "12dbtkd.tistory.com",
      href: "https://12dbtkd.tistory.com",
    },
  ];

  return (
    <Card
      ref={animation.ref}
      className={`transition-all duration-1000 w-auto inline-block ${
        animation.isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl">연락처 정보</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 이메일 섹션 (복사 기능 포함) */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
          <Link
            href={`mailto:${email}`}
            className="flex items-center gap-3 flex-1"
          >
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                이메일
              </p>
              <p className="text-sm">{email}</p>
            </div>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyEmail}
            className="ml-2"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* 나머지 연락처 정보 */}
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors ${
                item.href ? "cursor-pointer" : ""
              }`}
            >
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-sm">{item.value}</p>
              </div>
            </div>
          );

          return item.href ? (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </Link>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </CardContent>
    </Card>
  );
}
