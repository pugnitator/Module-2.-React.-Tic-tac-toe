import React, {useState} from "react";
import styled from "styled-components";

export function FieldLayout() {
    const [cells, setCells] = useState([
        '','','',
        '','','',
        '','','',
    ]);

    const Container = styled.div`
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    `

    function onClickButton() {

    }

    return (
        <Container onClick = {() => onClickButton()}>   
        </Container>
    )

}

function Cell(gamerTipe) {

    return (
        <div>

        </div>
    )
}