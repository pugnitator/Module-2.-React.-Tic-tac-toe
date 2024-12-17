import styled from "styled-components";

export function Cell(props) {
	const { index, value, gameIsOver } = props;
	return (
		<CellButton data-id={index} disabled={gameIsOver}>
			{value}
		</CellButton>
	);
}

const CellButton = styled.button.attrs((props) => ({
	"data-id": props["data-id"],
}))`
	background-color: #f4faff;
	border: 1px solid #2e9aff;
	&:hover {
		background-color: #e6ebf0;
		cursor: pointer;
	}
	font-size: 50px;
`;