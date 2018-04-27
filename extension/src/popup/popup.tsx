import * as ReactDOM from "react-dom";
import * as React from "react";
import 'antd/dist/antd.css';
import "./style.scss";
import NewBookmarkForm from "./NewBookmarkForm";

ReactDOM.render(<NewBookmarkForm url='http://example.com'/>, document.getElementById('popup-root'));
