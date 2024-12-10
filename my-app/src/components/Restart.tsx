import { AppLayoutProps } from "../App";
import styled from "styled-components";

export function Restart(props: AppLayoutProps) {
    const {cells, setCells, emptyArray, setGameIsOver, setGamer} = props.props;
    const canRestart = cells.filter(item => item !== '').length === 0 ? false : true;

    function onClickButton() {
        setCells(emptyArray);
        setGameIsOver(false);
        setGamer(true);
    }

    return(
        <RestartButton disabled={!canRestart} onClick={onClickButton}>Начать заново</RestartButton>
    )
}

const RestartButton = styled.button.attrs(props => ({
    'disabled': props['disabled']}))`
    margin: auto;
    height: 5vw;
    background-color: #E66983;
	border: none;
    border-radius: 3px;
	&:hover {
		background-color: #B85468;
		cursor: pointer;
	};
    width: 20vw;
`