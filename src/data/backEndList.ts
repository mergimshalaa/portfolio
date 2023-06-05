import { FaNodeJs, FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

interface TechItem {
  image: React.ElementType;
  color: string;
}

export const techItems: TechItem[] = [
  {
    image: FaNode,
    color: "#FFFFFF",
  },
  {
    image: FaNodeJs,
    color: "#3C873A",
  },
  {
    image: SiMongodb,
    color: "#589636",
  },
];
