import { AppLayoutProps } from "./App";
import styled from "styled-components";

export function Informing(props: AppLayoutProps) {
    const {gamer, gameIsOver, winner} = props.props;

    console.log('Informing', gameIsOver);

    return(
        <GameInfo gameIsOver={gameIsOver}>
            <Winner hidden={!gameIsOver}>Победитель: {winner}</Winner>
            <WhoseTurn hidden={gameIsOver}>Сейчас ход <strong>{gamer? 'крестиков' : 'ноликов'}</strong></WhoseTurn>
        </GameInfo>
    )
}

const GameInfo = styled.div<{gameIsOver: boolean}>`
    text-align: center;
    align-content: center;
    margin: auto;
    height: 5vw;
    width: 30vw;
    background-color: ${(props) => Boolean(props.gameIsOver) ? '#8AE682' : 'white'};
    border-radius: 3px;
`;

const Winner = styled.p.attrs(props => ({
    'hidden': props['hidden']
}))``;
const WhoseTurn = styled.p.attrs(props => ({
    'hidden': props['hidden']
}))``;