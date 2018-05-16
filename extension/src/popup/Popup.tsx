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

  onSave() {
    // save on storage map from tag to url(s);
    // save on storage map from url to tag(s).
  }

  render() {
    const {url} = this.popupState;
    return (
      <div className={style.NewBookmarkForm}>
        <div className='url'>{url}</div>
        <Select mode="tags" placeholder="Select Tags" onSelect={this.popupState.addTag}
                onDeselect={this.popupState.removeTag} dropdownStyle={{display: 'none'}}/>
        <Button type="primary" onClick={this.onSave.bind(this)}>Save</Button>
      </div>
    );
  }
}

export default Popup;
