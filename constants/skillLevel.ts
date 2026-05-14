interface SkillInfo {
  name: string;
  level: number;
  description: string[];
}

interface ToolInfo {
  name: string;
  level: number;
  description: string[];
}

export const skillsInfo: SkillInfo[] = [
  {
    name: "OpenAI API",
    level: 3,
    description: [
      "AI 이미지 생성/수정 기능을 서비스 화면과 API에 연결했습니다.",
      "원하는 형식의 답변을 얻기 위해 프롬프트와 예외 상황을 함께 조정했습니다.",
    ],
  },
  {
    name: "LLM / RAG",
    level: 2,
    description: [
      "DB 정보를 context로 넣어 서비스에 맞는 답변을 만들었습니다.",
      "면접 답변을 평가하기 위한 기준과 피드백 프롬프트를 작성했습니다.",
    ],
  },
  {
    name: "Embedding / Vector Search",
    level: 2,
    description: [
      "이미지 임베딩과 pgvector 검색 구조를 이해하고 추천 화면에 연결했습니다.",
      "생성 이미지와 기존 매물 이미지 모두 추천 검색에 사용할 수 있게 처리했습니다.",
    ],
  },
  {
    name: "Python",
    level: 3,
    description: [
      "알고리즘 문제 풀이와 프로젝트 백엔드 구현에 사용했습니다.",
      "Pandas, NumPy로 데이터 전처리와 머신러닝 학습을 진행했습니다.",
    ],
  },
  {
    name: "FastAPI",
    level: 2,
    description: [
      "프론트엔드에서 필요한 REST API를 만들고 연결했습니다.",
      "AI 이미지 생성/수정, 추천 결과 조회, 사용자 상태 관리 API를 구현했습니다.",
      "응답이 오래 걸리는 작업은 job id로 상태를 조회하도록 구성했습니다.",
    ],
  },
  {
    name: "PostgreSQL",
    level: 1,
    description: [
      "서비스에 필요한 데이터를 조회하고 API 로직에 활용했습니다.",
      "pgvector로 임베딩을 저장하고 검색하는 구조를 이해하고 사용했습니다.",
    ],
  },
  {
    name: "Next.js",
    level: 3,
    description: [
      "App Router 기반 페이지와 API Route를 구현했습니다.",
      "AI 이미지 생성/수정과 추천 결과를 사용자가 볼 수 있는 화면으로 연결했습니다.",
    ],
  },
  {
    name: "React",
    level: 3,
    description: [
      "컴포넌트 단위로 화면을 나누고 재사용했습니다.",
      "Zustand와 Redux Toolkit으로 화면 상태를 관리했습니다.",
      "입력, 로딩, 실패, 결과 확인까지 이어지는 인터랙션을 구현했습니다.",
    ],
  },
  {
    name: "TypeScript",
    level: 3,
    description: [
      "API 응답과 컴포넌트 props 타입을 정의해 화면 오류를 줄였습니다.",
      "인터페이스로 프로젝트 데이터를 정리했습니다.",
    ],
  },
  {
    name: "JavaScript",
    level: 3,
    description: [
      "ES6+ 문법으로 웹 서비스 기능을 구현했습니다.",
      "비동기 처리, API 통신, 상태 관리 로직을 작성했습니다.",
    ],
  },
  {
    name: "HTML/CSS",
    level: 2,
    description: [
      "반응형 화면과 기본 UI 스타일을 구현했습니다.",
      "Tailwind CSS로 레이아웃과 컴포넌트 스타일을 작성했습니다.",
    ],
  },
];

export const toolsInfo: ToolInfo[] = [
  {
    name: "Git",
    level: 3,
    description: [
      "Issue, PR, 브랜치 전략으로 작업 내용을 관리했습니다.",
      "PM 역할을 맡아 기능 우선순위와 작업 분배를 조율했습니다.",
    ],
  },
  {
    name: "Docker",
    level: 2,
    description: [
      "프론트엔드와 백엔드를 컨테이너로 실행하는 흐름을 이해하고 있습니다.",
      "Docker Compose로 배포 환경을 구성했습니다.",
    ],
  },
  {
    name: "AWS",
    level: 2,
    description: [
      "EC2, RDS, S3를 활용한 서비스 구성 흐름을 이해하고 있습니다.",
      "이미지 저장소와 데이터베이스를 서비스 기능에 연결했습니다.",
    ],
  },
  {
    name: "Jenkins",
    level: 2,
    description: [
      "GitHub Webhook과 Docker로 자동 배포를 구성했습니다.",
      "팀 프로젝트에서 배포 파이프라인을 직접 적용했습니다.",
    ],
  },
  {
    name: "Figma",
    level: 2,
    description: [
      "프로젝트 초기에 화면 흐름과 UI 구조를 정리했습니다.",
      "사용자에게 필요한 정보가 어디에 보여야 할지 고민하며 화면을 구성했습니다.",
    ],
  },
  {
    name: "Jira",
    level: 2,
    description: [
      "팀 작업 현황과 우선순위를 공유하며 프로젝트를 진행했습니다.",
      "일정과 작업 상태를 관리하는 데 사용했습니다.",
    ],
  },
  {
    name: "Notion",
    level: 2,
    description: [
      "회의 내용과 기능 요구사항을 문서로 정리했습니다.",
      "프로젝트 진행 중 필요한 자료와 결정 사항을 기록했습니다.",
    ],
  },
];
