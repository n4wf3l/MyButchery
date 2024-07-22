// src/pages/AboutPage.js
import React from "react";
import styled from "styled-components";

const AboutPageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </AboutPageContainer>
  );
};

export default AboutPage;
