import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

type VideoCardProps = {
  title: string;
  description: string;
  videoSrc: string;
  link: string;
};

export function VideoCard({
  title,
  description,
  videoSrc,
  link,
}: VideoCardProps) {
  return (
    <StyledCard>
      <Video muted autoPlay loop>
        <source src={videoSrc} type="video/mp4" />
      </Video>
      <Card.Body>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{description}</StyledText>
        <div className="text-center">
          <Link to={link}>
          <StyledButton variant="primary">Click Here</StyledButton>
          </Link>
        </div>
      </Card.Body>
    </StyledCard>
  );
}


const Video = styled.video`
  width: 100%;
`;

const StyledTitle = styled(Card.Title)`
  color: white;
  font-size: 23px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const StyledText = styled(Card.Text)`
  color: white;
  font-size: 17px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    margin-bottom: 2px;
  }
`;

const StyledCard = styled(Card)`
  height: 24.5rem;
  width: 20rem;
  border: solid 2px gray;
  box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 12px rgba(255, 255, 255, 0.4);
    transform: translateY(-5px);
  }

  > div {
    background: linear-gradient(to right, #1a1a1a, #303030);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }


  @media (max-width: 668px) {
    width: 16rem;
    height: 22.5rem;
  }

  @media (max-width: 500px) {
    width: 15rem;
    height: 19.5rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: 15px;
  padding: 10px 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 15px;
    margin-top: 15px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    padding: 3px 15px;
  }
`;
