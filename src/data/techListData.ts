import { FaCss3Alt, FaHtml5, FaNodeJs, FaJs, FaVuejs } from "react-icons/fa";
import { SiTypescript, SiReact, SiBootstrap, SiSass } from "react-icons/si";

interface TechItem {
  image: React.ElementType;
  color: string;
}

export const techItems: TechItem[] = [
  {
    image: SiReact,
    color: "#61DBFB",
  },
  {
    image: FaVuejs,
    color: "#4FC08D",
  },
  {
    image: SiTypescript,
    color: "#007ACC",
  },
  {
    image: FaJs,
    color: "#F7DF1E",
  },
  {
    image: FaNodeJs,
    color: "#3C873A",
  },
  {
    image: SiBootstrap,
    color: "#0d6efd",
  },
  {
    image: SiSass,
    color: "#CC6699",
  },
  {
    image: FaCss3Alt,
    color: "#1572B6",
  },
  {
    image: FaHtml5,
    color: "#E34F26",
  },
];
