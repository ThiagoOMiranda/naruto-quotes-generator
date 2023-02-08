import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";

import { Button } from "../../components";

const Quote = styled.p`
  font-size: 1.7em;
  margin: 0;
  word-break: break-word;
  max-width: 25em;
`;

const Speaker = styled(Quote)`
  text-align: right;
`;

const SpeechBallon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #444;
  padding: 0.5em 1.5em;
  margin-bottom: 45px;
  border-radius: 1em;
  transform: rotateY(-4deg);
  transform-style: preserve-3d;
  filter: drop-shadow(3px 3px 7px rgba(0, 0, 0, 0.75));

  &:after {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    transform: rotate(1deg) translate(0.35em, -0.15em) scale(1.02);
    background: #f4fbfe;
  }

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    border-right: solid 5em #f4fbfe;
    border-bottom: solid 1rem #444;
    bottom: 0.1em;
    right: 1em;
    transform: rotate(45deg) skewX(75deg);
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  perspective: 15em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <SpeechBallon>
        <Quote>"{quote}"</Quote>
        <Speaker>- {speaker}</Speaker>
      </SpeechBallon>
      <Button onClick={onUpdate}>Próxima frase</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func,
};
