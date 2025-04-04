import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Rendering Error!!");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    //<React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
    //</React.StrictMode>
  );
}
