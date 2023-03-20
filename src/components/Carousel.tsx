import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import ksamilImage from "../img/ksamil.jpg";
import chessImage from "../img/chess.jpg";
import fotbollImage from "../img/fotboll.png";


export function CarouselPics() {
  return (
    <>
        <CarouselWrap>
          <Carousel>
          <Carousel.Item>
              <StyledImg src={fotbollImage} alt="playing soccer" />
            </Carousel.Item>
            <Carousel.Item>
              <StyledImg src={ksamilImage} alt="ocean" />
            </Carousel.Item>
            <Carousel.Item>
              <StyledImg src={chessImage} alt="chess pieces" />
            </Carousel.Item>
          </Carousel>
        </CarouselWrap>
    </>
  );
}

const CarouselWrap = styled.div`
  flex: 1;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-left: 7rem; 

  .carousel {
    width: 500px;
  }

  @media (max-width: 992px) {
    margin-left: 0rem; 
  }

  @media (max-width: 768px) {
    margin: 3rem 0; 
    margin-left: 0rem; 
  }

  @media (max-width: 520px) {
    .carousel {
      width: 300px;
    }
  }
`;

const StyledImg = styled.img`
  border-radius: 3%;
  width: 500px;
  height: 500px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
`;