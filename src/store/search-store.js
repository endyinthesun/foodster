import { makeAutoObservable } from "mobx";
class SearchStore {
  keyword = "";
  isFocused = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeKeyword(current) {
    this.keyword = current;
  }
  toggleIsFocused(toggle) {
    this.isFocused = toggle;
  }
}

export default new SearchStore();
