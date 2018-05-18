import * as ReactDOM from "react-dom";
import * as React from "react";
import 'antd/dist/antd.css';
import "./style.scss";
import Popup from "./Popup";
import PopupState from "./PopupState";
import ErrorBoundary from "../shared_modules/ErrorBoundary";
import Delayed from "../shared_modules/Delayed";

const initialPopupComponent = (
  <ErrorBoundary>
    {
      // workaround for Mac problem, when popup get a wrong size
      // https://bugs.chromium.org/p/chromium/issues/detail?id=428044
    }
    <Delayed delay={10}>
      <Popup popupState={new PopupState()}/>
    </Delayed>
  </ErrorBoundary>
);

ReactDOM.render(initialPopupComponent, document.getElementById('popup-root'));
