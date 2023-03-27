import { useState, useEffect } from "react";
import styled from "styled-components";

const words = [
  "Frontend Developer.",
  "Future Fullstack Developer.",
  "HTML/CSS.",
  "Javascript/Typescript.",
  "React/Vue.",
  "Node/GIT.",
];

export function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIndex((prevLetterIndex) => {
        const currentWord = words[wordIndex];
        const nextLetterIndex = isErasing
          ? prevLetterIndex - 1
          : prevLetterIndex + 1;

        if (isErasing && nextLetterIndex === 0) {
          setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
          setIsErasing(false);
          return 0;
        }

        if (nextLetterIndex > currentWord.length) {
          setIsErasing(true);
          return currentWord.length;
        }

        return nextLetterIndex;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [wordIndex, isErasing]);

  const currentWord = words[wordIndex].slice(0, letterIndex);

  return (
    <>
      <Container>
        <Content>
          <Title>
            <FirstLetterStyle>M</FirstLetterStyle>ergim{" "}
            <FirstLetterStyle>S</FirstLetterStyle>hala
          </Title>
          <Subtitle>{currentWord}</Subtitle>
        </Content>
      </Container>
    </>
  );
}



const Container = styled.div`
flex-grow: 1;
display: flex;
align-items: center;
justify-content: start;
height: 81.6vh;

@media (max-width: 560px) {
  height: 81.2vh;
}
`;

const Content = styled.div`
  margin-right: 50px;
  margin-top 12rem;

  @media (max-width: 767px) {
    margin-right: 0;
  }

`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 3px;
  color: white;
  margin-bottom: 1rem;
  vertical-align: top;

  @media (max-width: 875px) {
    font-size: 3rem;
  }

  @media (max-width: 575px) {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    margin-left: 6px;
  }
`;

const Subtitle = styled.h2`
  letter-spacing: 1.5px;
  font-size: 3rem;
  color: white;
  margin: 0;
  height: 4.5rem;
  vertical-align: top;

  @media (max-width: 875px) {
    font-size: 2.5rem;
    height: 3.5rem;
  }

  @media (max-width: 575px) {
    font-size: 2rem;
    height: auto;
    margin-left: 6px;
    height: 3.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

const FirstLetterStyle = styled.span`
  color: #a4907c;
`;