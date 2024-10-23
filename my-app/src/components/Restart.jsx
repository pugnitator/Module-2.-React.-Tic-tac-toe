import React from "react";
import styled from "styled-components";

export function Restart(props) {
    const {cells, setCells, emptyArray} = props.props;
    const canRestart = cells.filter(item => item !== '').length === 0 ? false : true;


    function onClickButton() {
        setCells(emptyArray);
    }

    return(
        <RestartButton disabled={!canRestart} onClick={onClickButton}>Начать заново</RestartButton>
    )
}

const RestartButton = styled.button.attrs(props => ({
    'disabled': props['disabled']}))`
    margin: auto;
    background-color: #f4faff;
	border: 1px solid #2e9aff;
	&:hover {
		background-color: #e6ebf0;
		cursor: pointer;
	};
	font-size: 20px;
    width: 20vw;
`