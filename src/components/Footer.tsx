import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


export function Footer() {
  return (
    <FooterWrapper>
      <FooterText>Created by Mergim Shala 2023</FooterText>
      <div>
        <a href="https://github.com/mergimshalaa">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mergim-shala-230691220/">
          <FaLinkedin />
        </a>
        <a href="mailto:m3rgiim@hotmail.com">
          <FaEnvelope />
        </a>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important;
  color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
`;

const FooterText = styled.div`
  margin-bottom: 1px;
  font-size: 13px;
`;

