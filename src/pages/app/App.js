import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

import { Quotes } from "../../components";
import { Footer } from "../../components";
import { Navbar } from "../../components";
import { getQuote } from "../../services";
import { randomValue } from "../../helpers";
import { removeSpaces } from "../../helpers";
import { dict } from "../../constants";
import { NARUTO } from "../../constants";
import btnSound from "../../sounds/jutsu.mp3";

const btnAudio = new Audio(btnSound);
const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CharImage = styled.img`
  max-width: 50vw;
  filter: drop-shadow(3px 3px 7px rgba(0, 0, 0, 0.75));
  z-index: 2;
`;

export const App = () => {
  const nodeRef = useRef(null);
  const isMounted = useRef(true);
  const [tick, setTick] = useState(true);
  const [quoteState, setQuoteState] = useState({
    quote:
      "Bem vindo ao Naruto Quotes! Clique no botão para gerar frases aleatórias dos personagens de Naruto. Tô certo, dattebayooo!!!",
    speaker: "dev: Thiago Miranda",
  });

  const [char, setChar] = useState(NARUTO[6]);
  const onUpdate = async () => {
    const quote = await getQuote();
    if (isMounted.current) {
      btnAudio.play();
      setQuoteState(quote);
      const imgPack = await removeSpaces(quote.speaker);
      const charImg = await randomValue(dict[imgPack].image);
      setChar(charImg);
      setTick(!tick);
    }
  };

  return (
    <div>
      <Navbar />
      <Content>
        <Quotes {...quoteState} onUpdate={onUpdate} />
        <CSSTransition
          nodeRef={nodeRef}
          in={tick}
          appear={true}
          timeout={500}
          classNames="change"
          unmountOnExit={false}
        >
          <CharImage ref={nodeRef} src={char} alt="character Chibi" />
        </CSSTransition>
      </Content>
      <Footer />
    </div>
  );
};
