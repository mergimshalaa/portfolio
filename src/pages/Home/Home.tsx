import styled from "styled-components";
import Typewriter from "typewriter-effect";

export function Home() {
  return (
    <>
      <Container>
        <Content>
          <Title>
            <FirstLetterStyle>M</FirstLetterStyle>ergim{" "}
            <FirstLetterStyle>S</FirstLetterStyle>hala
          </Title>
          <Subtitle>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Future Fullstack Developer",
                  "HTML/CSS",
                  "Javascript/Typescript",
                  "React/Vue",
                  "Node/GIT",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 35,
                delay: 100,
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDeleteSpeed(20)
                  .start()
              }}
            />
          </Subtitle>
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
  height: 77vh;

  @media (max-width: 560px) {
    height: 78vh;
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
  letter-spacing: 2px;
  color: white;
  margin-bottom: 1rem;
  vertical-align: top;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 875px) {
    font-size: 3rem;
  }

  @media (max-width: 575px) {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    margin-left: 3px;
  }

  @media (max-width: 380px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.h2`
  letter-spacing: 1.5px;
  font-size: 3rem;
  color: white;
  margin: 0;
  height: 4.5rem;
  vertical-align: top;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 875px) {
    font-size: 2.5rem;
    height: 3.5rem;
  }

  @media (max-width: 575px) {
    font-size: 2rem;
    height: auto;
    margin-left: 3px;
    height: 3.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }

  @media (max-width: 380px) {
    font-size: 1.5rem;
  }
`;

const FirstLetterStyle = styled.span`
  color: #a4907c;
`;
