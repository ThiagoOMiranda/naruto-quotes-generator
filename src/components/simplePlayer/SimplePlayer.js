import React, { useState } from "react";
import ReactHowler from "react-howler";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faMusic } from "@fortawesome/free-solid-svg-icons";
import song from "../../sounds/konoha.mp3";

const PlayStopBtn = styled.button`
  height: 2.3rem;
  width: 2.3rem;
  border-radius: 50%;
  border: 3px solid #aaa;
  //background-color: #f4fbfe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  filter: drop-shadow(3px 3px 7px rgba(0, 0, 0, 0.75));
  background: #d1d1d1;
  box-shadow: inset 5px 5px 10px #545454, inset -5px -5px 10px #ffffff;
  cursor: pointer;
  &:hover {
    background: #666666;
    box-shadow: inset 5px 5px 20px #292929, inset -5px -5px 20px #a3a3a3;
    color: #eee;
    border-color: #555;
  }
`;

const LoadMedia = styled(PlayStopBtn)`
  height: 2.3rem;
  width: 2.3rem;
  border-color: #555;
  color: #fff;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  //filter: drop-shadow(3px 3px 7px rgba(0, 0, 0, 0.75));
  background: #545454;
  box-shadow: inset 5px 5px 10px #2a2a2a, inset -5px -5px 10px #7e7e7e;
  cursor: pointer;
  &:hover {
    background: #c7c7c7;
    box-shadow: inset 5px 5px 10px #505050, inset -5px -5px 10px #ffffff;
    color: #333;
    border-color: #aaa;
  }
`;

const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  height: inherit;
`;

const TextWrapper = styled.div`
  position: absolute;
  right: 4rem;
  width: 13.5rem;
  height: inherit;
  overflow-x: hidden;
  //background: rgba(255, 255, 255, 0.85);
  background: linear-gradient(to bottom, #eee, #eee 50%, #fff 50%, #fff);
  background-size: 100% 5px;
  border-radius: 3vmin;
  box-shadow: inset 1px 1px 10px 2px rgba(0, 0, 0, 0.85);
`;

const Info = styled.span`
  display: block;
  width: 100%;
  white-space: nowrap;
  transform: translateX(100%);
  font-weight: bold;
  font-size: 1.25rem;
`;

export const SimplePlayer = () => {
  const [play, setPlay] = useState(false);
  const handlePlay = () => setPlay(true);
  const handlePause = () => setPlay(false);
  const [load, setLoad] = useState(false);
  const initializeButton = (
    <div>
      <LoadMedia onClick={(e) => setLoad(true)}>
        <FontAwesomeIcon
          icon={faMusic}
          size="lg"
          className={!play ? "" : "blink"}
        />
      </LoadMedia>
    </div>
  );
  const playButton = (
    <div>
      <ReactHowler src={song} playing={!play} loop={true} />
      <PlayStopBtn onClick={!play ? handlePlay : handlePause}>
        <FontAwesomeIcon
          icon={!play ? faPause : faPlay}
          size="lg"
          className={play ? "" : "blink"}
        />
      </PlayStopBtn>
    </div>
  );
  const infoLoad = "Clique no botão para carregar a trilha sonora.";
  const infoPlay = "Soundtrack:  Afternoon of konoha";
  return (
    <PlayerWrapper>
      <TextWrapper>
        <Info className={play ? "position blink" : "move"} id="info">
          {!load ? infoLoad : infoPlay}
        </Info>
      </TextWrapper>
      {!load ? initializeButton : playButton}
    </PlayerWrapper>
  );
};
