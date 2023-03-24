import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


export function Footer() {
  return (
    <FooterWrapper>
      <FooterText>Created by Mergim Shala 2023</FooterText>
      <IconWrapper>
        <a href="https://github.com/mergimshalaa">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mergim-shala-230691220/">
          <FaLinkedin />
        </a>
        <a href="mailto:m3rgiim@hotmail.com">
          <FaEnvelope />
        </a>
      </IconWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  --bs-bg-opacity: 1;
  background-color: rgb(7, 13, 38);
  color: #fff;
  left:0;
  right: 0;
  position: relative;
  width: 100%;
  padding: 10px;
`;

const FooterText = styled.div`
  margin-bottom: 2px;
  font-size: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  & > * {
    margin: 0 1rem;
    font-size: 1.3rem;
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #b3b3b3;
    }
  }
`;