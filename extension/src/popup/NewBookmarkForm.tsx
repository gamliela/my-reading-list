import * as React from "react";
import {Component} from "react";
import style from "./style.scss";
import Select from "antd/lib/select";
import Button from "antd/lib/button/button";

type NewBookmarkFormProps = {
  url: string
}

class NewBookmarkForm extends Component<NewBookmarkFormProps> {
  render() {
    const {url} = this.props;
    return (
      <div className={style.NewBookmarkForm}>
        <div className='url'>{url}</div>
        <Select mode="tags" placeholder="Select Tags">
          <Select.Option key='1'>Tag 1</Select.Option>
          <Select.Option key='2'>Tag 2</Select.Option>
        </Select>
        <Button type="primary">Save</Button>
      </div>
    );
  }
}

export default NewBookmarkForm;
