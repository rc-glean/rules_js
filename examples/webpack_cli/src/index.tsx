import { render } from "react-dom";
import "./global.css";
import { App } from "./App";
import { card } from "./App.css";

const root = document.createElement("div");
document.body.appendChild(root);
const theDiv = <div className={card} />;

render(<App />, root);
