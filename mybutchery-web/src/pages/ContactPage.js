// src/pages/ContactPage.js
import React from "react";
import styled from "styled-components";

const ContactPageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </ContactPageContainer>
  );
};

export default ContactPage;
