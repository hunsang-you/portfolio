"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check, Copy, Github, Mail, MapPin, NotebookText, Phone } from "lucide-react";

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
        title: "이메일을 복사했습니다.",
        description: "클립보드에 이메일 주소가 저장되었습니다.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
      value: "청주시 청원구",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hunsang-you",
      href: "https://github.com/hunsang-you",
    },
    {
      icon: NotebookText,
      label: "Blog",
      value: "12dbtkd.tistory.com",
      href: "https://12dbtkd.tistory.com",
    },
  ];

  return (
    <Card
      ref={animation.ref}
      className={`inline-block w-auto transition-all duration-1000 ${
        animation.isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl">연락처 정보</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50">
          <Link href={`mailto:${email}`} className="flex flex-1 items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">이메일</p>
              <p className="text-sm">{email}</p>
            </div>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyEmail}
            className="ml-2"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        {contactItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <div
              className={`flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50 ${
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
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </Link>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </CardContent>
    </Card>
  );
}
