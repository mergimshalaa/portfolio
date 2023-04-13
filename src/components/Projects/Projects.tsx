import styled from "styled-components";
import { VideoCard } from "./VideoCard";
import applecopyVideo from "../Projects/videos/applecopy.mp4";
import savegbgVideo from "../Projects/videos/savegbg.mp4";
import weatherAppVideo from "../Projects/videos/weatherapp.mp4";
import weatherappreactVideo from "../Projects/videos/weatherappreact.mp4";
import codifywebsiteVideo from "../Projects/videos/codifywebsite.mp4";
import olstugancopyVideo from "../Projects/videos/olstugan-copy.mp4";
import todolistVideo from "../Projects/videos/todolist.mp4";
import loginformVideo from "../Projects/videos/loginform.mp4";
import cvVideo from "../Projects/videos/cv.mp4";
import palimedaVideo from "../Projects/videos/palimedashoes.mp4";

export function Projects() {
  return (
    <>
      <Styledh1>My Projects</Styledh1>
      <ProjectCard>
        <CardDeck>
          <StyledVideoCard
            title="Weather App"
            description="This was my first project working with API, I created a weather app displaying current weather with the date."
            videoSrc={weatherAppVideo}
            link="https://mergimshalaa.github.io/weatherApp/"
          />
          <StyledVideoCard
            title="Palimeda Shoes"
            description="School project that was created by a group of four people using React, React Bootstrap and TypeScript to build an e-commerce platform."
            videoSrc={palimedaVideo}
            link="https://github.com/plugga-tech/react-webshop-ts-parham-mergim-daniel-linus"
          />
          <StyledVideoCard
            title="Save Gothenburg"
            description="School project where we as a group of six persons created a game with OOP and with library p5.js and Typescript."
            videoSrc={savegbgVideo}
            link="https://save-gothenburg.netlify.app/"
          />
          <StyledVideoCard
            title="STORM by PAMEDA"
            description="Miniproject, we created a web application working with API and functionality. This was created with React and Typescript."
            videoSrc={weatherappreactVideo}
            link="https://stormweatherappbypameda.netlify.app/"
          />
          <StyledVideoCard
            title="Todo List"
            description="Created a todo list to manage and practice Vanilla Javascript. This project was created with HTML & CSS and Javascript."
            videoSrc={todolistVideo}
            link="https://mergimshalaa.github.io/Todo-list/"
          />
          <StyledVideoCard
            title="Resume"
            description="Schoolproject were the task was to create an interactive & responsive resume of myself. Created with HTML & CSS and Vanilla Javascript."
            videoSrc={cvVideo}
            link="https://mergimshalaa.github.io/Lab-cv/"
          />
          <StyledVideoCard
            title="Codify - Still in process"
            description="Created a startup for a website and it is still in process. This project is created with HTML, CSS and Vanilla Javascript."
            videoSrc={codifywebsiteVideo}
            link="https://mergimshalaa.github.io/Codify-website/"
          />
          <StyledVideoCard
            title="Ölstugan Website copy"
            description="School project with two classmates, the task was to modernize a choosen website. This project was created with HTML & CSS."
            videoSrc={olstugancopyVideo}
            link="https://mergimshalaa.github.io/Olstugan-copy/"
          />
          <StyledVideoCard
            title="Apple Website copy"
            description="First school project were me and another classmate created this apple website copy. Created with HTML & CSS."
            videoSrc={applecopyVideo}
            link="https://mergimshalaa.github.io/Apple-Hemsida/"
          />
          <StyledVideoCard
            title="Login Form Tesla copy"
            description="School exercise were the task was to build Tesla login form with local storage. This project was created with HTML & CSS."
            videoSrc={loginformVideo}
            link="https://mergimshalaa.github.io/ovning-form/"
          />
        </CardDeck>
      </ProjectCard>
    </>
  );
}

const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 50px;
  margin-bottom: 30px;
`;

const CardDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;
  width: 100%;
`;

const Styledh1 = styled.h1`
  margin: 2rem 0 1rem 0;
  font-size: 36px;
  margin-bottom: 2rem;
  font-weight: bold;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #222;
  background-color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 10px 16px;
  }

  @media (max-width: 380px) {
    font-size: 20px;
    padding: 6px 12px;
  }
`;

const StyledVideoCard = styled(VideoCard)`
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;
