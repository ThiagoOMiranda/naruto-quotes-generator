import React from "react";
import styled from "styled-components";

import { CustomLogo } from "../customLogo";
import { SimplePlayer } from "../simplePlayer";

const Wrapper = styled.div`
  height: 5vh;
  width: 100%;
  //background-color: rgba(0, 0, 0, 0.5);
  background: rgb(255, 193, 0);
  background: linear-gradient(0deg, gold 0%, coral 100%);
  position: fixed;
  top: 0;
  border-bottom: 5px solid darkorange;
  -webkit-box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <CustomLogo />
      <SimplePlayer />
    </Wrapper>
  );
};
