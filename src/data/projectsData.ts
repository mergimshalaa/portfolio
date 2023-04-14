import applecopyVideo from "../pages/Projects/videos/applecopy.mp4";
import savegbgVideo from "../pages/Projects/videos/savegbg.mp4";
import weatherAppVideo from "../pages/Projects/videos/weatherapp.mp4";
import weatherappreactVideo from "../pages/Projects/videos/weatherappreact.mp4";
import codifywebsiteVideo from "../pages/Projects/videos/codifywebsite.mp4";
import olstugancopyVideo from "../pages/Projects/videos/olstugan-copy.mp4";
import todolistVideo from "../pages/Projects/videos/todolist.mp4";
import loginformVideo from "../pages/Projects/videos/loginform.mp4";
import cvVideo from "../pages/Projects/videos/cv.mp4";
import palimedaVideo from "../pages/Projects/videos/palimedashoes.mp4";

interface ProjectsCards {
    title: string;
    description: string;
    videoSrc: string;
    link: string;
  }
  
  export const ProjectsData: ProjectsCards[] = [
    {
      title: "Weather App",
      description:
        "This was my first project working with API, I created a weather app displaying current weather with the date.",
      videoSrc: weatherAppVideo,
      link: "https://mergimshalaa.github.io/weatherApp/",
    },
    {
      title: "Palimeda Shoes",
      description:
        "School project that was created by a group of four people using React, React Bootstrap and TypeScript to build an e-commerce platform.",
      videoSrc: palimedaVideo,
      link: "https://github.com/plugga-tech/react-webshop-ts-parham-mergim-daniel-linus",
    },
    {
      title: "Save Gothenburg",
      description:
        "School project where we as a group of six persons created a game with OOP and with library p5.js and Typescript.",
      videoSrc: savegbgVideo,
      link: "https://save-gothenburg.netlify.app/",
    },
    {
      title: "STORM by PAMEDA",
      description:
        "Miniproject, we created a web application working with API and functionality. This was created with React and Typescript.",
      videoSrc: weatherappreactVideo,
      link: "https://stormweatherappbypameda.netlify.app/",
    },
    {
      title: "Todo List",
      description:
        "Created a todo list to manage and practice Vanilla Javascript. This project was created with HTML & CSS and Javascript.",
      videoSrc: todolistVideo,
      link: "https://mergimshalaa.github.io/Todo-list/",
    },
    {
      title: "Resume",
      description:
        "Schoolproject were the task was to create an interactive & responsive resume of myself. Created with HTML & CSS and Vanilla Javascript.",
      videoSrc: cvVideo,
      link: "https://mergimshalaa.github.io/Lab-cv/",
    },
    {
      title: "Codify - Still in process",
      description:
        "Created a startup for a website and it is still in process. This project is created with HTML, CSS and Vanilla Javascript.",
      videoSrc: codifywebsiteVideo,
      link: "https://mergimshalaa.github.io/Codify-website/",
    },
    {
      title: "Ölstugan Website copy",
      description:
        "School project with two classmates, the task was to modernize a choosen website. This project was created with HTML & CSS.",
      videoSrc: olstugancopyVideo,
      link: "https://mergimshalaa.github.io/Olstugan-copy/",
    },
    {
      title: "Apple Website copy",
      description:
        "First school project were me and another classmate created this apple website copy. Created with HTML & CSS.",
      videoSrc: applecopyVideo,
      link: "https://mergimshalaa.github.io/Apple-Hemsida/",
    },
    {
      title: "Login Form Tesla copy",
      description:
        "School exercise were the task was to build Tesla login form with local storage. This project was created with HTML & CSS.",
      videoSrc: loginformVideo,
      link: "https://mergimshalaa.github.io/ovning-form/",
    },
  ];
  