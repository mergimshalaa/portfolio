import styled from "styled-components";
import { CarouselPics } from "./Carousel";
import { TechList } from "./TechList";
import { ToolsList } from "./ToolsList";
import { Footer } from "../Footer";

export function About() {
  return (
    <>
      <Styledh1>ABOUT</Styledh1>
      <Wrapper>
        <TextWrap>
          <Styledh2>Hi!</Styledh2>
          <StyledText>
            I am studying as a Front End Developer at Medieinstitutet in
            Gothenburg and have gained a strong understanding of HTML, CSS, and
            JavaScript, as well as the frameworks Vue and React. My ambition to
            constantly learn new techniques and skills drives me to always
            strive for improvement. I am convinced that I will have the
            opportunity to do this through my internship.
          </StyledText>
          <StyledText>
            As a passionate Front End Developer, I am actively seeking an
            internship to enhance my skills in web development and contribute to
            the growth of the company. My background as an elite football player
            has taught me the importance of hard work, perseverance and
            teamwork, which I have successfully applied in my career in
            technology.
          </StyledText>
          <StyledText>
            Outside of work and studies, I enjoy traveling and playing chess.
            These are two of my favorite pastimes, and they provide me with an
            escape from the stresses of daily life and allow me to unwind and
            recharge. Whether I am exploring new destinations or strategizing my
            next move on the chessboard, these activities bring me
            joy and a sense of calm.
          </StyledText>
        </TextWrap>

        <CarouselPics />
      </Wrapper>
      <TechList />
      <ToolsList />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextWrap = styled.div`
  flex: 1;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Styledh2 = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 520px) {
    font-size: 1.5rem;
    margin-left: 10px;
  }
`;

const StyledText = styled.p`
  color: white;
  font-size: 1.1rem;
  line-height: 1.5;

  @media (max-width: 520px) {
    font-size: 1rem;
    margin-left: 10px;
  }
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
