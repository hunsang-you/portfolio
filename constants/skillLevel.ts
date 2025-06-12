// 스킬 정보 타입 정의
interface SkillInfo {
  name: string;
  level: number; // 1-5 레벨
  description: string[];
}

// 툴 정보 타입 정의
interface ToolInfo {
  name: string;
  level: number; // 1-5 레벨
  description: string[];
}

// 스킬 정보 데이터
export const skillsInfo: SkillInfo[] = [
  {
    name: "JavaScript",
    level: 3,
    description: [
      "ES6+ 문법을 사용하여 이를 활용하여 소규모 프로젝트 진행 가능",
      "필요한 라이브러리를 문서를 참고하여 프로젝트에 활용 가능",
      "상태 관리, 비동기 처리, API 통신 등의 기능 구현",
    ],
  },
  {
    name: "TypeScript",
    level: 3,
    description: [
      "정적 타입 및 인터페이스를 사용하여 변수, 함수, 객체 등의 타입을 적절하게 정의하고, 타입 호환성을 검사할 수 있음",
      "제네릭을 사용하여 재사용 가능한 컴포넌트 또는 함수를 작성할 수 있음",
    ],
  },
  {
    name: "React",
    level: 3,
    description: [
      "React 컴포넌트를 작성하고 재사용 및 활용 가능",
      "Router를 사용하여 다양한 페이지 간의 전환 가능",
      "상태 관리 라이브러리(Redux, Zustand) 활용 경험",
      "Material UI, Chart 라이브러리, TailwindCSS 등 다양한 라이브러리를 필요한 영역에 활용",
    ],
  },
  {
    name: "Next.js",
    level: 2,
    description: [
      "페이지 구성을 위한 라우터 구조 및 문법 숙지",
      "컴포넌트화 및 소규모 프로젝트 가능",
    ],
  },
  {
    name: "HTML/CSS",
    level: 2,
    description: [
      "반응형 웹 디자인 구현 가능",
      "CSS 애니메이션 및 트랜지션 활용",
    ],
  },
  {
    name: "Python",
    level: 2,
    description: [
      "기본 문법 이해 및 간단한 스크립트 작성 가능",
      "알고리즘 문제 해결에 활용",
    ],
  },
];

// 툴 정보 데이터
export const toolsInfo: ToolInfo[] = [
  {
    name: "Git",
    level: 2,
    description: [
      "브랜치 전략을 활용한 협업 경험",
      "GitHub 기반 프로젝트 관리 경험",
    ],
  },
  {
    name: "Figma",
    level: 2,
    description: [
      "디자인 시안 확인 및 개발 적용 가능",
      "프로토타입 제작 및 공유 경험",
      "간단한 프로젝트 UI/UX 구성 가능",
    ],
  },
  {
    name: "notion",
    level: 2,
    description: [
      "팀 문서화 및 지식 베이스 구축",
      "프로젝트 일정 및 작업 관리",
    ],
  },
  {
    name: "discord",
    level: 3,
    description: ["팀 커뮤니케이션 및 화상 회의", "개발 관련 커뮤니티 참여"],
  },
];
