import styled from "styled-components";

export const Button = styled.button`
  background: darkOrange;
  color: #fff;
  border: none;
  border-radius: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px 20px;
  font-family: "New Tegomin", serif;
  cursor: pointer;
  box-shadow: #444 3px 3px;
  filter: drop-shadow(3px 3px 7px rgba(0, 0, 0, 0.75));
  transform-style: preserve-3d;
  transform: rotateY(-7deg);

  &:hover {
    background: palegoldenrod;
    color: #333;
  }
`;
