import * as React from "react";
import {Component} from "react";
import {toJS} from "mobx";
import {observer} from "mobx-react";
import style from "./style.scss";
import Select from "antd/lib/select";
import Button from "antd/lib/button/button";
import PopupState from "./PopupState";
import algoliaLogo from "./search-by-algolia.png"

@observer
class Popup extends Component<{ popupState: PopupState }> {
  render() {
    const {url, tags, addTag, removeTag, save} = this.props.popupState;
    return (
      <div className={style.NewBookmarkForm} style={{width: 500}}>
        <div className='url'>{url} {toJS(tags)}</div>
        <Select mode="tags"
                placeholder="Select Tags"
                value={toJS(tags)}
                onSelect={addTag}
                onDeselect={removeTag}
                dropdownStyle={{display: 'none'}}/>
        <Button type="primary" onClick={save}>Save</Button>
        <div className='algolia-logo'>
          <img src={algoliaLogo}/>
        </div>
      </div>
    );
  }
}

export default Popup;
