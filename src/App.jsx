import "./App.css";
import { FieldContainer } from "./components/field/FieldContainer";
import { Informing } from "./components/Information";
import { Restart } from "./components/Restart";

export function AppContainer() {
	return (
		<>
			<Informing />
			<FieldContainer />
			<Restart />
		</>
	);
}
