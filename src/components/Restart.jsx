import styled from "styled-components";
import { useDispatch } from "react-redux";
import { startNewGame } from "../ReduxToolkit/slice";

export function Restart() {
    const dispatch = useDispatch();

    function onClickButton() {
        dispatch(startNewGame());
    }

    return(
        <RestartButton onClick={onClickButton}>Начать заново</RestartButton>
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