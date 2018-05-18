import * as ReactDOM from "react-dom";
import * as React from "react";
import 'antd/dist/antd.css';
import "./style.scss";
import ErrorBoundary from "../shared_modules/ErrorBoundary";
import OptionsPage from "./OptionsPage";
import OptionsPageState from "./OptionsPageState";

const initialPopupComponent = (
  <ErrorBoundary>
    <OptionsPage optionsPageState={new OptionsPageState()}/>
  </ErrorBoundary>
);

ReactDOM.render(initialPopupComponent, document.getElementById('popup-root'));
