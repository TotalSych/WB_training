import ReactDOM from "react-dom/client";
import "styles/global.css";
import { App } from "App";
import "./index.css";

const rootElement = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
if (rootElement) {
  rootElement.render(<App />);
}
