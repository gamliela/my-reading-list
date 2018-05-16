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

  @action.bound
  save() {
    // save on storage map from tag to url(s);
    // save on storage map from url to tag(s).


    // chrome.storage.sync.get('color', function (data) {
    //   changeColor.style.backgroundColor = data.color;
    //   changeColor.setAttribute('value', data.color);
    // });
    //
    //
    //
    // chrome.storage.sync.set({color: item}, function () {
    //});
  }
}

export default PopupState;
