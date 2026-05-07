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
      "사용자 입력 기반 응답 생성과 AI 이미지 생성/수정 기능을 서비스에 연동한 경험",
      "프롬프트 정제, 응답 형식 제어, 예외 상황을 고려한 프롬프트 설계 경험",
    ],
  },
  {
    name: "LLM / RAG",
    level: 2,
    description: [
      "서비스 데이터 또는 DB 정보를 context로 활용해 답변을 생성하는 흐름 구현 경험",
      "면접 답변 평가와 피드백 생성을 위한 루브릭 기반 프롬프트 설계 경험",
    ],
  },
  {
    name: "Embedding / Vector Search",
    level: 2,
    description: [
      "이미지 임베딩과 pgvector 기반 유사도 검색 구조를 이해하고 추천 흐름에 연동한 경험",
      "생성 이미지와 기존 매물 이미지 기반 유사 매물 추천 API 및 UI 연동 경험",
    ],
  },
  {
    name: "Python",
    level: 3,
    description: [
      "기본 문법과 알고리즘 문제 해결 경험",
      "Pandas, NumPy 기반 데이터 전처리 및 머신러닝 모델 학습 경험",
    ],
  },
  {
    name: "FastAPI",
    level: 3,
    description: [
      "REST API 설계와 프론트엔드 연동 경험",
      "AI 이미지 생성/수정, 유사도 검색, 사용자 상태 관리 API 구현 경험",
      "job id 기반 비동기 작업 상태 조회 API 흐름 구현 경험",
    ],
  },
  {
    name: "PostgreSQL",
    level: 2,
    description: [
      "서비스 데이터 조회와 테이블 구조를 이해하고 API 로직에 활용한 경험",
      "pgvector 기반 이미지 임베딩 저장/조회 및 유사도 검색 구조 이해",
    ],
  },
  {
    name: "Next.js",
    level: 3,
    description: [
      "App Router 기반 페이지와 API Route 구현 경험",
      "AI 이미지 생성/수정, 유사 매물 추천 등 AI 기능을 사용자 화면과 연결한 경험",
    ],
  },
  {
    name: "React",
    level: 3,
    description: [
      "컴포넌트 기반 UI 구현과 재사용 경험",
      "Zustand, Redux Toolkit 등을 활용한 클라이언트 상태 관리 경험",
      "사용자 입력, 로딩, 실패, 결과 화면을 고려한 인터랙션 구현 경험",
    ],
  },
  {
    name: "TypeScript",
    level: 3,
    description: [
      "API 응답 타입과 컴포넌트 props를 정의해 안정적인 화면 구현 가능",
      "정적 타입과 인터페이스를 활용한 소규모 서비스 개발 경험",
    ],
  },
  {
    name: "JavaScript",
    level: 3,
    description: [
      "ES6+ 문법을 활용한 웹 서비스 기능 구현 가능",
      "비동기 처리, API 통신, 상태 관리 로직 구현 경험",
    ],
  },
  {
    name: "HTML/CSS",
    level: 2,
    description: [
      "반응형 화면과 기본적인 UI 스타일링 구현 가능",
      "Tailwind CSS 기반 레이아웃과 컴포넌트 스타일링 경험",
    ],
  },
];

export const toolsInfo: ToolInfo[] = [
  {
    name: "Git / GitHub",
    level: 3,
    description: [
      "Issue, PR, 브랜치 전략을 활용한 협업 및 개발 이력 관리 경험",
      "PM 역할로 기능 우선순위 설정과 작업 분배를 진행한 경험",
    ],
  },
  {
    name: "Docker",
    level: 2,
    description: [
      "프론트엔드와 백엔드 서비스를 컨테이너 기반으로 실행하는 흐름 이해",
      "Docker Compose를 활용한 배포 환경 구성 경험",
    ],
  },
  {
    name: "AWS",
    level: 2,
    description: [
      "EC2, RDS, S3를 활용한 서비스 인프라 구성 흐름 이해",
      "이미지 저장소와 데이터베이스를 서비스 기능과 연동한 경험",
    ],
  },
  {
    name: "Jenkins",
    level: 2,
    description: [
      "GitHub Webhook과 Docker 기반 CI/CD 자동 배포 환경 구성 경험",
      "팀 프로젝트에서 배포 파이프라인을 이해하고 적용한 경험",
    ],
  },
  {
    name: "Figma",
    level: 2,
    description: [
      "프로젝트 초기 UI/UX 구성과 화면 흐름 설계 경험",
      "사용자 관점에서 필요한 정보 배치와 화면 구조를 고민한 경험",
    ],
  },
  {
    name: "Jira / Notion",
    level: 2,
    description: [
      "프로젝트 일정, 회의 내용, 기능 요구사항을 문서화한 경험",
      "팀 작업 현황과 우선순위를 공유하며 협업한 경험",
    ],
  },
];
