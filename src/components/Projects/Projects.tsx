import styled from "styled-components";
import { VideoCard } from "./VideoCard";
import applecopyVideo from "../Projects/videos/applecopy.mp4";
import savegbgVideo from "../Projects/videos/savegbg.mp4";
import weatherappVideo from "../Projects/videos/weatherapp.mp4";
import weatherappreactVideo from "../Projects/videos/weatherappreact.mp4";
import codifywebsiteVideo from "../Projects/videos/codifywebsite.mp4";
import { Footer } from "../Footer";

export function Projects() {
  return (
    <>
      <Styledh1>My Projects</Styledh1>
      <ProjectCard>
        <CardDeck>
          <StyledVideoCard
            title="Weather App"
            description="This was my first project working with API, I created a weather app displaying current weather with the date."
            videoSrc={weatherappVideo}
            link="https://mergimshalaa.github.io/weatherApp/"
          />
          <StyledVideoCard
            title="Save Gothenburg"
            description="Schoolproject where we as a group of five persons created a game with OOP and with library p5.js and Typescript."
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
            title="Codify - Still in process"
            description="Created a startup for a website and it is still in process. This is created with HTML, CSS and Vanilla Javascript."
            videoSrc={codifywebsiteVideo}
            link="https://mergimshalaa.github.io/Codify-website/"
          />
          <StyledVideoCard
            title="Apple Website copy"
            description="First school project were me and another class member created this apple copy working with HTML & CSS."
            videoSrc={applecopyVideo}
            link="https://mergimshalaa.github.io/Apple-Hemsida/"
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
`;

const CardDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;
  width: 100%
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
    color: #333;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
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
