import * as ReactDOM from "react-dom";
import * as React from "react";
import 'antd/dist/antd.css';
import "./style.scss";
import ErrorBoundary from "../shared_modules/ErrorBoundary";

const initialPopupComponent = (
  <ErrorBoundary>
    Hello World
  </ErrorBoundary>
);

ReactDOM.render(initialPopupComponent, document.getElementById('popup-root'));
