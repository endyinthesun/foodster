import { makeAutoObservable } from "mobx";

class Navigation {
  filter = "All";
  constructor() {
    makeAutoObservable(this);
  }
  changeFilter(category) {
    this.filter = category;
  }
}

export default new Navigation();
