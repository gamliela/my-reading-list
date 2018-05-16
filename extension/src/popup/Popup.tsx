import * as React from "react";
import {Component} from "react";
import style from "./style.scss";
import Select from "antd/lib/select";
import Button from "antd/lib/button/button";
import PopupState from "./PopupState";

class Popup extends Component<{ popupState: PopupState }> {
  popupState: PopupState;

  constructor(props) {
    super(props);
    this.popupState = this.props.popupState;
  }

  render() {
    const {url, addTag, removeTag, save} = this.popupState;
    return (
      <div className={style.NewBookmarkForm}>
        <div className='url'>{url}</div>
        <Select mode="tags" placeholder="Select Tags" onSelect={addTag} onDeselect={removeTag}
                dropdownStyle={{display: 'none'}}/>
        <Button type="primary" onClick={save}>Save</Button>
      </div>
    );
  }
}

export default Popup;
