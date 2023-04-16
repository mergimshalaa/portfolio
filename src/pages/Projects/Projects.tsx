import styled from "styled-components";
import { VideoCard } from "./VideoCard";
import { ProjectsData } from "../../data/projectsData";

export function Projects() {
  return (
    <>
      <Styledh1>My Projects</Styledh1>
      <ProjectCard>
        <CardDeck>
          {ProjectsData.map((project) => (
            <StyledVideoCard
              key={project.title}
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
              link={project.link}
            />
          ))}
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
