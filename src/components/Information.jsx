import { useSelector } from "react-redux";
import styled from "styled-components";
import { X_GAMER } from "../ReduxToolkit/slice";

export function Informing() {
    const gameIsOver = useSelector(state => state.gameIsOver);
    const winner = useSelector(state => state.winner);
    const currentGamer = useSelector(state => state.currentGamer);

    console.log(gameIsOver);

    return(
        <GameInfo gameIsOver={gameIsOver}>
            <Winner hidden={!gameIsOver}>{winner? `Победитель: ${winner}` : 'Ничья'}</Winner>
            <WhoseTurn hidden={gameIsOver}>Сейчас ход <strong>
                {currentGamer === X_GAMER? 'крестиков' : 'ноликов'}</strong>
            </WhoseTurn>
        </GameInfo>
    )
}

const GameInfo = styled.div`
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