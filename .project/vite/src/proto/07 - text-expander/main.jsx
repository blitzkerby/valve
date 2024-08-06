import React, { StrictMode } from "react";
import ReactDOM from "react-dom"
import App from "./components/App.jsx"

const root = React.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)