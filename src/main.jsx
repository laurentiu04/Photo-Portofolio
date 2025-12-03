import { StrictMode } from "react";
import "./index.css";
import Home from "./Home.jsx";
import { BrowserRouter } from "react-router";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App  from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>	
			<App/>
		</BrowserRouter>
	</React.StrictMode>
);
