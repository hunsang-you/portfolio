import type { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: StaticImageData | string;
  tags: string[];
  github: string;
  demo?: string;
  duration?: string;
  team?: string;
  features?: string[];
  challenges?: string[];
}
