import { makeAutoObservable } from "mobx";

class Navigation {
  filter = "All";

  constructor() {
    makeAutoObservable(this);
  }
  changeFilter(title) {
    this.filter = title;
  }
}

export default new Navigation();
