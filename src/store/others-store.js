import { makeObservable, observable, action } from "mobx";
class OthersStore {
  modalVisible = false;

  constructor() {
    makeObservable(this, {
      modalVisible: observable,
      toggleModalVisible: action,
    });
  }

  toggleModalVisible() {
    this.modalVisible = !this.modalVisible;
  }
}

export default new OthersStore();
