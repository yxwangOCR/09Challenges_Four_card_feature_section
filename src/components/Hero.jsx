import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;
const Subtitle = styled.h2`
  color: blue;
  background-color: yellow;
`;

const Text = styled.p`
  color: green;
  background-color: yellow;
`;
const Hero = () => {
  return (
    <>
      <Title>Reliable, efficient delivery</Title>
      <Subtitle>Powered by Technology</Subtitle>
      <Text>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </Text>
    </>
  );
};

export default Hero;
