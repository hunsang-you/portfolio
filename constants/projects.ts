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

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: (StaticImageData | string)[]; // 이미지, GIF, MP4 모두 포함 가능
  tags: string[];
  github: string;
  redirect: string | null;
  demo?: string;
  duration?: string;
  team?: string;
  features?: string[];
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AightNow(아잇나우)",
    description:
      "Next.js를 이용한 해외 주식 뉴스 실시간 번역과 AI 애널리스트가 알려주는 어려운 해외주식 AI 리포트를 제공하는 웹 서비스 입니다.",
    detailedDescription:
      "Next.js를 이용한 해외 주식 뉴스 실시간 번역과 AI 애널리스트가 알려주는 어려운 해외주식 AI 리포트를 제공하는 웹 서비스 입니다. 일 경험 프로그램의 프로젝트 캠프 Next.js 1기에 참여하여 기업 연계로 프로젝트를 진행하였습니다. 저는 해외 주식 검색 및 검색된 주식과 관련된 해외 뉴스 제공, OpenAI를 이용한 AI 챗봇 구현, 이미지 최적화를 담당했습니다",
    image: [AightNow, AightNow2, AightNow3],
    tags: ["Next.js", "Typescript", "zustand", "Supabase"],
    github: "https://github.com/NextCamp-8B/8B-SF",
    redirect: "https://8b-test.vercel.app/ko",
    duration: "2024.06 - 2024.08 (2개월)",
    team: "팀 프로젝트(4인)",
    features: [
      "OpenAI를 이용한 주식 데이터 분석 및 챗봇 기능 구현",
      "llama3를 이용한 해외 뉴스 요약 및 DeepL을 이용한 해외 뉴스 번역",
      "국제화 작업을 통해 한국어 뿐만 아니라 영어, 일본어, 중국어, 프랑스어로 다양한 유저층의 이용 가능",
      "주식 검색 및 검색된 주식과 관련된 해외 뉴스를 조회 가능",
    ],
    challenges: [
      "Next.js와 supabase를 사용하면서 API 구현, DB를 이용하면서 초반 설계의 중요성을 알 수 있었고 이는 추후 백엔드 개발자와 소통을 해야할 때 좋은 밑거름이 되었다고 생각합니다",
      "AI를 이용한 챗봇을 만들면서 처음 프롬프트 엔지니어링을 경험해 보았는데, 텍스트로 넘어오는 답변의 정확도만 신경을 쓰다보니 챗봇 자체의 UI와 부가 정보 제공을 생각하지 못한 것이 아쉽습니다",
      "개발 막바지에 뉴스페이지의 Card 컴포넌트의 최적화를 진행하면서, Lighthouse의 성능이 89점에서 더 향상되지 않았던 문제가 있었다. 그 순간에는 이미지만 최적화하면 성능이 올라갈 것이라고 생각하여 이미지 최적화에만 집중하였지만,추후에 Card 컴포넌트에 들어가는 폰트를 최적화 하는 것을 생각했고, 성능을 99점까지 향상시킬 수 있었다. 눈에 보이는 특정부분만 신경 쓸 것이 아닌, 더 넓은 부분을 고려하고 신경 써야 한다는 것을 깨달을 수 있는 기회가 됐다",
    ],
  },
  {
    id: 2,
    title: "CoffeeBrew(커피브루)",
    description:
      "빅데이터 추천 시스템을 이용한 커피 원두 추천 사이트입니다. 커피를 즐겨 마시지만, 본인의 커피(원두) 취향을 잘 모르는 일반 사용자들이 추천 시스템을 통해 다양한 커피를 접해보고 본인에게 맞는 커피를 찾아갈 수 있도록 도움을 주기위한 서비스입니다",
    detailedDescription:
      "빅데이터 추천 시스템을 이용한 커피 원두 추천 사이트입니다. 저는 원두 전체 목록 페이지와 원두 상세 페이지, 유저 프로필 페이지 및 키워드 검색 기능을 구현했습니다.",
    image: [CoffeeBrew, CoffeeBrew2, CoffeeBrew3, CoffeeBrew4],
    tags: ["React", "Typescript", "Redux-toolkit"],
    github: "https://github.com/hunsang-you/coffeebrew",
    redirect: null,
    duration: "2023.02 - 2023.04 (2개월)",
    team: "팀 프로젝트(6인, FE-3/BE-3)",
    features: [
      "유저 성향 설문조사, 리뷰 데이터를 활용하여 사용자의 취향에 맞는 커피 추천 기능",
      "전 세계의 다양한 원두, 캡슐 정보 제공",
      "특정 원두, 캡슐의 구매 링크를 제공",
      "사용자의 취향 및 선호도 정보 제공",
      "이름 검색 or 키워드 별 검색을 통한 해당 원두 및 캡슐 검색",
    ],
    challenges: [
      "TypeScript를 사용하면서,  처음에는 타입 및 인터페이스 정의에 익숙치 않았지만, 개발을 진행하면서 적절히 정의할 수 있게 됐고, 첫 프로젝트를 진행할 때보다 개인적인 역량이 많이 발전했다고 생각됨",
      "원두 상세 페이지를 완성하는 과정에서, 처음 화면을 여러 부가적인 정보를 추가하여 구성하였지만, 시간의 부족으로 그대로 진행하기가 어려웠고, 정말 필요하다고 생각되는 데이터만 최선으로 구성할 수 있도록 재 구성했던 것이 아쉬움",
      "여러 페이지와 데이터 시각화를 하면서 이미지 최적화를 생각하지 못한 것이 아쉽습니다",
    ],
  },
  {
    id: 3,
    title: "MiriStock(미리스톡)",
    description:
      "React, Javascript로 구현한 과거 데이터로 미리 해보는 주식투자 시뮬레이션 웹사이트입니다.",
    detailedDescription:
      "React, Javascript로 구현한 과거 데이터로 미리 해보는 주식투자 시뮬레이션 웹사이트입니다. 사용자 친화적인 UI/UX를 중심으로 설계했으며, 저는 Q&A 게시판, 주식 검색 및 최근 조회, 추가 메뉴, 유저 포트폴리오를 구현했습니다.",
    image: [MiriStock, MiriStock2, MiriStock3, MiriStock4, MiriStock5],
    tags: ["React", "JavaScript", "zustand"],
    github: "https://github.com/hunsang-you/MiriStock",
    redirect: null,
    duration: "2023.01 - 2023.02 (2개월)",
    team: "팀 프로젝트(5인, FE-3/BE-2)",
    features: [
      "모바일 웹 서비스로 모바일 화면에 최적화",
      "과거 실제 주식 데이터 조회 및 차트 표시",
      "모의 투자 및 포트폴리오 관리",
      "유저들간의 소통이 가능한 게시판",
      "서비스 이용자는 시뮬레이션 시점을 1일, 7일, 30일 이후로 설정 할 수 있음",
    ],
    challenges: [
      "첫 프로젝트 경험으로 프로젝트의 전반적인 싸이클을 알게된 계기",
      "모바일 위주의 사용을 목적으로 한 웹서비스 였기 때문에 보다 더 나은 화면 구성을 위한 고민과, 유저에게 정말 필요한 데이터가 무��일지 고민해보고, 이를 차트 라이브러리를 이용하여 시각적으로 도움을 주고자 하였습니다",
      "Figma로 화면을 디자인, 설계 하는 과정에서 사용자 경험을 고려한 직관적인 UI 설계를 위해 고민할 수 있었습니다",
    ],
  },
];
