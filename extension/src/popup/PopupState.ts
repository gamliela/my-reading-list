import {action, observable} from "mobx";

class PopupState {
  url = "http://example.com";
  @observable tags: string[] = [];

  @action.bound
  addTag(tag: string) {
    this.removeTag(tag);
    this.tags.push(tag);
  }

  @action.bound
  removeTag(tag: string) {
    this.tags = this.tags.filter(s => s !== tag);
  }
}

export default PopupState;
