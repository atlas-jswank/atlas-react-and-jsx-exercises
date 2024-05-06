import React from "react";
import ReactDOM from "react-dom/client";

// Create a React element: <h1>Hello Atlas</h1>
const App = React.createElement("h1", {}, "React & JSX");

// Find the dom element with an id of "example" in the index.html file
const container = document.getElementById("example");

// Make the div element a root for a react application
const root = ReactDOM.createRoot(container);

// Rend our react element in the element replacing any html that was in there
root.render(App);
