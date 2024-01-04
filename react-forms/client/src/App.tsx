import { useState } from "react";
import { Express } from "./Express";
import { React } from "./React";

export function App() {
    const [choice, setChoice] = useState("none");

    return (
		<div>
			<b>Choose how to manage todo state </b>

			<button onClick={() => setChoice("express")}>Express State</button>
			<button onClick={() => setChoice("react")}>React State</button>

			{choice === "express" && <Express />}
			{choice === "react" && <React />}
		</div>
    );
}
