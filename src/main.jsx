import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-quill/dist/quill.snow.css";
import "bootstrap/dist/css/bootstrap.css";
import { BlogInfoProvider } from "./BlogInfoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogInfoProvider>
      <App />
    </BlogInfoProvider>
  </React.StrictMode>
);
