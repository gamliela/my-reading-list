import * as React from "react";
import {Component} from "react";
import {observer} from "mobx-react";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";
import OptionsPageState from "./OptionsPageState";
import style from "./style.scss";
import Input from "antd/lib/input/Input";

@observer
class OptionsPage extends Component<{ optionsPageState: OptionsPageState }> {
  render() {
    const {personalDatabaseKey} = this.props.optionsPageState;
    return (
      <Row type="flex" justify="center">
        <Col xs={24} md={12}>
          <h1>Options</h1>
          <Input addonBefore="Personal Database Key" size="large" {...personalDatabaseKey.props}/>
        </Col>
      </Row>
    );
  }
}

export default OptionsPage;
