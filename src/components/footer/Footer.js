import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 8vh;
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const FooterText = styled.p`
    font-size: 0.8em;
    line-height: 2.5vh;
    margin: 0;
    color: #ddd;
    margin-left: 2em;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <FooterText>
                Este é um projeto educacional desenvolvido por: Thiago de Oliveira Miranda.
            </FooterText>
            <FooterText>
                Todos os direitos sobre a marca Naruto pertencem à: NARUTO © 1999 by Masashi Kishimoto/SHUEISHA Inc.
            </FooterText>
        </Wrapper>
    )
}
