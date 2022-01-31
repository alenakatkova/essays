import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./i18nextConfig";

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
