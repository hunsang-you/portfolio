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
      "OpenAI 이미지 생성과 임베딩 기반 유사도 검색을 연결한 AI 부동산 매물 추천 서비스",
    detailedDescription:
      "사용자가 원하는 방의 분위기와 조건을 자연어로 입력하면 AI 이미지 생성 결과를 만들고, 생성 이미지 또는 기존 매물 이미지를 기반으로 실제 매물과의 유사도 검색 결과를 제공하는 서비스입니다. 기존의 가격, 위치, 면적 중심 검색에서 벗어나 사용자의 시각적 선호와 공간 분위기를 매물 탐색 과정에 반영하는 것을 목표로 했습니다.",
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
    redirect: null,
    duration: "2026.04 - 2026.05",
    team: "4인 팀 프로젝트 / PM",
    role:
      "PM, AI 이미지 생성/수정 API 연동, 유사 매물 추천 흐름 구현, 검색/필터 UX 개선, CI/CD 구성",
    features: [
      "OpenAI API 기반 AI 이미지 생성/수정 기능을 FastAPI와 Next.js 화면에 연동",
      "이미지 생성/수정 작업을 job id 기반 비동기 상태 조회 방식으로 개선",
      "생성 이미지와 기존 매물 이미지의 임베딩 검색 결과를 활용한 유사 매물 추천 UI 구현",
      "기존 매물 이미지 검색 시 동일 매물이 추천 결과에 다시 노출되지 않도록 제외 로직 추가",
      "거래 방식, 방 유형, 구조, 가격, 면적, 지도 좌표 조건을 반영한 매물 필터링 구현",
      "Elasticsearch와 서울 행정구역/지하철역 데이터를 활용한 검색 기능 개선",
      "AWS EC2, Docker, Jenkins 기반 CI/CD 자동 배포 환경 구성",
    ],
    challenges: [
      "이미지 생성과 수정은 응답 시간이 길어 일반적인 동기 호출 방식으로는 사용자가 진행 상태를 알기 어려웠습니다. 이를 job 생성, 상태 조회, 완료 결과 반환 흐름으로 바꾸고 프론트엔드에서 진행 상태와 실패 메시지를 분리해 처리했습니다.",
      "생성 이미지와 기존 매물 이미지를 모두 유사도 검색 입력으로 사용할 수 있도록 이미지 출처에 따라 임베딩 조회 방식을 구분하고, 선택 이미지와 추천 결과 상태가 충돌하지 않도록 상태 초기화 흐름을 정리했습니다.",
    ],
  },
  {
    id: 5,
    title: "AI Work",
    description:
      "LLM을 활용해 면접 답변 평가, 피드백 생성, 직무 기반 채용공고 추천을 제공하는 모의 면접 서비스",
    detailedDescription:
      "취업 준비생이 이력서와 답변을 기반으로 면접을 연습할 수 있도록 만든 AI 활용 애플리케이션입니다. 사용자의 답변을 평가 기준에 따라 분석하고, 피드백을 생성하며, 등록한 직무 정보에 맞는 채용공고를 추천하는 기능을 구현했습니다.",
    image: ["/placeholder.jpg"],
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
      "LLM 기반 면접 답변 평가와 피드백 생성을 위한 프롬프트 엔지니어링 담당",
      "답변 수준을 4개 루브릭으로 나누어 평가하고 수치화하는 흐름 설계",
      "정상 범주를 벗어난 답변을 0점 처리하는 예외 처리 기준 구성",
      "직무 코드 매핑을 통해 사용자의 등록 직무에 맞는 추천 채용공고 기능 구현",
    ],
    challenges: [
      "LLM 응답이 매번 달라질 수 있어 평가 기준과 출력 형식을 명확히 잡는 것이 중요했습니다. 루브릭과 예외 상황을 프롬프트에 반영해 서비스 목적에 맞는 응답을 얻도록 개선했습니다.",
    ],
  },
  {
    id: 1,
    title: "AightNow",
    description:
      "해외 주식 뉴스 번역, AI 요약 리포트, 종목 정보 챗봇을 제공하는 해외주식 AI 리포트 서비스",
    detailedDescription:
      "Next.js 기반 해외 주식 정보 제공 서비스입니다. 종목 검색, 관련 해외 뉴스 조회, OpenAI 기반 챗봇, RAG context를 활용한 종목 정보 응답을 구현하며 AI 기능과 프론트엔드 서비스 경험을 연결했습니다.",
    image: [AightNow, AightNow2, AightNow3],
    tags: ["OpenAI", "RAG", "Next.js", "TypeScript", "Zustand", "Supabase"],
    github: "https://github.com/NextCamp-8B/8B-SF",
    redirect: "https://8b-test.vercel.app/ko",
    duration: "2024.06 - 2024.08",
    team: "4인 프론트엔드 팀",
    role:
      "종목/뉴스 검색 페이지, 인기 검색어, AI 챗봇 UI와 API 연동, 성능 최적화",
    features: [
      "검색어 입력에 0.5초 debounce를 적용해 과도한 API 요청 방지",
      "OpenAI와 프롬프트 엔지니어링을 활용한 AI 챗봇 구현",
      "DB의 종목 정보를 RAG context로 활용해 사용자에게 요약 정보 제공",
      "이미지와 폰트 최적화를 통해 Lighthouse 성능 지표를 78점에서 99점까지 개선",
    ],
    challenges: [
      "AI 챗봇이 단순 응답에 그치지 않고 서비스 데이터와 연결되도록 context 구성과 화면 흐름을 함께 고려했습니다.",
    ],
  },
  {
    id: 2,
    title: "CoffeeBrew",
    description:
      "설문과 리뷰 데이터를 활용해 사용자 취향에 맞는 커피 원두와 캡슐을 추천하는 웹 서비스",
    detailedDescription:
      "사용자의 커피 취향을 기반으로 원두와 캡슐 정보를 제공하는 추천 서비스입니다. 원두 목록, 키워드 검색, 상세 페이지, 마이페이지를 담당하며 React와 TypeScript 기반 프론트엔드 구현 경험을 쌓았습니다.",
    image: [CoffeeBrew, CoffeeBrew2, CoffeeBrew3, CoffeeBrew4],
    tags: ["React", "TypeScript", "Redux Toolkit", "Chart", "Figma"],
    github: "https://github.com/hunsang-you/coffeebrew",
    redirect: null,
    duration: "2023.02 - 2023.04",
    team: "6인 팀 프로젝트 / FE 3, BE 3",
    role: "원두 목록, 키워드 검색, 원두 상세 페이지, 사용자 마이페이지 구현",
    features: [
      "원두 키워드와 사용자 검색 조건을 매칭해 선호도에 가까운 원두 목록 제공",
      "원두 상세 페이지에서 차트 기반 정보 시각화, 구매 링크, 리뷰 작성 기능 구현",
      "마이페이지에서 즐겨찾기 원두와 작성 리뷰를 확인할 수 있는 화면 구현",
    ],
    challenges: [
      "처음 TypeScript를 프로젝트에 적용하며 타입과 인터페이스 정의에 어려움이 있었지만, API 응답 구조에 맞춰 데이터를 정의하며 구현 범위를 넓혔습니다.",
    ],
  },
  {
    id: 3,
    title: "MiriStock",
    description:
      "과거 국내 주식 데이터를 이용해 모의 투자와 결과 포트폴리오를 제공하는 모바일 웹 서비스",
    detailedDescription:
      "주식 입문자가 과거 데이터를 기반으로 매수/매도 연습을 할 수 있도록 만든 모의 투자 서비스입니다. 첫 React 팀 프로젝트로 로그인, 게시판, 주식 검색, 최근 검색, 결과 포트폴리오 페이지를 구현했습니다.",
    image: [MiriStock, MiriStock2, MiriStock3, MiriStock4, MiriStock5],
    tags: ["React", "JavaScript", "Zustand", "Figma"],
    github: "https://github.com/hunsang-you/MiriStock",
    redirect: null,
    duration: "2023.01 - 2023.02",
    team: "5인 팀 프로젝트 / FE 3, BE 2",
    role: "로그인, Q&A 게시판, 주식 검색, 최근 검색, 결과 포트폴리오 화면 구현",
    features: [
      "과거 주식 데이터 조회와 모의 투자 결과 확인 화면 구현",
      "사용자 Q&A 게시판과 최근 검색 목록 구현",
      "투자 결과를 한눈에 확인할 수 있도록 포트폴리오 화면 구성",
    ],
    challenges: [
      "첫 팀 프로젝트에서 UI/UX, API 연동, 상태 관리의 기본 흐름을 경험하며 이후 프로젝트의 기반을 쌓았습니다.",
    ],
  },
];
