import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logopng from "../img/logo.png";
import bgpng from "../img/bg.png";
import anime from "animejs/lib/anime.es.js";

interface Props {
  onFinish: () => void;
}

export const Loader: React.FC<Props> = ({ onFinish }) => {
  const [isMounted, setIsMounted] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isMounted) {
      animateLogo();
    }
  }, [isMounted]);

  const animateLogo = () => {
    anime({
      targets: logoRef.current,
      opacity: [0, 1],
      duration: 1300,
      easing: "linear",
      complete: () => {
        anime({
          targets: logoRef.current,
          opacity: [1, 0],
          duration: 1100,
          easing: "linear",
          complete: () => {
            setTimeout(() => {
              onFinish();
            }, 170);
          },
        });
      },
    });
  };
  

  return (
    <>
    <StyledContainer src={bgpng} alt="Logo">
      <StyledLoader>
        <StyledLogo ref={logoRef} src={logopng} alt="Logo" />
      </StyledLoader>
      </StyledContainer>
    </>
  );
};

const StyledLogo = styled.img`
  width: 10rem;
  height: 10rem;
`;

const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledContainer = styled.img`
@media (max-width: 560px) {
  height: 81.2vh;
}
`;
