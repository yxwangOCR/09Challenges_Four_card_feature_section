import React from "react";
import styled from "styled-components";
import Content from "./Content";
import ImgOne from "../assets/images/icon-supervisor.svg";
import ImgTwo from "../assets/images/icon-team-builder.svg";
import ImgThree from "../assets/images/icon-karma.svg";
import ImgFour from "../assets/images/icon-calculator.svg";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 0 2rem 0;

  @media (min-width: 992px) {
    flex-direction: row;
  } ;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StyledCard = styled.div`
  background-color: white;
  width: 300px;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-top: 5px solid ${(props) => props.theme.borderColor};
`;

const StyledContent = styled(Content)`
  width: 80%;
  margin: 0 auto;
`;

const Text = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
`;

const Image = styled.img`
  width: 65px;
  height: 65px;
  position: relative;
  right: -12rem;
`;

const theme = {
  borderColor: "black",
  textColor: "black",
  fontSize: "1rem",
  fontWeight: "600",
};

const Card = () => {
  return (
    <StyledCardContainer>
      <StyledCol className='col-one'>
        <StyledCard theme={{ borderColor: "hsl(180, 62%, 55%)" }}>
          <StyledContent>
            <Text
              theme={{
                textColor: "hsl(234, 12%, 34%)",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}>
              Supervisor
            </Text>
            <Text
              theme={{
                textColor: "hsl(229, 6%, 66%)",
                fontSize: "0.8rem",
                fontWeight: "200",
              }}>
              Monitors activity to identify project roadblocks
            </Text>
            <Image src={ImgOne} alt='Loop' />
          </StyledContent>
        </StyledCard>
      </StyledCol>

      <StyledCol className='col-two'>
        <StyledCard theme={{ borderColor: "hsl(0, 78%, 62%)" }}>
          <StyledContent>
            <Text
              theme={{
                textColor: "hsl(234, 12%, 34%)",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}>
              Team Builder
            </Text>
            <Text
              theme={{
                textColor: "hsl(229, 6%, 66%)",
                fontSize: "0.8rem",
                fontWeight: "200",
              }}>
              Scans our talent network to create the optimal team for your
              project
            </Text>
            <Image src={ImgTwo} alt='Building' />
          </StyledContent>
        </StyledCard>
        <StyledCard theme={{ borderColor: "hsl(34, 97%, 64%)" }}>
          <StyledContent>
            <Text
              theme={{
                textColor: "hsl(234, 12%, 34%)",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}>
              Karma
            </Text>
            <Text
              theme={{
                textColor: "hsl(229, 6%, 66%)",
                fontSize: "0.8rem",
                fontWeight: "200",
              }}>
              Regularly evaluates our talent to ensure quality
            </Text>
            <Image src={ImgThree} alt='Light' />
          </StyledContent>
        </StyledCard>
      </StyledCol>

      <StyledCol className='col-three'>
        <StyledCard theme={{ borderColor: "hsl(212, 86%, 64%)" }}>
          <StyledContent>
            <Text
              theme={{
                textColor: "hsl(234, 12%, 34%)",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}>
              Calculator
            </Text>
            <Text
              theme={{
                textColor: "hsl(229, 6%, 66%)",
                fontSize: "0.8rem",
                fontWeight: "200",
              }}>
              Uses data from past projects to provide better delivery estimates
            </Text>
            <Image src={ImgFour} alt='Computer' />
          </StyledContent>
        </StyledCard>
      </StyledCol>
    </StyledCardContainer>
  );
};

export default Card;
