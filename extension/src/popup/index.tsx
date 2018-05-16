import * as ReactDOM from "react-dom";
import * as React from "react";
import 'antd/dist/antd.css';
import "./style.scss";
import Popup from "./Popup";
import PopupState from "./PopupState";

ReactDOM.render(<Popup popupState={new PopupState()}/>, document.getElementById('popup-root'));
