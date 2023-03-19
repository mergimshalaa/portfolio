import styled from "styled-components";

export function Resume() {
  return (
    <>
      <Styledh1>RESUME</Styledh1>
    </>
  );

  }

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