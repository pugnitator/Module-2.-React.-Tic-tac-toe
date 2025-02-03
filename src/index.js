import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppContainer } from "./App";
import { Provider } from 'react-redux';
import { store } from "./ReduxToolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</React.StrictMode>
);