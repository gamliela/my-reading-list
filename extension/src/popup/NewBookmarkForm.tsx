import * as React from "react";
import {Component} from "react";
import style from "./style.scss";
import Button from "antd/lib/button/button";

class NewBookmarkForm extends Component {
  render() {
    return <div className={style.NewBookmarkForm}>
      Hello World!
      <br/>
      <Button type="primary">OK</Button>
    </div>;
  }
}

export default NewBookmarkForm;
