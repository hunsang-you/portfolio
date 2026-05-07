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
      "원하는 방의 분위기를 이미지로 만들고, 비슷한 실제 매물을 찾아주는 AI 부동산 서비스",
    detailedDescription:
      "가격, 위치, 면적처럼 숫자로 고르는 방식에서 조금 벗어나 보고 싶었습니다. 사용자가 원하는 방의 분위기를 자연어로 입력하면 이미지를 생성하고, 그 이미지나 기존 매물 사진과 비슷한 실제 매물을 추천합니다. 공간의 느낌까지 매물 탐색에 반영해보자는 문제의식에서 출발한 프로젝트입니다.",
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
      "PM, AI 이미지 생성/수정 API 연동, 유사 매물 추천 화면 연결, 검색/필터 개선, CI/CD 구성",
    features: [
      "OpenAI 이미지 생성/수정 기능을 FastAPI API와 Next.js 화면에 연결",
      "생성 시간이 긴 작업은 job id를 발급하고 상태를 조회하는 방식으로 처리",
      "생성 이미지와 기존 매물 이미지 모두 추천 검색의 출발점으로 사용할 수 있게 화면 구성",
      "기존 매물로 유사 매물을 찾을 때 같은 매물이 다시 나오지 않도록 제외 처리",
      "거래 방식, 방 유형, 가격, 면적, 지도 좌표를 조합해 매물 필터링 구현",
      "서울 행정구역과 지하철역 데이터를 붙여 검색어 입력을 더 편하게 개선",
      "AWS EC2, Docker, Jenkins로 자동 배포 환경 구성",
    ],
    challenges: [
      "이미지 생성과 수정은 응답 시간이 길어 화면이 멈춘 것처럼 보일 수 있었습니다. 요청 직후 결과를 기다리는 방식 대신 작업을 만들고 상태를 조회하는 방식으로 바꿔 진행 중, 완료, 실패 상태를 화면에서 분리했습니다.",
      "생성 이미지와 기존 매물 이미지를 추천의 출발점으로 함께 쓰면서 상태가 꼬이는 문제가 있었습니다. 선택한 이미지, 추천 결과, 수정 횟수, 탭 상태를 언제 초기화할지 정리해 사용자가 다음 행동을 이어갈 수 있게 했습니다.",
    ],
  },
  {
    id: 5,
    title: "AI Work",
    description:
      "이력서를 읽고 면접 질문과 피드백을 만들어주는 AI 모의 면접 서비스",
    detailedDescription:
      "취업 준비생이 혼자서도 면접을 연습할 수 있게 만든 서비스입니다. 이력서와 직무 정보를 바탕으로 질문을 만들고, 사용자의 답변을 평가해 피드백을 제공합니다. 면접 연습이 채용공고 탐색으로 이어지도록 직무 기반 추천 기능도 함께 넣었습니다.",
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
      "기술/인성 면접 답변을 평가하고 피드백을 생성하는 프롬프트 작성",
      "답변을 4개 기준으로 나눠 평가하고 점수화하는 방식 설계",
      "질문과 무관한 답변은 낮은 점수로 처리되도록 예외 기준 정리",
      "사용자가 등록한 직무에 맞춰 채용공고를 추천하는 API 연동",
    ],
    challenges: [
      "LLM은 같은 질문에도 매번 다른 표현으로 답할 수 있어 평가 기준이 흔들리기 쉬웠습니다. 점수 기준과 예외 상황을 프롬프트에 명확히 넣어 면접 피드백으로 쓸 수 있는 형태의 응답을 얻도록 조정했습니다.",
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
