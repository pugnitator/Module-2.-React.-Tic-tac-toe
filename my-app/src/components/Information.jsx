import React from "react";
import styled from "styled-components";

export function Informing(props) {
    const {gamer, gameIsOver, winner} = props.props;

    return(
        <GameInfo>
            <Winner hidden={!gameIsOver}>Победитель: {winner}</Winner>
            <WhoseTurn hidden={gameIsOver}>Сейчас ход <strong>{gamer? 'крестиков' : 'ноликов'}</strong></WhoseTurn>
        </GameInfo>
    )
}

const GameInfo = styled.div`
    text-align: center;
    margin: auto;
`;

const Winner = styled.p.attrs(props => ({
    'hidden': props['hidden']
}))``;
const WhoseTurn = styled.p``;