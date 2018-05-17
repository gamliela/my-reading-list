import {action, observable, toJS} from "mobx";

class PopupState {
  @observable url: string;
  @observable tags;

  constructor() {
    this.loadUrl();
    this.loadTags();
  }

  @action.bound
  loadUrl() {
    this.url = null;
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
      this.url = tabs[0].url;
    });
  }

  @action.bound
  loadTags() {
    this.tags = [];
    chrome.storage.sync.get(this.url, data => {
      const urlData = data[this.url];
      this.tags = (urlData && urlData.tags) || [];
    });
  }

  @action.bound
  save() {
    chrome.storage.sync.set({[this.url]: {tags: toJS(this.tags)}}, () => {
      //console.log('saved!');
    });
  }

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
