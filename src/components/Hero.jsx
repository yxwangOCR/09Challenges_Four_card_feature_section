import React from "react";
import styled from "styled-components";

const StyledHero = styled.section`
  padding: 2rem 1rem;
  width: 300px;
  @media (min-width: 992px) {
    width: 500px;
  } ;
`;

const Title = styled.h1`
  color: hsl(234, 12%, 34%);
  text-align: center;
  font-weight: 200;
  margin: 0;
`;
const Subtitle = styled.h2`
  color: hsl(234, 12%, 34%);
  text-align: center;
  font-weight: 600;
  margin: 0;
`;

const Text = styled.p`
  color: hsl(229, 6%, 66%);
  text-align: center;
  font-weight: 400;
  font-size: 0.9rem;
`;
const Hero = () => {
  return (
    <StyledHero>
      <Title>Reliable, efficient delivery</Title>
      <Subtitle>Powered by Technology</Subtitle>
      <Text>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </Text>
    </StyledHero>
  );
};

export default Hero;
