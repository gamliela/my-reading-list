import * as React from "react";
import {Component} from "react";
import {observer} from "mobx-react";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";
import OptionsPageState from "./OptionsPageState";
import style from "./style.scss";

@observer
class OptionsPage extends Component<{ optionsPageState: OptionsPageState }> {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col xs={24} md={12}>Hello World!</Col>
      </Row>
    );
  }
}

export default OptionsPage;
