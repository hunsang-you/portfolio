import type { StaticImageData } from "next/image";
import MiriStock from "@/public/MiriStock.png";
import MiriStock2 from "@/public/MiriStock2.gif";
import MiriStock3 from "@/public/MiriStock3.gif";
import MiriStock4 from "@/public/MiriStock4.gif";
import MiriStock5 from "@/public/MiriStock5.gif";
import CoffeeBrew from "@/public/coffeebrew.jpg";
import CoffeeBrew2 from "@/public/Coffeebrew2.gif";
import CoffeeBrew3 from "@/public/coffeebrew3.jpg";
import CoffeeBrew4 from "@/public/coffeebrew4.jpeg";
import AightNow from "@/public/AightNow.png";
import AightNow2 from "@/public/AightNow2.gif";
import AightNow3 from "@/public/AightNow3.png";
import GeumbangLogo from "@/public/GeumbangLogo.png";
import GeumbangDiagram from "@/public/GeumbangDiagram.png";
import GeumbangErd from "@/public/GeumbangErd.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: (StaticImageData | string)[];
  tags: string[];
  github: string;
  redirect: string | null;
  duration?: string;
  team?: string;
  role?: string;
  features?: string[];
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: 4,
    title: "금방",
    description:
      "AI 기반 부동산 매물 추천 서비스",
    detailedDescription:
      "사용자의 자연어 입력을 기반으로 방 이미지를 생성하고, 생성 이미지 또는 기존 매물 이미지의 임베딩 결과를 활용하여 PostgreSQL/pgvector 기반 벡터 유사도 검색을 통해 실제 매물을 추천하는 서비스입니다.",
    image: [GeumbangLogo, GeumbangDiagram, GeumbangErd],
    tags: [
      "OpenAI API",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Elasticsearch",
      "Docker",
      "Jenkins",
    ],
    github: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN23-FINAL-1Team",
    redirect: "https://geumbang.duckdns.org/home",
    duration: "2026.04 - 2026.05",
    team: "4인 팀 프로젝트 / PM",
    role:
      "프로젝트 PM, 메인 페이지, 지도 기반 매물 검색/필터링, FastAPI 백엔드 API, RandomForest 모델, AI 이미지 기능 사용량 상태 관리, 유사 매물 추천 흐름 연동, CI/CD 자동 배포",
    features: [
      "프로젝트 PM 담당. 프로젝트 기획, 기능 우선순위 설정, GitHub Issue/PR 기반 작업 관리, 팀원 간 작업 조율 및 프로젝트 일정 관리",
      "Next.js를 이용한 메인 페이지 전반 구현. 카카오맵 API를 이용한 지도 기반 매물 검색 및 필터링 기능 구현",
      "위치 기반 매물 마커를 줌 레벨에 따라 군집화하여 지도 크기에 따른 성능 저하 방지",
      "검색어와 필터 변경 시 과도한 API 요청을 방지하기 위해 0.5초 Debounce 적용",
      "Elastic Search와 행정구역 검색어를 활용해 키워드 기반 매물 검색 기능 개선",
      "FastAPI 기반 백엔드 API를 구현하여 소셜 로그인 유저 정보 저장, 부동산 매물 목록 조회, 상세 조회 기능 개발",
      "거래 방식, 방 유형, 구조, 가격, 면적, 지도 좌표 조건을 반영한 검색/필터링 로직 구현",
      "기본 매물 추천에 활용할 Machine Learning 모델(RandomForest)을 학습하고, 사용자의 조건에 맞는 매물 추천 로직에 활용할 수 있도록 모델링 작업 수행",
      "이미지 수정 횟수, 사용자 크레딧 등 AI 이미지 기능 사용량 기반의 결제 및 BM 구조를 설계하고 관련 상태 관리 로직 구현",
      "AI 생성 이미지와 기존 매물 이미지 2가지 경로를 활용한 유사 매물 추천 흐름을 FastAPI와 프론트엔드 UI에 연동",
      "AWS EC2와 Jenkins를 활용한 CI/CD 자동 배포 환경을 구축하여 배포 과정 자동화",
    ],
  },
  {
    id: 5,
    title: "AI Work",
    description:
      "취업 준비생을 위한 모의 면접 서비스",
    detailedDescription:
      "LLM을 이용한 면접 피드백, 이력서 분석과 첨삭을 통해 면접을 준비하는 취업 준비생에게 충분한 면접 대비를 할 수 있도록 하기 위한 프로젝트입니다.",
    image: [
      "/AIWorkHome.png",
      "/AIWorkInterviewVoice.png",
      "/AIWorkInterviewText.png",
      "/AIWorkResumeAnalysis.png",
      "/AIWorkRagQuestion.png",
    ],
    tags: [
      "LLM",
      "Prompt Engineering",
      "Django",
      "FastAPI",
      "React",
      "TypeScript",
      "Zustand",
    ],
    github: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN23-4th-1TEAM",
    redirect: null,
    duration: "2026.02 - 2026.03",
    team: "4인 팀 프로젝트",
    role:
      "기술/인성 면접 평가 프롬프트 설계, 예외 응답 처리, 직무 기반 채용공고 추천 API 연동",
    features: [
      "기술 면접 및 인성 면접 프롬프트 엔지니어링 담당",
      "사용자의 답변 수준을 4개의 루브릭으로 나누어 평가하고, 이를 수치화하여 제공할 수 있도록 구성",
      "사용자의 답변이 정상적인 범주를 벗어나는 상황일 경우 0점 처리하는 등의 예외 처리 적용",
      "외부 API를 활용한 추천 채용공고 구현 담당",
      "각 직무별 직무 코드를 매핑하고, 사용자가 이력서를 등록했을 시 등록한 직무에 따라 알맞은 채용공고를 제공하는 기능 구현",
    ],
  },
  {
    id: 1,
    title: "AightNow",
    description:
      "해외 주식 뉴스와 종목 정보를 한 화면에서 볼 수 있는 AI 리포트 서비스",
    detailedDescription:
      "해외 주식을 검색하면 관련 뉴스와 종목 정보를 함께 확인할 수 있는 서비스입니다. 뉴스 번역과 요약, 종목 정보 챗봇을 넣어 사용자가 여러 사이트를 오가지 않고도 기본 정보를 파악할 수 있게 했습니다.",
    image: [AightNow, AightNow2, AightNow3],
    tags: ["OpenAI", "RAG", "Next.js", "TypeScript", "Zustand", "Supabase"],
    github: "https://github.com/NextCamp-8B/8B-SF",
    redirect: "https://8b-test.vercel.app/ko",
    duration: "2024.06 - 2024.08",
    team: "4인 프론트엔드 팀",
    role:
      "종목/뉴스 검색 페이지, 인기 검색어, AI 챗봇 UI와 API 연동, 성능 최적화",
    features: [
      "검색어 입력에 debounce를 적용해 불필요한 API 요청 감소",
      "종목 정보에 답변할 수 있는 OpenAI 챗봇 구현",
      "DB에 저장된 종목 정보를 context로 넣어 답변 품질 보완",
      "이미지와 폰트를 정리해 Lighthouse 성능 점수를 78점에서 99점까지 개선",
    ],
    challenges: [
      "챗봇이 일반적인 답변만 하지 않도록 서비스가 가진 종목 정보를 함께 전달했습니다. 사용자가 검색한 종목 흐름 안에서 챗봇을 자연스럽게 쓸 수 있게 화면도 함께 조정했습니다.",
    ],
  },
  {
    id: 2,
    title: "CoffeeBrew",
    description:
      "취향에 맞는 커피 원두와 캡슐을 찾아주는 추천 서비스",
    detailedDescription:
      "사용자의 취향을 바탕으로 원두와 캡슐 정보를 보여주는 서비스입니다. 원두 목록, 키워드 검색, 상세 페이지, 마이페이지를 맡아 React와 TypeScript로 화면을 구성했습니다.",
    image: [CoffeeBrew, CoffeeBrew2, CoffeeBrew3, CoffeeBrew4],
    tags: ["React", "TypeScript", "Redux Toolkit", "Chart", "Figma"],
    github: "https://github.com/hunsang-you/coffeebrew",
    redirect: null,
    duration: "2023.02 - 2023.04",
    team: "6인 팀 프로젝트 / FE 3, BE 3",
    role: "원두 목록, 키워드 검색, 원두 상세 페이지, 사용자 마이페이지 구현",
    features: [
      "키워드와 검색 조건을 조합해 원두 목록 제공",
      "상세 페이지에서 차트, 구매 링크, 리뷰 작성 기능 구현",
      "마이페이지에서 즐겨찾기 원두와 작성 리뷰 확인",
    ],
    challenges: [
      "처음 TypeScript를 프로젝트에 적용해 타입 정의가 낯설었습니다. API 응답 구조를 기준으로 필요한 데이터를 정리하면서 구현 범위를 넓혀 갔습니다.",
    ],
  },
  {
    id: 3,
    title: "MiriStock",
    description:
      "과거 주식 데이터로 매수와 매도를 연습해보는 모의 투자 서비스",
    detailedDescription:
      "주식 입문자가 과거 데이터를 보며 매수와 매도를 연습할 수 있도록 만든 모바일 웹 서비스입니다. 첫 React 팀 프로젝트였고, 로그인과 게시판, 주식 검색, 최근 검색, 결과 포트폴리오 화면을 맡았습니다.",
    image: [MiriStock, MiriStock2, MiriStock3, MiriStock4, MiriStock5],
    tags: ["React", "JavaScript", "Zustand", "Figma"],
    github: "https://github.com/hunsang-you/MiriStock",
    redirect: null,
    duration: "2023.01 - 2023.02",
    team: "5인 팀 프로젝트 / FE 3, BE 2",
    role: "로그인, Q&A 게시판, 주식 검색, 최근 검색, 결과 포트폴리오 화면 구현",
    features: [
      "과거 주식 데이터 조회와 모의 투자 결과 화면 구현",
      "Q&A 게시판과 최근 검색 목록 구현",
      "투자 결과를 한눈에 볼 수 있는 포트폴리오 화면 구성",
    ],
    challenges: [
      "첫 팀 프로젝트라 UI 구성, API 연동, 상태 관리가 모두 낯설었습니다. 작은 화면부터 맡아 구현하면서 이후 프로젝트의 기반을 만들었습니다.",
    ],
  },
];
