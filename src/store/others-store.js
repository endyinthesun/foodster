import { makeAutoObservable, observable, action } from "mobx";
class OthersStore {
  modalFilterMenu = false;
  modalAbout = false;
  constructor() {
    makeAutoObservable(this);
  }

  toggleModalFilterMenu(toggle) {
    this.modalFilterMenu = toggle;
  }
  toggleModalAbout(toggle) {
    this.modalAbout = toggle;
  }
}

export default new OthersStore();
