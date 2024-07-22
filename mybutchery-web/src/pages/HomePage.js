// src/pages/HomePage.js
import React from "react";
import styled from "styled-components";

const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  color: #4caf50;
  margin: 20px 0;
`;

const SubHeading = styled.h2`
  color: #555;
  margin: 20px 0;
`;

const Paragraph = styled.p`
  color: #777;
  line-height: 1.6;
  margin: 20px 0;
`;

const RegisterButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Heading>Welcome to MyButchery</Heading>
      <SubHeading>Your one-stop shop for all your meat needs</SubHeading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
      <RegisterButton>Register Now</RegisterButton>
    </HomePageContainer>
  );
};

export default HomePage;
