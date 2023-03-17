import { useState, useEffect } from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import myImage from "../img/chesss.png";

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
      <ImageWrap>
        <img
          style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" }}
          src={myImage}
          alt="My Image"
        />
      </ImageWrap>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex: start;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 15rem;

  @media (max-width: 470px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Content = styled.div`
  margin-left: 50px;

  @media (max-width: 470px) {
    margin-left: 10px;
    margin-bottom: 12rem;
  }
  @media (max-width: 1193px) {
    margin-left: 10px;
    margin-bottom: 12rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 3px;
  color: white;
  margin-bottom: 0;
  vertical-align: top;

  @media (max-width: 575px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  letter-spacing: 1.5px;
  font-size: 3rem;
  color: white;
  margin-top: 0;
  height: 4.5rem;
  vertical-align: top;

  @media (max-width: 470px) {
    font-size: 2rem;
  }
`;

const FirstLetterStyle = styled.span`
  color: #a4907c;
`;

const ImageWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  margin-top: 12rem;
  opacity: 0.7;
  max-width: 100%;
  // box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    order: -1;
  }

  img {
    height: auto;
    opacity: 0.7; /* Add opacity to the image */
  }

  @media (max-width: 575px) {
    widht: 145px;
    height: 260px;
    padding: 5px 0px;
    margin-top: 19.2rem;
  }
`;
