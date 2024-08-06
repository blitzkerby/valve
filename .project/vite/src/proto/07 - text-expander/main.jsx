import React, { StrictMode } from "react";
import ReactDOM from "react-dom"
import App from "./components/App.jsx"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)